<template>
  <div :id="chartsId" :style="{ background: bgColors }"></div>
</template>

<script>
import { echartsDataFormate } from "@/util/ve-charts";
export default {
  data() {
    return {
      mySeries: [],
      yAxisArr: []
    };
  },
  props: {
    /*必传参数 不传会影响显示
    chartsId random data type
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
    typeArr: {
      type: Array //type组和
    },

    // bar line
    /*
    坐标轴参数 x横坐标 y纵坐标  针对折线图、曲线图、柱形图
    */
    // X轴
    showXAxis: {
      type: Boolean, //X轴坐标显示
      default: true
    },
    axisLineX: {
      type: Boolean,
      default: true //坐标轴X
    },
    xAxisName: {
      type: String, //x轴的坐标轴名
      default: ""
    },
    axisLineXcolor: {
      type: String, //坐标轴X 颜色
      default: "#232323"
    },
    axisLineXType: {
      type: String, //网格轴线X 风格
      default: "solid" //默认直线solid 可设置虚线dashed
    },

    // Y轴
    dataIndex: {
      type: Number, //设置数组顺序
      default: 0
    },
    addYAxis: {
      type: Object,
      default: () => {}
    },
    showYAxis: {
      type: Boolean, //Y轴坐标显示
      default: true
    },
    yAxisName: {
      type: String, //y轴的坐标轴名
      default: "y轴的坐标轴名"
    },
    yAxisNameShow: {
      type: Boolean, //Y轴坐标名称显示
      default: false
    },
    axisLineY: {
      type: Boolean,
      default: true //坐标轴Y
    },
    axisLineYcolor: {
      type: String, //坐标轴Y 颜色
      default: "#232323"
    },
    axisLineYType: {
      type: String, //网格轴线Y 风格
      default: "solid" //默认直线solid 可设置虚线dashed
    },
    wordYRotate: {
      type: Number, //Y轴文字旋转
      default: 0
    },

    colors: {
      type: Array, //图表自定义颜色 必传
      default: () => [
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
      ]
    },
    dataType: {
      type: Number,
      default: 2 //数据类型 默认2维数据 可设置3维数据
    },
    title: {
      type: String, //设置标题
      default: ""
    },
    bgColors: {
      type: String, //背景图
      default: "#fff"
    },
    toolFormatter: {
      type: String, //背景图
      default: ""
    },

    /*
    //图例  公共设置 主要用于pie
    */
    legendShow: {
      type: Boolean, //图例是否显示
      default: true //默认truer 显示
    },
    legendWidth: {
      type: String, //图例显示区宽度
      default: "100%" //默认center
    },
    legendPost: {
      type: String, //图例位置
      default: "top" //默认center
    },
    legendPosl: {
      type: String, //图例位置左边距
      default: "center" //默认center
    },
    legendPosr: {
      type: String, //图例位置右边距
      default: "center" //默认center
    },
    legendVh: {
      type: String, //图例排列方式
      default: "horizontal" //horizontal
    },
    legendScroll: {
      type: String, //图例滚动
      default: "scroll" //scroll
    },
    legendTStyle: {
      type: String, //图例字体颜色
      default: "#333"
    },
    legendBStyle: {
      type: String, //图例名称颜色
      default: "#333"
    },
    legendCStyle: {
      type: String, //名称对应值的颜色
      default: "#333"
    },
    legendDStyle: {
      type: String, //名称对应百分比的颜色
      default: "#333"
    },
    legFontSize: {
      type: Number, //图例字体大小
      default: 12 //默认" "
    },
    legIconType: {
      type: String, //图例的形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
      default: "rect"
    },
    legItemWidth: {
      type: Number, //图例的形状  // 设置宽度
      default: 14
    },
    legItemHeight: {
      type: Number, //图例的形状  // 设置高度
      default: 10
    },
    legItemGap: {
      type: Number, //图例的形状  // .设置间距
      default: 10
    },
    /*
    字体设置
    */
    xFontSize: {
      type: Number, //X轴字体大小
      default: 12 //默认" "
    },
    yFontSize: {
      type: Number, //Y轴字体大小
      default: 12 //默认" "
    },
    wordXRotate: {
      type: Number, //x轴文字旋转
      default: 36
    },
    richBFontSize: {
      type: Number, //richB字体大小
      default: 16 //默认" "
    },
    richCFontSize: {
      type: Number, //richC字体大小
      default: 16 //默认" "
    },
    richDFontSize: {
      type: Number, //richD字体大小
      default: 16 //默认" "
    },

    /*
    图表显示位置
    */
    gridTop: {
      type: Number, //距离上边距top: 30,
      default: 30
    },
    gridRight: {
      type: Number, //距离右边距right: 20,
      default: 20
    },
    gridBottom: {
      type: Number, //距离下边距bottom: 30,
      default: 45
    },
    gridLeft: {
      type: Number, //距离左边距left: 50,
      default: 60
    },

    mixed: {
      type: Boolean,
      default: false //显示混合图形 针对bar、line混合
    },

    /*
    bar图表设置
    */
    barWidth: {
      type: Number, //柱形图柱形宽度
      default: 20
    },
    /*
    line图表设置
    */
    areaStyle: {
      type: Boolean,
      default: false //显示图表线性面积 针对line
    },
    areaStyleColor: {
      type: String, //图表图表线性面积颜色
      default: ""
    },
    axisLabelValue: {
      type: Object //自定义图表数据显示的单位 如 '{value} °C'
    },

    /*
    pie图表设置
    */
    labelShow: {
      type: Boolean,
      default: false //数值是否显示 针对pie
    },
    pieInRing: {
      type: String, //环形图里圈
      default: "40%" //默认40%
    },
    pieOutRing: {
      type: String, //环形图外圈
      default: "56%" //默认40%
    },
    labelPos: {
      type: String, //环形图里数值显示位置
      default: "top" //默认" "  //outside  center inner
    },
    formatters: {
      type: String, //环形图里数值显示的内容
      default: "{c}" //默认"
    },
    eposTb: {
      type: String, //饼图图表上、下位置
      default: "50%" //
    },
    eposLr: {
      type: String, //饼图图表左、右位置
      default: "50%"
    },
    showTotNum: {
      type: Boolean,
      default: false //显示环形图内数值 showTotNum、emphasisShow 要一起设置
    },
    emphasisShow: {
      type: Boolean,
      default: true //显示环形图内数值
    },
    /*
    设置环形图中间的显示内容
    */
    titleShow: {
      type: Boolean,
      default: false //环形中间的数值是否显示 针对pie
    },
    titleText: {
      type: String //定义显示的文字
    },
    /*
     刻度
     */
    axisTickShow: {
      type: Boolean,
      default: true //显示刻度
    },

    /*
     网格线
     */
    splitLineX: {
      type: Boolean,
      default: false //网格X
    },
    splitLineY: {
      type: Boolean,
      default: true //网格Y
    },
    splitLineXcolor: {
      type: String, //网格线X 颜色
      default: "#000"
    },
    splitLineYcolor: {
      type: String, //网格线Y 颜色
      default: "#e8e8e8"
    },
    splitLineType: {
      type: String, //网格轴线 风格
      default: "solid" //默认直线solid 可设置虚线dashed
    },
    horEChart: {
      type: Boolean,
      default: false //设置横向图表
    },

    /*
     图表特殊条件配置
     */
    eChertClick: {
      type: Function // 图表的点击事件
    },
    dataZoom: {
      type: Array //图表缩放
    },
    markLine: {
      type: Object // 添加平均值线
    },
    labelObj: {
      type: Object // 添加label
    },
    stacktotal: {
      type: Boolean,
      default: false //堆叠图
    },
    stackType: {
      type: Boolean,
      default: false //半堆叠图
    },
    graphic: {
      type: Boolean,
      default: false //是否为横向图表
    },
    isSmooth: {
      type: Boolean, //是否设置为平滑曲线
      default: false
    },
    showBackground: {
      type: Boolean, //是否显示柱形背景
      default: false
    },
    backgroundStyleColor: {
      type: String, //柱形背景颜色
      default: "rgba(180, 180, 180, 0.2)"
    },
    seriesItemStyle: {
      type: Object, //设置环形间隔
      default:()=>{}
    }
  },
  watch: {
    random: {
      handler() {
        this.draw();
      },
      deep: true
    }
  },
  computed: {},
  methods: {
    //绘制图表
    draw() {
      let barData = echartsDataFormate.GroupFormate(this.data, this.type); //处理针对line、bar等图表的数据
      // console.log("Mr. L 🚀 ~ barData", barData);
      let pieData = echartsDataFormate.NoGroupFormate(this.data, this.type); //处理针对pie图表的数据
      // console.log("Mr. L 🚀 ~ pieData", pieData);
      //barData.category, 作为x轴
      //barData.groups, 作为图例
      //barData.series, 图表内容
      let myOption = {},
        seriesData = {},
        xAxisSet = {}, 
        yAxisSet = {},
        titleSet = {};
      // 绑定图表id、
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.echarts.init(document.getElementById(this.chartsId));
      this.mySeries = [];
      barData.series.forEach((item, index) => {
        if (this.type) {
          item.type = this.type;
        } else {
          item.type = this.typeArr.find((iType, typeIndex) => {
            if (index == typeIndex) {
              return iType;
            }
          });
        }

        item.backgroundColor =
          this.bgColors[index] % this.bgColors.length || "";
        item.smooth = this.isSmooth;
        //显示柱形图背景颜色
        item.showBackground = this.showBackground;
        item.backgroundStyle = {
          color: this.backgroundStyleColor
        };
        //显示柱形图数值 只针对柱形图bar有用
        item.label = {
          show: this.labelShow,
          position: this.labelPos, //inner显示在图表上
          formatter: this.formatters //'{b|{b}}\n{c|{c}}'
        };
        // 是否显示均衡线
        if (this.markLine != {}) {
          item.markLine = this.markLine;
        }
        if (this.areaStyle) {
          // 显示线性图表面积 针对line
          item.stack = "Total";
          item.areaStyle = {};
          item.emphasis = {
            focus: "series"
          };
        }
        if (this.areaStyleColor) {
          item.areaStyle = {
            normal: {
              color: this.areaStyleColor
            }
          };
        }
        if (this.addYAxis && this.dataIndex == index) {
          item.yAxisIndex = 1;
        }
        //设置堆叠图
        if (this.stackType) {
          if (this.dataIndex === 1) {
            if (index >= this.dataIndex) {
              item.stack = "Ad";
              item.emphasis = {
                focus: "series"
              };
            }
          }
          if (this.dataIndex === 2) {
            if (index >= this.dataIndex) {
              item.stack = "Ad";
              item.emphasis = {
                focus: "series"
              };
            }
          }
        }
      });
      //如果是bar柱形图、line折线图、this.mixed混合图形
      if (this.type == "bar" || this.type == "line" || this.mixed) {
        // 针对柱形图柱形背景
        // line bar图表 公共设置
        //x轴的设置
        xAxisSet = {
          type: "category",
          show: true, //this.showXAxis,
          axisTick: {
            //轴刻度，在xAxis或yAxis根下
            show: this.axisTickShow
          },
          axisLine: {
            //坐标轴
            show: this.axisLineX,
            lineStyle: {
              type: this.splitLineType,
              color: this.axisLineXcolor
            }
          },
          axisLabel: {
            //轴文字，在xAxis或者yAxis根下
            show: true,
            rotate: this.wordXRotate, // 35
            textStyle: {
              color: this.legendTStyle, //更改坐标轴文字颜色
              fontSize: this.xFontSize //更改坐标轴文字大小
            }
          },
          splitLine: {
            show: this.splitLineX, //网格线
            lineStyle: {
              type: this.splitLineType
            }
          },
          data: barData.category.map(function(str) {
            return str.replace(/\s+/g, "\n");
          })
        };

        // y轴的设置
        yAxisSet = {
          type: "value",
          name: "", //y轴坐标轴名称
          axisTick: {
            //轴刻度，在xAxis或yAxis根下
            show: false
          },
          axisLine: {
            //坐标轴
            show: this.axisLineY,
            lineStyle: {
              type: this.axisLineYType,
              color: this.axisLineYcolor
            }
          },
          axisLabel: {
            //轴文字，在xAxis或者yAxis根下
            show: true,
            rotate: this.wordYRotate, // 文字旋转
            textStyle: {
              color: this.legendTStyle, //更改坐标轴文字颜色
              fontSize: this.yFontSize //更改坐标轴文字大小
            },
            formatter: this.axisLabelValue // '{c}数值'
          },
          splitLine: {
            show: this.splitLineY, //网格线
            lineStyle: {
              type: this.splitLineType,
              color: this.splitLineYcolor
            }
          }
        };
        this.yAxisArr.push(yAxisSet, this.addYAxis);
        this.yAxisArr.forEach((item, index) => {
          //Y轴坐标名称是否显示 只设置第一组数据
          if (this.yAxisNameShow && index == 0) {
            item.name = this.yAxisName;
          }
        });

        // bar line eCharts公共设置
        this.mySeries = barData.series;

        myOption = {
          //设置渐变色
          color: this.colors,
          // 设置图例
          legend: {
            show: this.legendShow,
            type: this.legendScroll, //'scroll',
            icon: this.legIconType, //"circle", 设置图例的形状
            itemWidth: this.legItemWidth,
            itemHeight: this.legItemHeight,
            itemGap: this.legItemGap,
            textStyle: {
              color: this.legendTStyle,
              fontSize: this.legFontSize
            }
          },
          // 图表大小
          grid: {
            top: this.gridTop,
            right: this.gridRight,
            bottom: this.gridBottom,
            left: this.gridLeft
          },
          dataZoom: this.dataZoom || [],
          //barWidth
          barWidth: this.barWidth,
          tooltip: {
            trigger: "axis",
            confine: true,
            formatter: this.toolFormatter,
            axisPointer: {
              type: "cross"
            }
          }
        };
        // 判断是3维数据
        if (this.dataType == 3) {
          myOption.legend.data = barData.groups;
        }

        if (this.horEChart) {
          // 设置横向图表
          myOption.xAxis = this.yAxisArr;
          myOption.yAxis = xAxisSet;
          myOption.series = this.mySeries;
        } else {
          myOption.xAxis = xAxisSet;
          myOption.yAxis = this.yAxisArr;
          myOption.series = this.mySeries;
        }
      }
      //如果是pie饼图 环形图
      if (this.type == "pie") {
        //饼图类的图表配置
        seriesData = {
          backgroundColor: this.bgColors || "",
          name: this.name, //这里是设置图表名
          type: this.type, //这里是设置图表类型
          // radius: ["40%", "70%"],
          center: [this.eposLr, this.eposTb], // center: ['70%', '50%'],
          radius: [this.pieInRing, this.pieOutRing], //调整圆环大小 圆环里圈 pieInRing 外圈 pieOutRing
          avoidLabelOverlap: false,
          //配置环形图 鼠标上移后数据 显示在图形中间
          label: {
            // alignTo: "edge",
            show: this.labelShow,
            // position: this.labelPos, //inner显示在图表上
            formatter: this.formatters, //'{b|{b}}\n{c|{c}}'
            textStyle: {
              fontSize: 14,
              color: "#000",
              fontWeight: 600,
              fontFamily: "Microsoft YaHei"
            },
            rich: {
              b: {
                fontSize: this.richBFontSize,
                color: this.legendBStyle,
                align: "left"
              },
              c: {
                fontSize: this.richCFontSize,
                color: this.legendCStyle,
                align: "left",
                lineHeight: 20
              },
              d: {
                fontSize: this.richDFontSize,
                color: this.legendDStyle,
                align: "left",
                lineHeight: 20
              }
            }
          },
          labelLine: {
            length: 15,
            length2: 40,
            maxSurfaceAngle: 80
          },
          //emphasisShow pie图表中间显示数据
          emphasis: {
            label: {
              show: this.emphasisShow,
              fontSize: "22"
            }
          },
          data: pieData.data
        };
        if (this.seriesItemStyle != "") {
          seriesData.itemStyle = this.seriesItemStyle;
        }
        this.mySeries.push(seriesData);

        // pic配置图表
        myOption = {
          title: {
            show: this.titleShow, // true, //是否显示
            zlevel: 0,
            text: this.titleText, //定义显示的文字
            // text: ['{name|总活动数}', '{value|32}'].join('\n '),
            rich: {
              value: {
                color: this.legendTStyle,
                fontSize: 40,
                fontWeight: "",
                lineHeight: 40
              },
              name: {
                color: this.legendTStyle,
                lineHeight: 20
              }
            },
            top: "center",
            left: "center",
            // textAlign: 'center',
            textStyle: {
              color: this.legendTStyle,
              rich: {
                value: {
                  color: this.legendTStyle,
                  fontSize: 40,
                  fontWeight: "",
                  lineHeight: 40
                },
                name: {
                  color: this.legendTStyle,
                  lineHeight: 20
                }
              }
            }
          },

          tooltip: {
            trigger: "item",
            formatter: this.toolFormatter,
            confine: true
          },
          //设置渐变色
          color: this.colors,
          // 设置图例
          legend: {
            show: this.legendShow,
            type: this.legendScroll, //'scroll',
            width: this.legendWidth,
            top: this.legendPost,
            left: this.legendPosl,
            right: this.legendPosr,
            data: pieData.categorys,
            textStyle: {
              color: this.legendTStyle,
              fontSize: this.legFontSize
            },
            orient: this.legendVh,
            icon: this.legIconType, //"circle",
            itemWidth: this.legItemWidth,
            itemHeight: this.legItemHeight,
            itemGap: this.legItemGap,
            rich: {
              b: {
                fontSize: 16,
                color: this.legendBStyle,
                align: "left"
              },
              c: {
                fontSize: 14,
                color: this.legendCStyle,
                align: "left"
                // lineHeight: 20,
              },
              d: {
                fontSize: 14,
                color: this.legendDStyle,
                align: "left"
                // lineHeight: 20,
              }
            }
          },
          // 图表位置
          grid: {
            top: this.gridTop,
            right: this.gridRight,
            bottom: this.gridBottom,
            left: this.gridLeft
          },
          //设置标题
          titleSet: titleSet,
          //barWidth
          barWidth: this.barWidth,
          // series配置 饼图环形图
          series: this.mySeries
        };
      }

      // 绘制图表
      myChart.setOption(myOption, true);
      myChart.on("click", params => {
        this.eChertClick(params);
      });

      if (this.showTotNum) {
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: 0
        });
        myChart.on("mouseover", v => {
          if (v.dataIndex != 0) {
            myChart.dispatchAction({
              type: "hideTip",
              seriesIndex: 0,
              dataIndex: 0
            });
            myChart.dispatchAction({
              type: "downplay",
              seriesIndex: 0,
              dataIndex: 0
            });
          }
        });
        myChart.on("mouseout", () => {
          myChart.dispatchAction({
            type: "showTip",
            seriesIndex: 0,
            dataIndex: 0
          });
          myChart.dispatchAction({
            type: "highlight",
            seriesIndex: 0,
            dataIndex: 0
          });
        });
      }
    }
  }
};
</script>
<style scoped></style>
