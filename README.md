# 组件名称 
  v-echarts
# 说明：
  这是一个集成echartsjs图表的vue组件，仅适用于vue3.0以下版本，可以绘制饼图、环形图、柱形图、折线图、平滑曲线图等。参考文档：https://echarts.apache.org/zh/index.html

# 使用的数据结构  
  { name: "数据1", value: 25, group: "" },
  
# 安装与引入
      安装echarts库
      npm install echarts --save
 
 全局引入echarts
 //全局引入echarts
 import * as echarts from 'echarts';
 //需要挂载到Vue原型上
 Vue.prototype.echarts = echarts;

# 页面中引用组件 
  假设VeCharts放在组件文件components中
  import VeCharts from "@/components/VeCharts";
 
 
 
# 使用实例
# 使用实例1
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
      
# 使用实例2
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
      
# 使用实例3
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
      
# 使用实例4
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
      
# 使用实例5
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
      
# 使用实例6
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
      
# 使用实例7
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
      
# 使用实例8
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
      
# 使用实例9
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
      
# 使用实例10
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
      
# 使用实例11
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
      
# 使用实例12
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
      
# 使用实例13
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
      
# 使用实例14
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
      
# 使用实例15
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
      
# 使用实例16
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
      
# 使用实例17
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
      
