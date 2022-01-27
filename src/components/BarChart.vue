<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted () {
    const dates = [
      'FINISHED',
      'UNDONE'
    ]
    const totals = [this.$store.state.finished.length, this.$store.state.items.length]

    this.renderChart({
      labels: dates,
      datasets: [
        {
          label: ' TODAY ',
          data: totals,
          backgroundColor: [
            '#fdb9b9',
            '#a7a7a7'
          ]
        }
      ]
    },
    {
      responsive: true,
      maintainAspectRatio: false
    })
  }
}
</script>
