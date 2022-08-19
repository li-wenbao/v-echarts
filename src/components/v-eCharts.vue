<template>
  <div :id="chartsId" :style="{ background: bgColors }"></div>
</template>

<script>
import { eChartsDataFormate } from "@/util/eCharts";
export default {
  name: "VeCharts",
  data() {
    return {};
  },
  props: {
    /*必传参数 不传会影响显示
    chartId random data type colors
    */
    chartsId: {
      type: String //图表id  必传
    },
    random: {
      type: Number,
      default: 0 //图表随机渲染数据  必传
    },
    data: {
      type: Array //图表初始数据  必传
    },
    type: {
      type: String, //图表类型  必传
      default: ""
    },
    dataType: {
      type: Number,
      default: 2 //数据类型 默认2维数据 可设置3维数据
    },
    bgColors: {
      type: String, //背景图
      default: "#fff"
    },
    colors: {
      type: Array, //图表自定义颜色 必传
      default: () => {
        return [
          "#0EB1E5",
          "#2DF09F",
          "#0072FF",
          "#00EAFF",
          "#F99608",
          "#FFF220",
          "#5d894a",
          "#1cdc07",
          "#4DA4F0",
          "#48EDD7"
        ];
      }
    }
  },
  watch: {
    random: {
      handler() {
        console.log("Mr. L 🚀 ~ random", this.random);
        this.drawECharts();
      },
      deep: true
    }
  },

  computed: {},
  methods: {
    //绘制图表
    drawECharts() {
      console.log("Mr. L 🚀 ~ eChartsDataFormate", eChartsDataFormate);
      let barData = eChartsDataFormate.GroupFormate(this.data, this.type); //处理针对line、bar等图表的数据

      console.log("Mr. L 🚀 ~ barData", barData);
      let pieData = eChartsDataFormate.NoGroupFormate(this.data, this.type); //处理针对pie图表的数据
      console.log("Mr. L 🚀 ~ pieData", pieData);
      //barData.category, 作为x轴
      //barData.groups, 作为图例
      //barData.series, 图表内容
      let myOption = {};
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.echarts.init(document.getElementById(this.chartsId));
      // 绘制图表
      myChart.setOption(myOption, true);
      myChart.on("click", params => {
        this.echertClick(params);
      });
    }
  }
};
</script>

<style scoped></style>
