<template>
  <div style="display: flex; flex-direction: row;">
    <div style="flex: 1 1 30%;">
      <div style="text-align: right; margin-bottom:5px;">
        <button v-on:click="onBtExport()" style="font-weight: bold;">Export to Excel</button>
      </div>
      <ag-grid-vue
        class="ag-theme-alpine"
        style="width: 600px; height: 500px"
        :columnDefs="columnDefs"
        :rowData="rowData"
        @grid-ready="onGridReady"
      >
      </ag-grid-vue>
    </div>
    <div style="flex: 1 1 70%">
        <line-chart style="height:515px;" :chartData="chartData" v-if="!chartLoading"/>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue";
import LineChart from '@/components/LineChart'

export default {
  name: "DataList",
  data() {
    return {
      chartLoading: true,
      columnDefs: null,
      rowData: [],
      gridApi: null,
      gridColumnApi: null,
      chartData: []
    };
  },
  components: {
    LineChart,
    AgGridVue,
  },
  beforeMount() {
    this.columnDefs = [
      { headerName:"일시", field: "dataTime" },
      { headerName:"PM10", field: "pm10value" },
      { headerName:"PM2.5",field: "pm25value" },
    ];

    this.$axios.get("http://localhost:3000/select")
      .then(res => {
        console.log(res.data)
        if ( res == null || res.data == null ) {
          return
        }
        let labels =[];
        let chartData = [];
        let pm10Data = [];
        let pm25Data = [];

        this.rowData = res.data
        this.rowData.forEach( row =>{
          labels.push(row.dataTime);
          pm10Data.push(row.pm10value);
          pm25Data.push(row.pm25value);
        } )
        chartData.push({"label":"PM10", "data":pm10Data});
        chartData.push({"label":"PM10", "data":pm25Data});
        this.chartData = { labels: labels, chartData: chartData } // 차트 보이기
        this.chartLoading = false
      })
      .catch(function(error){
        console.log(error);
      });
  },
  methods:{
    onBtExport() {
      this.gridApi.exportDataAsCsv();
    },
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    }
  }
};
</script>
