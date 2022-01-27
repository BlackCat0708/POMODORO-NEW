<template lang="pug">
#chart
  router-link(to='/')
    img(src="./../assets/svg/arrow-left-solid.svg")
  .pomodoro-container
    .page-title
      h1 ANALYTICS
      .line
    b-row.top
      b-col(cols="12")
        b-row
          b-col(cols="6")
            b-row
              b-col(cols="6")
                img.water(src="./../assets/svg/water.svg")
                .number
                  h3 TODAY
                  h1 {{ finishedText }}
              b-col(cols="6")
                .number
                  h3 WEEK
                  h1 {{ finishedText }}
          b-col(cols="6")
            b-row
              b-col(cols="6")
                img.water(src="./../assets/svg/water.svg")
                .number
                  h3 TODAY
                  h1 {{ undoneText }}
              b-col(cols="6")
                .number
                  h3 WEEK
                  h1 {{ undoneText }}
      b-col(cols="12")
        BarChart(style="width:1000px; height:400px; margin: auto;")
</template>

<script>
import BarChart from '../components/BarChart.vue'

export default {
  components: {
    BarChart
  },
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
    items () {
      return this.$store.state.items.map(item => {
        item.state = item.model.length > 2
        return item
      })
    },
    undoneText () {
      return this.$store.state.items.length
    },
    finished () {
      return this.$store.state.finished
    },
    finishedText () {
      return this.$store.state.finished.length
    }
  }
}
</script>
