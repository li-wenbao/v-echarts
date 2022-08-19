
import Vue from "vue";
//表单序列化
export const serialize = (data) => {
    let list = [];
    Object.keys(data).forEach((ele) => {
        list.push(`${ele}=${data[ele]}`);
    });
    return list.join("&");
};
export const getObjType = (obj) => {
    var toString = Object.prototype.toString;
    var map = {
        "[object Boolean]": "boolean",
        "[object Number]": "number",
        "[object String]": "string",
        "[object Function]": "function",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object RegExp]": "regExp",
        "[object Undefined]": "undefined",
        "[object Null]": "null",
        "[object Object]": "object",
    };
    if (obj instanceof Element) {
        return "element";
    }
    return map[toString.call(obj)];
};
export const getViewDom = () => {
    return window.document
        .getElementById("avue-view")
        .getElementsByClassName("el-scrollbar__wrap")[0];
};
/**
 * 对象深拷贝
 */
export const deepClone = (data) => {
    var type = getObjType(data);
    var obj;
    if (type === "array") {
        obj = [];
    } else if (type === "object") {
        obj = {};
    } else {
        //不再具有下一层次
        return data;
    }
    if (type === "array") {
        for (var i = 0, len = data.length; i < len; i++) {
            obj.push(deepClone(data[i]));
        }
    } else if (type === "object") {
        for (var key in data) {
            obj[key] = deepClone(data[key]);
        }
    }
    return obj;
};
/**
 * 设置灰度模式
 */
export const toggleGrayMode = (status) => {
    if (status) {
        document.body.className = document.body.className + " grayMode";
    } else {
        document.body.className = document.body.className.replace(" grayMode", "");
    }
};
/**
 * 设置主题
 */
export const setTheme = (name) => {
    document.body.className = name;
};


/**
 * 加密处理
 */ 
export const encryption = (params) => {
    let {data, type, param, key} = params;
    let result = JSON.parse(JSON.stringify(data));
    if (type == "Base64") {
        param.forEach((ele) => {
            result[ele] = btoa(result[ele]);
        });
    } else if (type == "Aes") {
        param.forEach((ele) => {
            result[ele] = window.CryptoJS.AES.encrypt(result[ele], key).toString();
        });
    }
    return result;
};

/**
 * 浏览器判断是否全屏
 */
export const fullscreenToggel = () => {
    if (fullscreenEnable()) {
        exitFullScreen();
    } else {
        reqFullScreen();
    }
};
/**
 * esc监听全屏
 */
export const listenfullscreen = (callback) => {
    function listen() {
        callback();
    }

    document.addEventListener("fullscreenchange", function () {
        listen();
    });
    document.addEventListener("mozfullscreenchange", function () {
        listen();
    });
    document.addEventListener("webkitfullscreenchange", function () {
        listen();
    });
    document.addEventListener("msfullscreenchange", function () {
        listen();
    });
};
/**
 * 浏览器判断是否全屏
 */
export const fullscreenEnable = () => {
    var isFullscreen =
        document.isFullScreen ||
        document.mozIsFullScreen ||
        document.webkitIsFullScreen;
    return isFullscreen;
};

/**
 * 浏览器全屏
 */
export const reqFullScreen = () => {
    if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    }
};
/**
 * 浏览器退出全屏
 */
export const exitFullScreen = () => {
    if (document.documentElement.requestFullScreen) {
        document.exitFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
        document.webkitCancelFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.mozCancelFullScreen();
    }
};
/**
 * 递归寻找子类的父类
 */

export const findParent = (menu, id) => {
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].children.length != 0) {
            for (let j = 0; j < menu[i].children.length; j++) {
                if (menu[i].children[j].id == id) {
                    return menu[i];
                } else {
                    if (menu[i].children[j].children.length != 0) {
                        return findParent(menu[i].children[j].children, id);
                    }
                }
            }
        }
    }
};

/**
 * 递归实现 树查找结点
 * @param {*} tree  树
 * @param {*} fun   判断函数
 * @returns
 */
export const findNode = (tree, func) => {
    for (const node of tree) {
        if (func(node)) return node;
        if (node.children) {
            const res = findNode(node.children, func)
            if (res) return res;
        }
    }
    return null;
}
/**
 * 判断2个对象属性和值是否相等
 */

/**
 * 动态插入css
 */
export const loadStyle = url => {
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    const head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
};

// 返回上一页
export const goBack = () => {
    this.$router.go(-1) //返回上一层
};
/**
 * 判断路由是否相等
 */
export const diff = (obj1, obj2) => {
    delete obj1.close;
    var o1 = obj1 instanceof Object;
    var o2 = obj2 instanceof Object;
    if (!o1 || !o2) {
        /*  判断不是对象  */
        return obj1 === obj2;
    }

    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
        //Object.keys() 返回一个由对象的自身可枚举属性(key值)组成的数组,例如：数组返回下表：let arr = ["a", "b", "c"];console.log(Object.keys(arr))->0,1,2;
    }

    for (var attr in obj1) {
        var t1 = obj1[attr] instanceof Object;
        var t2 = obj2[attr] instanceof Object;
        if (t1 && t2) {
            return diff(obj1[attr], obj2[attr]);
        } else if (obj1[attr] !== obj2[attr]) {
            return false;
        }
    }
    return true;
};

/**
 * 根据字典的value查找对应的index
 */
export const findArray = (dic, value) => {
    for (let i = 0; i < dic.length; i++) {
        if (dic[i].value == value) {
            return i;
        }
    }
    return -1;
};
/**
 * 生成随机len位数字
 */
export const randomLenNum = (len, date) => {
    let random = "";
    random = Math.ceil(Math.random() * 100000000000000)
        .toString()
        .substr(0, len ? len : 4);
    if (date) random = random + Date.now();
    return random;
};

/**
 * js判断一个字符串是否是数字
 */
export const strIsNumber = (str) => {
    var regPos = /^\d+(\.\d+)?$/;//非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;//负浮点数
    if (regPos.test(str) || regNeg.test(str)) {
        return true;
    } else {
        return false;
    }
};
/**
 * 打开小窗口
 */
export const openWindow = (url, title, w, h) => {
    // Fixes dual-screen position                            Most browsers       Firefox
    const dualScreenLeft =
        window.screenLeft !== undefined ? window.screenLeft : screen.left;
    const dualScreenTop =
        window.screenTop !== undefined ? window.screenTop : screen.top;

    const width = window.innerWidth ?
        window.innerWidth :
        document.documentElement.clientWidth ?
            document.documentElement.clientWidth :
            screen.width;
    const height = window.innerHeight ?
        window.innerHeight :
        document.documentElement.clientHeight ?
            document.documentElement.clientHeight :
            screen.height;

    const left = width / 2 - w / 2 + dualScreenLeft;
    const top = height / 2 - h / 2 + dualScreenTop;
    const newWindow = window.open(
        url,
        title,
        "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=" +
        w +
        ", height=" +
        h +
        ", top=" +
        top +
        ", left=" +
        left
    );

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
};

/**
 * 获取顶部地址栏地址
 */
export const getTopUrl = () => {
    return window.location.href.split("/#/")[0];
};

/**
 * 获取url参数
 * @param name 参数名
 */
export const getQueryString = (name) => {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(decodeURI(r[2]));
    return null;
};

//数组去重 ES6 Set集合方法
export let unique = (arr) => {
    return Array.from(new Set(arr));
};

//列表根据id去重
export let listUnique = (arr) => {
    var result = [];
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        if (!obj[arr[i].id]) {
            result.push(arr[i]);
            obj[arr[i].id] = true;
        }
    }
    return result;
};

//截取时间的时分秒
export let initTime = (data, num1, num2) => {
    return data.substring(num1, num2);
};

export function clearObject(obj) {
    for (let k of Object.keys(obj)) {
        Vue.delete(obj, k);
    }
    obj = {};
}

/*1.用浏览器内部转换器实现html编码（转义）*/

export function htmlEncode(html) {
    //1.首先动态创建一个容器标签元素，如DIV
    var temp = document.createElement("div");
    //2.然后将要转换的字符串设置为这个元素的innerText或者textContent
    temp.textContent != undefined ?
        (temp.textContent = html) :
        (temp.innerText = html);
    //3.最后返回这个元素的innerHTML，即得到经过HTML编码转换的字符串了
    var output = temp.innerHTML;
    temp = null;
    return output;
}

/*2.用浏览器内部转换器实现html解码（反转义）*/
export function htmlDecode(text) {
    //1.首先动态创建一个容器标签元素，如DIV
    var temp = document.createElement("div");
    //2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
    temp.innerHTML = text;
    //3.最后返回这个元素的innerText或者textContent，即得到经过HTML解码的字符串了。
    var output = temp.innerText || temp.textContent;
    temp = null;
    return output;
}

/*3.用正则表达式实现html编码（转义）*/
export function htmlEncodeByRegExp(str) {
    var temp = "";
    if (str.length == 0) return "";
    temp = str.replace(/&/g, "&amp;");
    temp = temp.replace(/</g, "&lt;");
    temp = temp.replace(/>/g, "&gt;");
    temp = temp.replace(/\s/g, "&nbsp;");
    temp = temp.replace(/\'/g, "&#39;");
    temp = temp.replace(/\"/g, "&quot;");
    return temp;
}

/*4.用正则表达式实现html解码（反转义）*/
export function htmlDecodeByRegExp(str) {
    var temp = "";
    if (str.length == 0) return "";
    temp = str.replace(/&amp;/g, "&");
    temp = temp.replace(/&lt;/g, "<");
    temp = temp.replace(/&gt;/g, ">");
    temp = temp.replace(/&nbsp;/g, " ");
    temp = temp.replace(/&#39;/g, "'");
    temp = temp.replace(/&quot;/g, '"');
    return temp;
}

/*5.用正则表达式实现html编码（转义）（另一种写法）*/
export function html2Escape(sHtml) {
    return sHtml.replace(/[<>&"]/g, function (c) {
        return {"<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;"}[c];
    });
}

/*6.用正则表达式实现html解码（反转义）（另一种写法）*/
export function escape2Html(str) {
    var arrEntities = {lt: "<", gt: ">", nbsp: " ", amp: "&", quot: '"'};
    return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function (all, t) {
        return arrEntities[t];
    });
}

/*6.用正则表达式实现html解码（反转义）（另一种写法）*/
export function numberToMilo(str) {
    let regPos = /^[0-9]+.?[0-9]*/; //判断是否是数字。
    if (regPos.test(str)) {
        str = parseFloat(str);
        let str1 = Math.floor(str);
        let str2 = padding3(str % 1, 3);
        return "K" + str1 + "+" + str2;
    } else {
        return "";
    }
}

export function miloToNumber(str) {
    let mVal = str.split("K")[1];
    if (mVal) {
        let kValue = mVal.split("+")[0];
        let mValue = mVal.split("+")[1];
        return Number(kValue + "." + mValue);
    } else {
        return 0;
    }
}


//转为小数
function padding3(num, length) {
    var decimal = num;
    //toFixed指定保留几位小数
    decimal = decimal.toFixed(length) + "";
    return decimal.substr(decimal.indexOf(".") + 1);
}

/**
 * 判断是否为整数
 * @param obj
 * @returns {Boolean}
 */
Array.prototype.isInteger = function (obj) {
    return obj % 1 === 0;
};
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

//判断媒体类型
export const matchType = (fileName) => {
    // 后缀获取
    var suffix = '';
    // 获取类型结果
    var result = '';
    try {
        var flieArr = fileName.split('.');
        suffix = flieArr[flieArr.length - 1];
    } catch (err) {
        suffix = '';
    }
    // fileName无后缀返回 false
    if (!suffix) {
        result = false;
        return result;
    }
    //后缀名改成小写
    suffix = suffix.toLowerCase();
    // 图片格式
    var imglist = ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'];
    // 进行图片匹配
    result = imglist.some(function (item) {
        return item == suffix;
    });
    if (result) {
        result = 'image';
        return result;
    }
    ;
    // 匹配txt
    var txtlist = ['txt'];
    result = txtlist.some(function (item) {
        return item == suffix;
    });
    if (result) {
        result = 'txt';
        return result;
    }
    ;
    // 匹配 excel
    var excelist = ['xls', 'xlsx'];
    result = excelist.some(function (item) {
        return item == suffix;
    });
    if (result) {
        result = 'excel';
        return result;
    }
    ;
    // 匹配 word
    var wordlist = ['doc', 'docx'];
    result = wordlist.some(function (item) {
        return item == suffix;
    });
    if (result) {
        result = 'word';
        return result;
    }
    ;
    // 匹配 pdf
    var pdflist = ['pdf'];
    result = pdflist.some(function (item) {
        return item == suffix;
    });
    if (result) {
        result = 'pdf';
        return result;
    }
    ;
    // 匹配 ppt
    var pptlist = ['ppt'];
    result = pptlist.some(function (item) {
        return item == suffix;
    });
    if (result) {
        result = 'ppt';
        return result;
    }
    ;
    // 匹配 视频
    var videolist = ['m2v', 'mkv', 'mpeg', 'mov', 'mp4', 'avi', 'asf', 'wmv', '3gp', 'flv'];
    result = videolist.some(function (item) {
        return item == suffix;
    });
    if (result) {
        result = 'video';
        return result;
    }
    ;
    // 匹配 音频
    var radiolist = ['mp3', 'wav', 'wmv'];
    result = radiolist.some(function (item) {
        return item == suffix;
    });
    if (result) {
        result = 'radio';
        return result;
    }
    // 其他 文件类型
    result = 'other';
    return result;
};


export const findDictListByCode = (list, dictKey) => {
    const dictItem = list.filter(function (item) {
        if (item.dictKey === dictKey) {
            return item;
        }
    })
    if (dictItem && dictItem.length > 0) {
        return dictItem[0].dictList
    } else {
        return []
    }
};


/**
 * 解决两个数相加精度丢失问题
 * @param a
 * @param b
 * @returns {Number}
 */
export function floatAdd(a, b) {
    var c, d, e;
    if (undefined == a || null == a || "" == a || isNaN(a)) {
        a = 0;
    }
    if (undefined == b || null == b || "" == b || isNaN(b)) {
        b = 0;
    }
    try {
        c = a.toString().split(".")[1].length;
    } catch (f) {
        c = 0;
    }
    try {
        d = b.toString().split(".")[1].length;
    } catch (f) {
        d = 0;
    }
    e = Math.pow(10, Math.max(c, d));
    return (floatMul(a, e) + floatMul(b, e)) / e;
}

/**
 * 解决两个数相减精度丢失问题
 * @param a
 * @param b
 * @returns {Number}
 */
export function floatSub(a, b) {
    var c, d, e;
    if (undefined == a || null == a || "" == a || isNaN(a)) {
        a = 0;
    }
    if (undefined == b || null == b || "" == b || isNaN(b)) {
        b = 0;
    }
    try {
        c = a.toString().split(".")[1].length;
    } catch (f) {
        c = 0;
    }
    try {
        d = b.toString().split(".")[1].length;
    } catch (f) {
        d = 0;
    }
    e = Math.pow(10, Math.max(c, d));
    return (floatMul(a, e) - floatMul(b, e)) / e;
}

/**
 * 解决两个数相乘精度丢失问题
 * @param a
 * @param b
 * @returns {Number}
 */
export function floatMul(a, b) {
    var c = 0,
        d = a.toString(),
        e = b.toString();
    try {
        c += d.split(".")[1].length;
    } catch (f) {
    }
    try {
        c += e.split(".")[1].length;
    } catch (f) {
    }
    return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}

/**
 * 解决两个数相除精度丢失问题
 * @param a
 * @param b
 * @returns
 */
export function floatDiv(a, b) {
    var c, d, e = 0,
        f = 0;
    try {
        e = a.toString().split(".")[1].length;
    } catch (g) {
    }
    try {
        f = b.toString().split(".")[1].length;
    } catch (g) {
    }
    return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), floatMul(c / d, Math.pow(10, f - e));
}
// 两个分组函数
export const  groupBy = (array, f) => {
  let groups = {};
  array.forEach(function (o) {
    let group = JSON.stringify(f(o));
    groups[group] = groups[group] || [];
    groups[group].push(o);
  });
  return Object.keys(groups).map(function (group) {
    return groups[group];
  });
};

export const arrayGroupBy = (list, groupId) => {
  let sorted = groupBy(list, function (item) {
    return [item[groupId]];
  });
  return sorted;
};

