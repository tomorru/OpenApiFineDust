<script>
import { Line } from 'vue-chartjs'

export default {
  name: 'LineChart',
  extends: Line,
  props: ['chartData'],
  data () {
    return {
      colorSets: [
        {fore: 'red', back: '#B71C1C'},
        {fore: 'blue', back: 'darkblue'}],
      datacollection: {
        labels: ['PM10', 'PM2.5'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [40, 20]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [ {
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      let data = this.chartData.chartData
      let datasets = []
      let pos = 0
      data.forEach((site) => {
        let colors = this.colorSets[pos]
        datasets.push({
          label: site.label,
          borderWidth: 2,
          borderColor: colors.back,
          backgroundColor: colors.back,
          pointBorderColor: colors.fore,
          pointBackgroundColor: colors.fore,
          fill: false,
          data: site.data })
        pos++
      })
      this.datacollection = { labels: this.chartData.labels, datasets: datasets }
      this.render()
    },
    render () {
      this.renderChart(this.datacollection, this.options)
    }
  }
}
</script>
