
import Vue from "vue";

/**
 * 检测数组是否存在
 * @param obj
 * @returns {Boolean}
 */
Array.prototype.contains = function (obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
};
/**
 * 数组中最大值 最小值
 * @param array
 * @returns
 */
Array.prototype.max = function () {
    return Math.max.apply({}, this);
};
Array.prototype.min = function () {
    return Math.min.apply({}, this);
};

export let echartsDataFormate = {
    /**
     *整理数据没有分组类型的，适合饼图
     */
    NoGroupFormate: function (data) {
        //category 的数据存储
        var categorys = [];
        //data 的数据存储
        var datas = [];
        var keys = [];
        //遍历
        for (var i = 0; i < data.length; i++) {
            categorys.push(data[i].name || "");
            //定义一个中间变量
            var temp_data = {
                id: data[i].id || 0,
                value: data[i].value || 0,
                name: data[i].name || "",
                key: data[i].key || ""
            };
            datas.push(temp_data);
        }
        return {categorys: categorys, data: datas};
    },
    //整理数据有分组类型的，适合折线图、柱形图（分组，堆积）
    //数据格式：group：XXX，name：XXX，value：XXX
    /**
     * @param data : json数据<br>
     * @param type : 图表类型<br>
     * var data1 = [ <br>
     *    { group:'类型1' , name: '1月', value: 10 }, <br>
     *    { group:'类型2' , name: '1月', value: 15 }, <br>
     *    { group:'类型1' , name: '2月', value: 25 }, <br>
     *    { group:'类型2' , name: '2月', value: 12 }, <br>
     *    { group:'类型1' , name: '3月', value: 22 }, <br>
     *    { group:'类型2' , name: '3月', value: 12 }, <br>
     *    ];
     *
     */
    GroupFormate: function (data, type) {
        //用于存储类型名称
        var groups = new Array();
        //用于存储data.name数据
        var names = new Array();
        //存储返回series数据 （一个或者多个）
        var series = new Array();
        let k = 0, i = 0;

        for (i = 0; i < data.length; i++) {
            //判断data[i].group是否存在数租groups中
            if (!groups.contains(data[i].group)) {
                //不存在则跳进 存放
                groups.push(data[i].group);
            }

            //判断name数据是否存在 数组names中
            if (!names.contains(data[i].name)) {
                //不存在则跳进 存放
                names.push(data[i].name);
            }
        }
        //遍历分类
        for (i = 0; i < groups.length; i++) {
            //定义一个series中间变量
            var temp_series = {};
            //定义data.value数据存储
            var temp_data = new Array();

            for (k = 0; k < names.length; k++) {
                temp_data.push(0);
            }
            //遍历所有数据
            for (var j = 0; j < data.length; j++) {
                //遍历data.name数据
                for (k = 0; k < names.length; k++) {
                    //判断所有分类中的所有数据含name数据分开
                    if (groups[i] == data[j].group && names[k] == data[j].name) {
                        temp_data[k] = {id: data[j].id || 0, value: data[j].value, key: data[j].key || ''};
                    }
                }
            }
            temp_series = {name: groups[i], type: type, data: temp_data};
            series.push(temp_series);
        }
        return {groups: groups, category: names, series: series};
    },

    BarFormate: function (data, type) {
        switch (type) {
            // eslint-disable-next-line no-case-declarations
            case 1:
                //用于存储类型名称
                var groups = new Array();
                //用于存储data.name数据
                var names = new Array();
                //存储返回series数据 （一个或者多个）
                var series = new Array();
                let k = 0, i = 0;
                for (i = 0; i < data.length; i++) {
                    //判断data[i].group是否存在数租groups中
                    if (!groups.contains(data[i].group)) {
                        //不存在则跳进 存放
                        groups.push(data[i].group);
                    }

                    //判断name数据是否存在 数组names中
                    if (!names.contains(data[i].name)) {
                        //不存在则跳进 存放
                        names.push(data[i].name);
                    }
                }
                for (k = 0; k < names.length; k++) {
                    temp_data.push(0);
                }
                //遍历分类
                for (i = 0; i < groups.length; i++) {
                    //定义一个series中间变量
                    var temp_series = {};
                    //定义data.value数据存储
                    var temp_data = new Array();
                    //遍历所有数据
                    for (var j = 0; j < data.length; j++) {
                        //遍历data.name数据
                        for (k = 0; k < names.length; k++) {
                            //判断所有分类中的所有数据含name数据分开
                            if (groups[i] == data[j].group && names[k] == data[j].name) {
                                temp_data[k] = data[j].value;
                            }
                        }
                    }
                    temp_series = {
                        name: groups[i],
                        type: "bar",
                        data: temp_data,
                        smooth: true,
                    };
                    series.push(temp_series);
                }
                return {groups: groups, category: names, series: series};
            case 2:
                //用于存储类型名称
                var groups = new Array();
                //用于存储data.name数据
                var names = new Array();
                //存储返回series数据 （一个或者多个）
                var series = new Array();

                for (i = 0; i < data.length; i++) {
                    //判断data[i].group是否存在数租groups中
                    if (!groups.contains(data[i].group)) {
                        //不存在则跳进 存放
                        groups.push(data[i].group);
                    }

                    //判断name数据是否存在 数组names中
                    if (!names.contains(data[i].name)) {
                        //不存在则跳进 存放
                        names.push(data[i].name);
                    }
                }
                for (k = 0; k < names.length; k++) {
                    temp_data.push(0);
                }
                //遍历分类
                for (i = 0; i < groups.length; i++) {
                    //定义一个series中间变量
                    var temp_series = {};
                    //定义data.value数据存储
                    var temp_data = new Array();
                    //遍历所有数据
                    for (var j = 0; j < data.length; j++) {
                        //遍历data.name数据
                        for (k = 0; k < names.length; k++) {
                            //判断所有分类中的所有数据含name数据分开
                            if (groups[i] == data[j].group && names[k] == data[j].name) {
                                temp_data[k] = data[j].value;
                            }
                        }
                    }
                    temp_series = {
                        name: groups[i],
                        type: "bar",
                        data: temp_data,
                        areaStyle: {},
                    };
                    series.push(temp_series);
                }
                return {groups: groups, category: names, series: series};
            case 3:
                //用于存储类型名称
                var groups = new Array();
                //用于存储data.name数据
                var names = new Array();
                //存储返回series数据 （一个或者多个）
                var series = new Array();

                for (i = 0; i < data.length; i++) {
                    //判断data[i].group是否存在数租groups中
                    if (!groups.contains(data[i].group)) {
                        //不存在则跳进 存放
                        groups.push(data[i].group);
                    }

                    //判断name数据是否存在 数组names中
                    if (!names.contains(data[i].name)) {
                        //不存在则跳进 存放
                        names.push(data[i].name);
                    }
                }
                for (k = 0; k < names.length; k++) {
                    temp_data.push(0);
                }
                //遍历分类
                for (i = 0; i < groups.length; i++) {
                    //定义一个series中间变量
                    var temp_series = {};
                    //定义data.value数据存储
                    var temp_data = new Array();
                    //遍历所有数据
                    for (var j = 0; j < data.length; j++) {
                        //遍历data.name数据
                        for (k = 0; k < names.length; k++) {
                            //判断所有分类中的所有数据含name数据分开
                            if (groups[i] == data[j].group && names[k] == data[j].name) {
                                temp_data[k] = data[j].value;
                            }
                        }
                    }
                    temp_series = {
                        name: groups[i],
                        type: "bar",
                        data: temp_data,
                        smooth: true,
                        areaStyle: {},
                    };
                    series.push(temp_series);
                }
                return {groups: groups, category: names, series: series};
            default:
                //用于存储类型名称
                var groups = new Array();
                //用于存储data.name数据
                var names = new Array();
                //存储返回series数据 （一个或者多个）
                var series = new Array();

                for (i = 0; i < data.length; i++) {
                    //判断data[i].group是否存在数租groups中
                    if (!groups.contains(data[i].group)) {
                        //不存在则跳进 存放
                        groups.push(data[i].group);
                    }

                    //判断name数据是否存在 数组names中
                    if (!names.contains(data[i].name)) {
                        //不存在则跳进 存放
                        names.push(data[i].name);
                    }
                }
                for (k = 0; k < names.length; k++) {
                    temp_data.push(0);
                }
                //遍历分类
                for (i = 0; i < groups.length; i++) {
                    //定义一个series中间变量
                    var temp_series = {};
                    //定义data.value数据存储
                    var temp_data = new Array();
                    //遍历所有数据
                    for (var j = 0; j < data.length; j++) {
                        //遍历data.name数据
                        for (k = 0; k < names.length; k++) {
                            //判断所有分类中的所有数据含name数据分开
                            if (groups[i] == data[j].group && names[k] == data[j].name) {
                                temp_data[k] = data[j].value;
                            }
                        }
                    }
                    temp_series = {name: groups[i], type: "bar", data: temp_data};
                    series.push(temp_series);
                }
                return {groups: groups, category: names, series: series};
        }
    },

    LineFormate: function (data, type) {
        switch (type) {
            case 1:
                //用于存储类型名称
                var groups = new Array();
                //用于存储data.name数据
                var names = new Array();
                //存储返回series数据 （一个或者多个）
                var series = new Array();
                let k = 0, i = 0;
                for (i = 0; i < data.length; i++) {
                    //判断data[i].group是否存在数租groups中
                    if (!groups.contains(data[i].group)) {
                        //不存在则跳进 存放
                        groups.push(data[i].group);
                    }

                    //判断name数据是否存在 数组names中
                    if (!names.contains(data[i].name)) {
                        //不存在则跳进 存放
                        names.push(data[i].name);
                    }
                }
                for (k = 0; k < names.length; k++) {
                    temp_data.push(0);
                }
                //遍历分类
                for (i = 0; i < groups.length; i++) {
                    //定义一个series中间变量
                    var temp_series = {};
                    //定义data.value数据存储
                    var temp_data = new Array();
                    //遍历所有数据
                    for (var j = 0; j < data.length; j++) {
                        //遍历data.name数据
                        for (k = 0; k < names.length; k++) {
                            //判断所有分类中的所有数据含name数据分开
                            if (groups[i] == data[j].group && names[k] == data[j].name) {
                                temp_data[k] = data[j].value;
                            }
                        }
                    }
                    temp_series = {
                        name: groups[i],
                        type: "line",
                        data: temp_data,
                        smooth: true,
                    };
                    series.push(temp_series);
                }
                return {groups: groups, category: names, series: series};
            case 2:
                //用于存储类型名称
                var groups = new Array();
                //用于存储data.name数据
                var names = new Array();
                //存储返回series数据 （一个或者多个）
                var series = new Array();

                for (i = 0; i < data.length; i++) {
                    //判断data[i].group是否存在数租groups中
                    if (!groups.contains(data[i].group)) {
                        //不存在则跳进 存放
                        groups.push(data[i].group);
                    }

                    //判断name数据是否存在 数组names中
                    if (!names.contains(data[i].name)) {
                        //不存在则跳进 存放
                        names.push(data[i].name);
                    }
                }
                for (k = 0; k < names.length; k++) {
                    temp_data.push(0);
                }
                //遍历分类
                for (i = 0; i < groups.length; i++) {
                    //定义一个series中间变量
                    var temp_series = {};
                    //定义data.value数据存储
                    var temp_data = new Array();
                    //遍历所有数据
                    for (var j = 0; j < data.length; j++) {
                        //遍历data.name数据
                        for (k = 0; k < names.length; k++) {
                            //判断所有分类中的所有数据含name数据分开
                            if (groups[i] == data[j].group && names[k] == data[j].name) {
                                temp_data[k] = data[j].value;
                            }
                        }
                    }
                    temp_series = {
                        name: groups[i],
                        type: "line",
                        data: temp_data,
                        areaStyle: {},
                    };
                    series.push(temp_series);
                }
                return {groups: groups, category: names, series: series};
            case 3:
                //用于存储类型名称
                var groups = new Array();
                //用于存储data.name数据
                var names = new Array();
                //存储返回series数据 （一个或者多个）
                var series = new Array();

                for (i = 0; i < data.length; i++) {
                    //判断data[i].group是否存在数租groups中
                    if (!groups.contains(data[i].group)) {
                        //不存在则跳进 存放
                        groups.push(data[i].group);
                    }

                    //判断name数据是否存在 数组names中
                    if (!names.contains(data[i].name)) {
                        //不存在则跳进 存放
                        names.push(data[i].name);
                    }
                }
                for (k = 0; k < names.length; k++) {
                    temp_data.push(0);
                }
                //遍历分类
                for (i = 0; i < groups.length; i++) {
                    //定义一个series中间变量
                    var temp_series = {};
                    //定义data.value数据存储
                    var temp_data = new Array();
                    //遍历所有数据
                    for (var j = 0; j < data.length; j++) {
                        //遍历data.name数据
                        for (k = 0; k < names.length; k++) {
                            //判断所有分类中的所有数据含name数据分开
                            if (groups[i] == data[j].group && names[k] == data[j].name) {
                                temp_data[k] = data[j].value;
                            }
                        }
                    }
                    temp_series = {
                        name: groups[i],
                        type: "line",
                        data: temp_data,
                        smooth: true,
                        areaStyle: {},
                    };
                    series.push(temp_series);
                }
                return {groups: groups, category: names, series: series};
            default:
                //用于存储类型名称
                var groups = new Array();
                //用于存储data.name数据
                var names = new Array();
                //存储返回series数据 （一个或者多个）
                var series = new Array();

                for (i = 0; i < data.length; i++) {
                    //判断data[i].group是否存在数租groups中
                    if (!groups.contains(data[i].group)) {
                        //不存在则跳进 存放
                        groups.push(data[i].group);
                    }

                    //判断name数据是否存在 数组names中
                    if (!names.contains(data[i].name)) {
                        //不存在则跳进 存放
                        names.push(data[i].name);
                    }
                }
                for (k = 0; k < names.length; k++) {
                    temp_data.push(0);
                }
                //遍历分类
                for (i = 0; i < groups.length; i++) {
                    //定义一个series中间变量
                    var temp_series = {};
                    //定义data.value数据存储
                    var temp_data = new Array();
                    //遍历所有数据
                    for (var j = 0; j < data.length; j++) {
                        //遍历data.name数据
                        for (k = 0; k < names.length; k++) {
                            //判断所有分类中的所有数据含name数据分开
                            if (groups[i] == data[j].group && names[k] == data[j].name) {
                                temp_data[k] = data[j].value;
                            }
                        }
                    }
                    temp_series = {name: groups[i], type: "line", data: temp_data};
                    series.push(temp_series);
                }
                return {groups: groups, category: names, series: series};
        }
    },
    /**
     * 雷达图数据格式化
     */
    RadarFormate: function (data) {
        //用于存储类型名称
        var groups = new Array();
        //用于存储data.name数据
        var names = new Array();
        //存储最大值数组
        var indicators = new Array();
        //定义data.value数据存储
        var temp_data = new Array();
        let i = 0;
        for (i = 0; i < data.length; i++) {
            //判断data[i].group是否存在数租groups中
            if (!groups.contains(data[i].group)) {
                //不存在则跳进 存放
                groups.push(data[i].group);
            }

            //判断name数据是否存在 数组names中
            if (!names.contains(data[i].name)) {
                //不存在则跳进 存放
                names.push(data[i].name);
            }
        }

        for (i = 0; i < names.length; i++) {
            //中
            var temp_maxValue = new Array();
            for (var j = 0; j < data.length; j++) {
                if (names[i] == data[j].name) {
                    temp_maxValue.push(data[j].value);
                }
            }
            indicators.push({
                name: names[i],
                max: Number((temp_maxValue.max() * 2) / 1.5).toFixed(2),
            });
        }
        //遍历分类
        for (i = 0; i < groups.length; i++) {
            //定义一个series中间变量
            var temp_series = {};
            //定义datavalue数组
            var dataValues = new Array();
            //TODO 遍历所有数据 未控制 数据对应关系

            for (var j = 0; j < data.length; j++) {
                if (groups[i] == data[j].group) {
                    dataValues.push(data[j].value);
                }
            }

            temp_data.push({value: dataValues, name: groups[i]});
        }
        series = {type: "radar", data: temp_data};
        return {
            indicators: indicators,
            groups: groups,
            category: names,
            series: series,
        };
    },
    /**
     * 漏斗图数据格式化
     */
    FunnelFormate: function (data, type) {
        //用于存储类型名称
        var groups = new Array();
        //用于存储data.name数据
        var names = new Array();
        //定义一个存放series的数组
        var series = new Array();
        let i = 0;
        for (i = 0; i < data.length; i++) {
            //判断data[i].group是否存在数租groups中
            if (!groups.contains(data[i].group)) {
                //不存在则跳进 存放
                groups.push(data[i].group);
            }

            //判断name数据是否存在 数组names中
            if (!names.contains(data[i].name)) {
                //不存在则跳进 存放
                names.push(data[i].name);
            }
        }
        var width = parseInt(100 / groups.length);
        //遍历分类
        for (i = 0; i < groups.length; i++) {
            //定义data.value数据存储
            var temp_data = new Array();
            k = 0;
            //TODO 遍历所有数据 未控制 数据对应关系
            for (var j = 0; j < data.length; j++) {
                //判断所有分类中的所有数据含name数据分开

                if (groups[i] == data[j].group) {
                    k++;
                    temp_data.push({
                        value: k,
                        name: data[j].name + ":" + data[j].value,
                    });
                }
            }
            var left = width * i;
            series.push({
                name: groups[i],
                type: type,
                sort: "ascending",
                grap: 2,
                left: left + "%",
                width: width - 5 + "%",
                label: {
                    normal: {
                        show: true,
                        position: "inside",
                    },
                    emphasis: {
                        textStyle: {
                            fontSize: 20,
                        },
                    },
                },
                data: temp_data,
            });
        }
        return {groups: groups, category: names, series: series};
    },
    /**
     * 仪表盘图数据格式化
     */
    GaugeFormate: function (data, type) {
        var temp_datas = [];
        data.forEach(data => {
            temp_datas.push({value: data.value, name: data.name, group: data.group})
        });
        var names = ""
        temp_datas.find(data => {
            names = data.name
        });
        var groups = ""
        temp_datas.find(data => {
            groups = data.group
        });
        var series = new Array();
        series.push({
            name: groups,
            type: type,
            progress: {
                show: true
            },
            detail: {
                valueAnimation: true,
                formatter: '{value}%'
            },
            data: temp_datas,
        });
        return {groups: groups, category: names, series: series};
    },
};


