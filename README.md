# 组件名称 
  v-echarts
# 说明：
  这是一个集成echartsjs图表的vue组件，仅适用于vue3.0以下版本，可以绘制饼图、环形图、柱形图、折线图、平滑曲线图等。参考文档：https://echarts.apache.org/zh/index.html

# 使用的数据结构  
      { name: "数据1", value: 25, group: "" },
  
# 安装与引入
      安装echarts库
      npm install echarts --save
 
      //全局引入echarts
      import * as echarts from 'echarts';
      //需要挂载到Vue原型上
      Vue.prototype.echarts = echarts;

# 页面中引用组件 
      假设VeCharts放在组件文件components中
      import VeCharts from "@/components/VeCharts";
# 组件参数      
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
      default: () => {}  //设置第二条y轴的信息 可在使用时自定义一个对象 配合
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
 
# 使用实例
# 实例1
     参数说明：
     chartsId="XXX" 设置eChats图的id
     :data="data" 传入显示数据 格式为 [{group:"",name:"",value:""},]
     type="bar" 柱形图
     showBackground:显示背景
     labelShow：显示数据数值
     labelPos="top" 数值显示在上边
     使用组件：
     <VeCharts
      chartsId="tu1"
      :data="data1"
      type="bar"
      showBackground
      labelShow
      labelPos="top"
      :random="random1"
      class="eChart-box-full"
    />
      
# 实例2
      参数说明：
      chartsId="XXX" 设置eChats图的id
      :data="data" 传入显示数据 格式为 [{group:"",name:"",value:""},]
      type="bar" 柱形图
      showBackground:显示背景
      yAxisNameShow 显示第一个y轴名称 yAxisName才能生效
      labelShow：显示数据数值
      :markLine="marker" 设置平均线
      labelPos="top" 数值显示在上边
      yAxisName="降水量" 设置y轴上的名称显示 
      使用组件：
      <VeCharts
        chartsId="tu1213324"
        :data="data1"
        type="bar"
        showBackground
        yAxisNameShow
        labelShow
        :markLine="marker"
        labelPos="top"
        yAxisName="降水量"
        :random="random1"
        class="eChart-box-full"
      />
      
# 实例3
      参数说明：
      chartsId="XXX" 设置eChats图的id
      :data="data" 传入显示数据 格式为 [{group:"",name:"",value:""},]
      :dataType="3" 三维数据会显示图例
      type="bar" 柱形图
      labelShow：显示数据数值
      labelPos="top" 数值显示在上边
      使用组件：
       <VeCharts
        chartsId="tu32456"
        :data="data2"
        :dataType="3"
        type="bar"
        labelShow
        labelPos="top"
        :random="random2"
        class="eChart-box-full"
      />
      
# 实例4
      参数说明：
      chartsId="XXX" 设置eChats图的id
      :data="data" 传入显示数据 格式为 [{group:"",name:"",value:""},]
      type="bar" 折线图
      isSmooth 设置为平滑曲线图
      labelShow：显示数据数值
      areaStyle 设置areaStyle 三维柱形图转为堆叠柱形图
      labelPos="top" 数值显示在上边
      使用组件：
      <VeCharts
        chartsId="tu6114264"
        :data="data2"
        type="bar"
        isSmooth
        labelShow
        areaStyle
        labelPos="top"
        :random="random2"
        class="eChart-box-full"
      />
      
# 实例5
      参数说明：
      chartsId="XXX" 设置eChats图的id
      :data="data" 传入显示数据 格式为 [{group:"",name:"",value:""},]
      chartsId="XXX" 设置eChats图的id  
      type="line" 折线图
      labelShow：显示数据数值
      :markLine="marker" 设置平均线
      labelPos="top" 数值显示在上边
      使用组件：
      <VeCharts
        chartsId="tu1324543"
        :data="data1"
        type="line"
        labelShow
        :markLine="marker"
        labelPos="top"
        :random="random1"
        class="eChart-box-full"
      />
      
# 实例6
      参数说明：
      chartsId="XXX" 设置eChats图的id
      :data="data" 传入显示数据 格式为 [{group:"",name:"",value:""},]
      type="line" 折线图
      isSmooth 设置为平滑曲线图
      labelShow：显示数据数值
      :markLine="marker" 设置平均线
      labelPos="top" 数值显示在上边
      使用组件：
       <VeCharts
        chartsId="tu4353"
        :data="data1"
        type="line"
        isSmooth
        labelShow
        labelPos="top"
        :random="random1"
        class="eChart-box-full"
      />
      
# 实例7
      参数说明：
      chartsId="XXX" 设置eChats图的id
      :data="data" 传入显示数据 格式为 [{group:"",name:"",value:""},]
      type="line" 折线图
      isSmooth 设置为平滑曲线图
      labelShow：显示数据数值
      areaStyle 设置面积图 针对line图有用
      :markLine="marker" 设置平均线
      labelPos="top" 数值显示在上边
      使用组件：
      <VeCharts
        chartsId="tu43533345"
        :data="data1"
        type="line"
        isSmooth
        labelShow
        areaStyle
        labelPos="top"
        :random="random1"
        class="eChart-box-full"
      />
      
# 实例8
      参数说明：
      chartsId="XXX" 设置eChats图的id
      :data="data" 传入显示数据 格式为 [{group:"",name:"",value:""},]
      type="line" 折线图
      isSmooth 设置为平滑曲线图
      labelShow：显示数据数值
      areaStyle 设置面积图 针对line图有用
      areaStyleColor="#f0f" 设置areaStyleColor为面积图添加自定义颜色
      :markLine="marker" 设置平均线
      labelPos="top" 数值显示在上边
       使用组件：
       <VeCharts
        chartsId="tu4353255"
        :data="data1"
        type="line"
        isSmooth
        labelShow
        areaStyle
        areaStyleColor="#f0f"
        labelPos="top"
        :random="random1"
        class="eChart-box-full"
      />
      
# 实例9
      参数说明：
      chartsId="XXX" 设置eChats图的id
      :data="data" 传入显示数据 格式为 [{group:"",name:"",value:""},]
      type="line" 折线图
      isSmooth 设置为平滑曲线图
      labelShow：显示数据数值
      :markLine="marker" 设置平均线
      labelPos="top" 数值显示在上边
      使用组件：
       <VeCharts
        chartsId="tu43533435"
        :data="data2"
        type="line"
        isSmooth
        labelShow
        areaStyle
        labelPos="top"
        :random="random2"
        class="eChart-box-full"
      />
      
# 实例10
      参数说明：
      chartsId="XXX" 设置eChats图的id
      :data="data" 传入显示数据 格式为 [{group:"",name:"",value:""},]
      :typeArr="['line', 'bar', 'bar']" 设置混合图形 折线图柱形图混和
      mixed 设置混合图形 typeArr和mixed必须同时设置才能生效
      :addYAxis="addYAxis" 设置第二条y轴的信息
      dataIndex data数组的索引 用于设置addYAxis数字
      type="line" 折线图
      isSmooth 设置为平滑曲线图
      labelShow：显示数据数值
      labelPos="top" 数值显示在上边
      使用组件：
      <VeCharts
        chartsId="tu32435df"
        :data="data2"
        :typeArr="['line', 'bar', 'bar']"
        mixed
        :dataIndex="0"
        :addYAxis="addYAxis"
        isSmooth
        labelShow
        labelPos="top"
        :random="random2"
        class="eChart-box-full"
      />
      
# 实例11
      参数说明：
      chartsId="XXX" 设置eChats图的id
      :data="data" 传入显示数据 格式为 [{group:"",name:"",value:""},]
      :typeArr="['line', 'bar', 'bar']" 设置混合图形 折线图柱形图混和
      mixed 设置混合图形 typeArr和mixed必须同时设置才能生效
      :addYAxis="addYAxis" 设置第二条y轴的信息
      dataIndex data数组的索引 用于设置addYAxis数字
      type="line" 折线图
      isSmooth 设置为平滑曲线图
      labelShow：显示数据数值
      labelPos="top" 数值显示在上边
      使用组件：
      <VeCharts
        chartsId="tu324397778"
        :data="data3"
        :typeArr="['line', 'bar', 'bar']"
        mixed
        :dataIndex="0"
        yAxisNameShow
        yAxisName="降水量"
        :addYAxis="addYAxis"
        isSmooth
        labelShow
        labelPos="top"
        :random="random3"
        class="eChart-box-full"
      />
      
# 实例12
      参数说明：
      chartsId="XXX" 设置eChats图的id
      :data="data" 传入显示数据 格式为 [{group:"",name:"",value:""},]
      stackType 设置半堆叠图 需要配合 dataIndex 如 dataIndex=1 第二项开始堆叠
      dataIndex data数组的索引 用于设置addYAxis数字
      type="line" 折线图
      isSmooth 设置为平滑曲线图
      labelShow：显示数据数值
      labelPos="top" 数值显示在上边
      使用组件：
      <VeCharts
        chartsId="tu32435232435"
        :data="data2"
        type="bar"
        stackType
        :dataIndex="1"
        isSmooth
        labelShow
        labelPos="top"
        :random="random2"
        class="eChart-box-full"
      />
      
# 实例13
      参数说明：
      chartsId="XXX" 设置eChats图的id
      :data="data" 传入显示数据 格式为 [{group:"",name:"",value:""},]
      type="bar" 柱形图
      horEChart 设置横向图表
      showBackground:显示背景
      labelShow：显示数据数值
      labelPos="top" 数值显示在上边
      使用组件：
      <VeCharts
        chartsId="tu126315"
        :data="data1"
        type="bar"
        horEChart
        showBackground
        labelShow
        labelPos="right"
        :random="random1"
        class="eChart-box-full"
      />
      
# 实例14
      参数说明：
      chartsId="XXX" 设置eChats图的id
      :data="data" 传入显示数据 格式为 [{group:"",name:"",value:""},]
      stackType 设置半堆叠图 需要配合 dataIndex 如 dataIndex=1 第二项开始堆叠
      dataIndex data数组的索引 用于设置addYAxis数字
      type="line" 折线图
      horEChart 设置横向图表
      isSmooth 设置为平滑曲线图
      labelShow：显示数据数值
      labelPos="top" 数值显示在上边
      使用组件：
      <VeCharts
        chartsId="tu266322"
        :data="data2"
        type="bar"
        stackType
        horEChart
        :dataIndex="1"
        isSmooth
        labelShow
        labelPos="right"
        :random="random2"
        class="eChart-box-full"
      />
      
# 实例15
      参数说明：
      chartsId="XXX" 设置eChats图的id
      :data="data" 传入显示数据 格式为 [{group:"",name:"",value:""},]
      type="pie" 饼图
      pieInRing="0" 设置为0是饼图
      labelShow：显示数据数值
      使用组件：
      <VeCharts
        chartsId="tu26632232435"
        :data="data1"
        type="pie"
        labelShow
        pieInRing="0"
        :formatters="'{b|{b}}\n{c|{c}}'"
        :random="random1"
        class="eChart-box-full"
      />
      
# 实例16
      参数说明：
      chartsId="XXX" 设置eChats图的id
      :data="data" 传入显示数据 格式为 [{group:"",name:"",value:""},]
      type="pie" 饼图
      pieInRing="0" pieInRing="0"数值不等于0是环形图
      labelShow：显示数据数值
      使用组件：
      <VeCharts
        chartsId="tu2232435"
        :data="data1"
        type="pie"
        labelShow
        pieInRing="35%"
        :formatters="'{b|{b}}\n{c|{c}}'"
        :random="random1"
        class="eChart-box-full"
      />
      
# 实例17
      参数说明：
      chartsId="XXX" 设置eChats图的id
      :data="data" 传入显示数据 格式为 [{group:"",name:"",value:""},]
      type="pie" 饼图
      pieInRing="0" pieInRing="0"数值不等于0是环形图
      labelShow：显示数据数值
      使用组件：
       <VeCharts
        chartsId="tu236932435"
        :data="data1"
        type="pie"
        labelShow
        pieInRing="35%"
        legendBStyle="#f0f"
        :formatters="'{b|{b}}\n{c|{c}}'"
        :seriesItemStyle="seriesItemStyle"
        :random="random1"
        class="eChart-box-full"
      />
      
