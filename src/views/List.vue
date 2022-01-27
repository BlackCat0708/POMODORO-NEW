<template lang="pug">
#list
  router-link(to='/')
    img(src="./../assets/svg/arrow-left-solid.svg")
  .pomodoro-container
    .page-title
      h1 TO DO LIST
      .line
    b-row
      b-col(cols="12" md="6")
        h1 WORK
        .tableScroll
          b-table(:items="items" :fields="fields" show-empty hover fixed)
            template(#empty)
              p.text-center nothing to do
            template(#cell(check)="data")
              b-form-checkbox(v-model="data.item.finished" :key="data.item.id" @input="finishWork(data.item.id)")
            template(#cell(name)="data")
              b-form-input(
                v-if="data.item.edit"
                v-model="data.item.model"
                :state="data.item.state"
                @keydown.enter="submitedit(data.index)"
                @keydown.esc="canceledit(data.index)"
              )
              span(v-else) {{ data.value }}
            template(#cell(action)="data")
              span(v-if="data.item.edit")
                b-btn.mx-1(variant="success")
                  b-icon(icon="check" @click="submitedit(data.index)")
                b-btn.mx-1(variant="secondary")
                  b-icon(icon="arrow-counterclockwise" @click="canceledit(data.index)")
              span(v-else)
                b-btn.mx-1(variant="success")
                  b-icon(icon="pencil" @click="edititem(data.index)")
                b-btn.mx-1(variant="danger")
                  b-icon(icon="trash" @click="delitem(data.index)")
        b-form-group(label-for="newinput" invalid-feedback="字數太少")
          b-input-group
            b-form-input#newinput(placeholder="add a new mission..." v-model="newinput" :state="newinputstate" @keydown.enter="additem")
            b-input-group-append
              b-button(@click="additem" variant="light")
                b-icon(icon="plus")
      b-col(cols="12" md="6")
        h1 DONE
        .tableScroll
          b-table-simple(hover)
            tbody
              tr(v-for="(item, idx) in finished")
                td
                  b-form-checkbox(v-model="item.finished" disabled)
                td {{ item.name }}
                td
                  b-btn(variant="danger" @click="delfinish(idx)")
                    b-icon(icon="trash")
              tr(v-if="finished.length === 0")
                td.text-center(colspan="2") nothing
</template>

<script>
export default {
  data () {
    return {
      newinput: '',
      fields: [
        { key: 'check', label: '完成' },
        { key: 'name', label: '名稱' },
        { key: 'action', label: '操作' }
      ]
    }
  },
  computed: {
    newinputstate () {
      return this.newinput.length > 2 ? true : this.newinput.length === 0 ? null : false
    },
    items () {
      return this.$store.state.items.map(item => {
        item.state = item.model.length > 2
        return item
      })
    },
    finished () {
      return this.$store.state.finished
    }
  },
  methods: {
    additem () {
      if (this.newinput.length >= 2) {
        this.$store.commit('additem', this.newinput)
        this.newinput = ''
      }
    },
    edititem (index) {
      this.$store.commit('edititem', index)
    },
    delitem (index) {
      this.$store.commit('delitem', index)
    },
    submitedit (index) {
      if (this.items[index].state) {
        this.$store.commit('submitedit', index)
      }
    },
    canceledit (index) {
      this.$store.commit('canceledit', index)
    },
    delfinish (index) {
      this.$store.commit('delfinish', index)
    },
    finishWork (id) {
      this.$store.commit('finishWork', id)
    }
  }
}
</script>
