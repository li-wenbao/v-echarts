<template>
  <div class="box-flex">
    <div style="height:50%;width:33.33%">
      <VeCharts chartsId="tu2232435" :data="data1" type="pie" labelShow pieInRing="35%" :formatters="'{b|{b}}\n{c|{c}}'"
        :random="random1" class="eChart-box-full" />
    </div>
    <div style="height:50%;width:33.33%">
      <VeCharts chartsId="tu236932435" :data="data1" type="pie" labelShow pieInRing="35%" legendBStyle="#f0f"
        :formatters="'{b|{b}}\n{c|{c}}'" :seriesItemStyle="seriesItemStyle" :random="random1" class="eChart-box-full" />
    </div>
  </div>
</template>

<script>
import VeCharts from "@/components/VeCharts";
export default {
  components: {
    VeCharts
  },
  data() {
    return {
      dialog: true,
      random1: 0,
      data1: [],
      random2: 0,
      data2: [],
      data3: [],
      random3: 0,
      addYAxis: {
        type: "value",
        name: "温度",
        min: 0,
        max: 45,
        interval: 5,
        axisLabel: {
          formatter: "{value} °C"
        }
      },
      seriesItemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2
      },
      marker: {
        silent: true,
        itemStyle: {
          color: "#f0f"
        },
        lineStyle: {
          color: "#f0f"
        },
        data: [
          {
            yAxis: 25
          }
        ]
      },
      labelObj: {
        rotate: 90,
        align: "left",
        verticalAlign: "middle",
        position: "insideBottom",
        distance: 15,
        formatter: "{c}{name|{a}}",
        fontSize: 16,
        rich: {
          name: {}
        }
      }
    };
  },
  mounted() {
    this.data1 = [
      { name: "数据1", value: 25, group: "" },
      { name: "数据2", value: 20, group: "" },
      { name: "数据3", value: 45, group: "" },
      { name: "数据4", value: 35, group: "" },
      { name: "数据5", value: 30, group: "" },
      { name: "数据6", value: 15, group: "" }
    ];
    this.random1 = Math.random();

    this.data2 = [
      { name: "数据1", value: 25, group: "温度" },
      { name: "数据2", value: 20, group: "温度" },
      { name: "数据3", value: 45, group: "温度" },
      { name: "数据4", value: 35, group: "温度" },
      { name: "数据5", value: 30, group: "温度" },
      { name: "数据6", value: 15, group: "温度" },
      { name: "数据1", value: 10, group: "降水量" },
      { name: "数据2", value: 5, group: "降水量" },
      { name: "数据3", value: 22, group: "降水量" },
      { name: "数据4", value: 47, group: "降水量" },
      { name: "数据5", value: 71, group: "降水量" },
      { name: "数据6", value: 81, group: "降水量" },
      { name: "数据1", value: 3, group: "蒸发量" },
      { name: "数据2", value: 8, group: "蒸发量" },
      { name: "数据3", value: 10, group: "蒸发量" },
      { name: "数据4", value: 14, group: "蒸发量" },
      { name: "数据5", value: 16, group: "蒸发量" },
      { name: "数据6", value: 18, group: "蒸发量" }
    ];
    this.random2 = Math.random();

    this.data3 = [
      { name: "1月", value: 0, group: "温度" },
      { name: "2月", value: 8, group: "温度" },
      { name: "3月", value: 13, group: "温度" },
      { name: "4月", value: 15, group: "温度" },
      { name: "5月", value: 16, group: "温度" },
      { name: "6月", value: 22, group: "温度" },
      { name: "1月", value: 10, group: "降水量" },
      { name: "2月", value: 5, group: "降水量" },
      { name: "3月", value: 22, group: "降水量" },
      { name: "4月", value: 47, group: "降水量" },
      { name: "5月", value: 71, group: "降水量" },
      { name: "6月", value: 81, group: "降水量" }
    ];
    this.random3 = Math.random();
  },
  methods: {}
};
</script>

<style scoped>
.fontsize {
  width: 80px;
  height: 80px
}

.box-flex {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

/* 
.eChart-box-full 一般都是这样 
可以放在项目得公共样式里
*/
.eChart-box-full {
  width: 100%;
  height: 100%;
}
</style>
