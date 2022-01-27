<template lang="pug">
#home
  .sidebar
    P 2022CHALLENGE.THEF2E.COM
    p POMODORO
  .home-container
    b-row
      b-col(cols="6")
        .workTitle
          img.arrow(src="./../assets/svg/skip.svg" :style="{ filter : arrowFilter }")
          h1(:style="{ color }") {{ currentText }}
          .water
            img(src="./../assets/svg/water.svg" :style="{ filter : waterFilter }")
            img(src="./../assets/svg/water.svg" :style="{ filter : waterFilter }")
        .list
          b-form-group(label-for="newinput" invalid-feedback="字數太少")
            b-input-group
              b-form-input#newinput(placeholder="add a new mission..." v-model="newinput" :state="newinputstate" @keydown.enter="additem")
              b-input-group-append
                b-button(@click="additem" variant="light")
                  b-icon(icon="plus")
          .tableScroll
            b-table(:items="items" :fields="fields" show-empty hover fixed)
              template(#empty)
                p.text-center nothing to do .
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
      b-col(cols="6")
        .pomodoro
          .circle(:style="{ border }")
          .progress(ref="progress")
            .progress-circle(:style="{ background }")
          h2 {{ timeText }}
        .tool-button
          b-btn.mx-2(variant="light" v-if="status !== 1" @click="start")
            b-icon(icon="play-fill")
          b-btn.mx-2(variant="light" v-else @click="pause")
            b-icon(icon="pause-fill")
          b-btn.mx-2(variant="light" v-if="current.length > 0" @click="finish(true)")
            b-icon(icon="skip-end-fill")
</template>

<script>
export default {
  data () {
    return {
      // 0 = 停止
      // 1 = 倒數中
      // 2 = 暫停
      status: 0,
      timer: 0,
      newinput: '',
      fields: [
        { key: 'check', label: '完成' },
        { key: 'name', label: '名稱' },
        { key: 'action', label: '操作' }
      ]
    }
  },
  computed: {
    current () {
      return this.$store.state.current
    },
    items () {
      return this.$store.state.items.map(item => {
        item.state = item.model.length > 2
        return item
      })
    },
    currentText () {
      return this.current.length > 0 ? this.current : this.items.length > 0 ? 'Click to start' : 'Please add a new mission .'
    },
    timeleft () {
      return this.$store.state.timeleft
    },
    timeText () {
      const m = Math.floor(this.timeleft / 60).toString().padStart(2, '0')
      const s = Math.floor(this.timeleft % 60).toString().padStart(2, '0')
      return `${m} : ${s}`
    },
    newinputstate () {
      return this.newinput.length > 2 ? true : this.newinput.length === 0 ? null : false
    },
    finished () {
      return this.$store.state.finished
    },
    border () {
      return this.status === 2 ? '65px solid #dbdbdb' : this.$store.state.break === false && this.status === 1 ? '65px solid #fdb9b9' : this.status === 0 ? '65px solid #ffeded' : '65px solid #9aeaf0'
    },
    background () {
      return this.status === 2 ? '#e2bb8f' : this.$store.state.break === false && this.status === 1 ? '#9aeaf0' : this.status === 0 ? 'white' : '#fdb9b9'
    },
    color () {
      return this.status === 2 ? '#e2bb8f' : this.$store.state.break === false && this.status === 1 ? '#ff8d8d' : this.status === 0 ? '#707070' : '#9aeaf0'
    },
    arrowFilter () {
      return this.status === 2 || this.status === 0 ? 'invert(86%) sepia(4%) saturate(10%) hue-rotate(6deg) brightness(80%) contrast(79%)' : ' invert(83%) sepia(45%) saturate(274%) hue-rotate(132deg) brightness(97%) contrast(94%)'
    },
    waterFilter () {
      return this.status === 2 || this.status === 0 ? 'invert(86%) sepia(4%) saturate(10%) hue-rotate(6deg) brightness(80%) contrast(79%)' : ' invert(59%) sepia(18%) saturate(1022%) hue-rotate(314deg) brightness(107%) contrast(103%)'
    }
  },
  methods: {
    start () {
      if (this.status === 0 && this.items.length > 0) {
        this.$store.commit('start')
      }
      if (this.current.length) {
        this.status = 1
        this.timer = setInterval(() => {
          this.$store.commit('countdown')
          if (this.$store.state.break === false) {
            this.$refs.progress.style.transform = `rotate(${-this.timeleft % 360 + 60}deg)`
          } else if (this.$store.state.break === true) {
            this.$refs.progress.style.transform = `rotate(${-this.timeleft % 360 + 300}deg)`
          }
          if (this.timeleft <= -1) {
            this.finish(false)
          }
        }, 1000)
      }
    },
    pause () {
      this.status = 2
      clearInterval(this.timer)
    },
    finish (skip) {
      clearInterval(this.timer)
      this.status = 0
      this.$store.commit('finish')

      if (!skip) {
        const audio = new Audio()
        if (this.items.length === 0) {
          audio.src = require('@/assets/ringtones/' + this.$store.state.sounds.work)
        } else if (this.$store.state.break === true) {
          audio.src = require('@/assets/ringtones/' + this.$store.state.sounds.work)
        } else {
          audio.src = require('@/assets/ringtones/' + this.$store.state.sounds.break)
        }
        audio.play()
        audio.volume = this.$store.state.sounds.volume
      }

      if (this.items.length > 0) {
        this.start()
      }
    },
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
    finishWork (id) {
      this.$store.commit('finishWork', id)
    }
  }
}
</script>
