var piechart = echarts.init(document.getElementsByClassName('piechart')[0]);
var color = ['#FF9D6C', '#00FF6C', '#00FFFC', '#0ddaff', "#2184f7", "#184DB7", "#6C10DD"]
placeHolderStyle_dashed = {
    normal: {
        // 文本标签
        label: {
            show: false,
        },
        // 视觉引导线
        labelLine: {
            show: false
        },
        borderColor: color,
        borderType: 'dashed',
        borderWidth: 1
    }
};

placeHolderStyle_none = {
    normal: {
        // 文本标签
        label: {
            show: false,
        },
        // 视觉引导线
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
    }
};

var option_piechart = {
    // backgroundColor: '#fff',
    legend: [{
        orient: '',
        icon: 'none',
        left: '42%',
        top: '8%',
        itemGap: 2,
        textStyle: {
            color: '#fff',
            fontSize: 10,
        },
        data: ['VAV', '送排风', '新风机', '组合空调', '热电连供', '冷机', "锅炉"]
    }],
    series: [{
            name: '值',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [115, 115],
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    borderWidth: 5,
                    shadowBlur: 40,
                    borderColor: "#FF9D6C",
                    shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                }
            },
            data: [{
                value: 5.5,
                name: 'VAV'
            }, {
                value: 2,
                name: 'VAV',
                itemStyle: placeHolderStyle_dashed
            }, {
                value: 2.5,
                name: 'invisible',
                itemStyle: placeHolderStyle_none
            }]
        }, {
            name: '值',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [100, 100],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false,
                        length: 100,
                        smooth: 0.5
                    },
                    borderWidth: 5,
                    shadowBlur: 40,
                    borderColor: "#00FF6C",
                    shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                }
            },
            data: [{
                value: 3.5,
                name: '送排风'
            }, {
                value: 4,
                name: '送排风',
                itemStyle: placeHolderStyle_dashed
            }, {
                value: 2.5,
                name: 'invisible',
                itemStyle: placeHolderStyle_none
            }]
        }, {
            name: '值',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [85, 85],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false,
                    },
                    borderWidth: 5,
                    shadowBlur: 40,
                    borderColor: "#00FFFC",
                    shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                }
            },
            data: [{
                value: 2.5,
                name: '新风机'
            }, {
                value: 5,
                name: '新风机',
                itemStyle: placeHolderStyle_dashed
            }, {
                value: 2.5,
                name: 'invisible',
                itemStyle: placeHolderStyle_none
            }]
        },
        {
            name: '值',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [70, 70],
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    borderWidth: 5,
                    shadowBlur: 40,
                    borderColor: "#0ddaff",
                    shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                }
            },
            data: [{
                value: 1.5,
                name: '组合空调'
            }, {
                value: 6,
                name: '组合空调',
                itemStyle: placeHolderStyle_dashed
            }, {
                value: 2.5,
                name: 'invisible',
                itemStyle: placeHolderStyle_none
            }]
        },
        {
            name: '值',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [55, 55],
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    borderWidth: 5,
                    shadowBlur: 40,
                    borderColor: "#2184f7",
                    shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                }
            },
            data: [{
                value: 2,
                name: '热电连供'
            }, {
                value: 5.5,
                name: '热电连供',
                itemStyle: placeHolderStyle_dashed
            }, {
                value: 2.5,
                name: 'invisible',
                itemStyle: placeHolderStyle_none
            }]
        },
        {
            name: '值',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [40, 40],
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        // position: 'outside'
                    },
                    labelLine: {
                        show: false,
                        length: 100,
                        smooth: 0.5
                    },
                    borderWidth: 5,
                    shadowBlur: 40,
                    borderColor: "#184DB7",
                    shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                }
            },
            data: [{
                value: 3,
                name: '冷机'
            }, {
                value: 4.5,
                name: '冷机',
                itemStyle: placeHolderStyle_dashed
            }, {
                value: 2.5,
                name: 'invisible',
                itemStyle: placeHolderStyle_none
            }]
        },
        {
            name: '值',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [25, 25],
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        // position: 'outside'
                    },
                    labelLine: {
                        show: false,
                        length: 100,
                        smooth: 0.5
                    },
                    borderWidth: 5,
                    shadowBlur: 40,
                    borderColor: "#6C10DD",
                    shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                }
            },
            data: [{
                value: 4,
                name: '锅炉'
            }, {
                value: 3.5,
                name: '锅炉',
                itemStyle: placeHolderStyle_dashed
            }, {
                value: 2.5,
                name: 'invisible',
                itemStyle: placeHolderStyle_none
            }]
        }, {
            name: '白',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [0, 0],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 1,
                label: {
                    normal: {
                        formatter: '数据\n占比',
                        textStyle: {
                            color: '#00f6ff',
                            fontSize: 10
                        }
                    }
                }
            }]
        }
    ]
};

piechart.setOption(option_piechart);

var barchart = echarts.init(document.getElementsByClassName('barchart')[0]);

option_barchart = {
    // backgroundColor: '#0E2A43',
    // legend: {
    //     bottom: 20,
    //     textStyle: {
    //         color: '#fff',
    //     },
    //     data: ['男', '女']
    // },
    grid: {
        left: '-0%',
        right: '0%',
        bottom: '1%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        show: false,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#aaa',
            }
        },
    },
    xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#00ffe4',
                }
            },
            data: ['一层', '二层', '三层', '四层', '五层', '六层', '七层', '八层', '九层']
        }, {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: ['一层', '二层', '三层', '四层', '五层', '六层', '七层', '八层', '九层']
        },

    ],
    series: [{
        name: '总灯数',
        type: 'bar',
        itemStyle: {
            normal: {
                show: true,
                color: '#1a5208',
            }
        },
        label: {
            normal: {
                show: true,
                position: 'insideTop',
                textStyle: {
                    color: '#fff'
                }
            }
        },
        barGap: '-90%',
        barWidth: 22,
        data: [328, 560, 768, 328, 560, 338, 768, 570, 768]
    }, {
        name: '开启',
        type: 'bar',
        z: 10,
        itemStyle: {
            normal: {
                show: true,
                color: "#6DE446",
            }
        },
        label: {
            normal: {
                show: true,
                position: 'insideTop',
                textStyle: {
                    color: '#fff'
                }
            }
        },
        barWidth: 22,
        barGap: '-90%',
        data: [245, 468, 660, 245, 468, 245, 660, 468, 660]
    }]
};

barchart.setOption(option_barchart);

var liquidfill = echarts.init(document.getElementsByClassName('liquidfill')[0]);

var option_liquidfill = {

    series: [{
        type: 'liquidFill',
        data: [0.6],
        radius: '96%',
        center: ['50%', '50%'],
        itemStyle: {
            normal: {
                color: "#00FF88"
            }
        },
        label: {
            normal: {
                textStyle: {
                    fontSize: 26,
                    color: '#fff'
                }
            }
        },
        outline: {
            borderDistance: 0,
            itemStyle: {
                borderWidth: 1,
                borderColor: '#00ffff'
            }
        },
        backgroundStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(61,234,200, 0.9)' },
                { offset: 0.7, color: 'rgba(61,234,255, 0)' }
            ], false),
        },
    }]
}

liquidfill.setOption(option_liquidfill);


var barchart_door = echarts.init(document.getElementsByClassName('barchart_door')[0]);
var option_barchart_door = {
    grid: {
        bottom: '20%',
    },
    yAxis: {
        type: 'category',
        show: true,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#00ffe4',
            }
        },
        boundaryGap: false,
        // data: ['一层', '二层', '三层', '四层', '五层', '六层', '七层', '八层', '九层']
    },
    xAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#00ffe4',
            }
        },
        splitLine: {
            show: false
        }
    },

    series: [{
            name: '开门通过',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                        { offset: 1, color: 'rgba(61,234,200, 0.5)' },
                        { offset: 0, color: 'rgba(0,255,102, 1)' }
                    ], false),
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            barWidth: 10,
            barGap: 1,
            data: [790]
        },
        {
            name: '未开门',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                        { offset: 0, color: 'rgba(134,5,5, 1)' },
                        { offset: 1, color: 'rgba(252,12,12, 0.2)' }
                    ], false),
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            barWidth: 10,
            barGap: 1,
            data: [100]
        }
    ]

};
barchart_door.setOption(option_barchart_door);


var linechart = echarts.init(document.getElementsByClassName('linechart')[0]);
var dates = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    values = [400, 300, 500, 200, 300, 600, 200, 1000, 2000, 1500, 2400, 5000],
    values1 = [4000, 350, 520, 210, 3060, 800, 290, 1200, 1000, 1100, 2900, 3000],
    values2 = [460, 3040, 5070, 100, 390, 670, 2500, 1800, 2100, 2500, 5400, 5000];
values3 = [3040, 380, 5100, 2900, 670, 880, 1200, 1300, 4000, 1900, 2400, 5500];;
var option_linechart = {
    grid: {
        left: '15%',
    },
    xAxis: {
        boundaryGap: false,
        data: dates,
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#02acba'
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#BFBFBF'
            }
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#02acba'
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#BFBFBF'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#02acba'
            }
        }
    },
    series: [{
            type: 'line',
            data: values,
            color: ['#ff0000'],
            symbolSize: 8,
            symbol: 'circle'
        },
        {
            type: 'line',
            data: values1,
            color: ['#23ff00'],
            symbolSize: 8,
            symbol: 'circle'
        },
        {
            type: 'line',
            data: values2,
            color: ['#a800ff'],
            symbolSize: 8,
            symbol: 'circle'
        },
        {
            type: 'line',
            data: values3,
            color: ['#00ffff'],
            symbolSize: 8,
            symbol: 'circle'
        },
    ]
};
linechart.setOption(option_linechart);

var piechart = echarts.init(document.getElementsByClassName('piechart')[0]);
var color = ['#FF9D6C', '#00FF6C', '#00FFFC', '#0ddaff', "#2184f7", "#184DB7", "#6C10DD"]
placeHolderStyle_dashed = {
    normal: {
        // 文本标签
        label: {
            show: false,
        },
        // 视觉引导线
        labelLine: {
            show: false
        },
        borderColor: color,
        borderType: 'dashed',
        borderWidth: 1
    }
};

placeHolderStyle_none = {
    normal: {
        // 文本标签
        label: {
            show: false,
        },
        // 视觉引导线
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
    }
};

var option_piechart = {
    // backgroundColor: '#fff',
    legend: [{
        orient: '',
        icon: 'none',
        left: '42%',
        top: '8%',
        itemGap: 2,
        textStyle: {
            color: '#fff',
            fontSize: 10,
        },
        data: ['VAV', '送排风', '新风机', '组合空调', '热电连供', '冷机', "锅炉"]
    }],
    series: [{
            name: '值',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [115, 115],
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    borderWidth: 5,
                    shadowBlur: 40,
                    borderColor: "#FF9D6C",
                    shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                }
            },
            data: [{
                value: 5.5,
                name: 'VAV'
            }, {
                value: 2,
                name: 'VAV',
                itemStyle: placeHolderStyle_dashed
            }, {
                value: 2.5,
                name: 'invisible',
                itemStyle: placeHolderStyle_none
            }]
        }, {
            name: '值',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [100, 100],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false,
                        length: 100,
                        smooth: 0.5
                    },
                    borderWidth: 5,
                    shadowBlur: 40,
                    borderColor: "#00FF6C",
                    shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                }
            },
            data: [{
                value: 3.5,
                name: '送排风'
            }, {
                value: 4,
                name: '送排风',
                itemStyle: placeHolderStyle_dashed
            }, {
                value: 2.5,
                name: 'invisible',
                itemStyle: placeHolderStyle_none
            }]
        }, {
            name: '值',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [85, 85],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false,
                    },
                    borderWidth: 5,
                    shadowBlur: 40,
                    borderColor: "#00FFFC",
                    shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                }
            },
            data: [{
                value: 2.5,
                name: '新风机'
            }, {
                value: 5,
                name: '新风机',
                itemStyle: placeHolderStyle_dashed
            }, {
                value: 2.5,
                name: 'invisible',
                itemStyle: placeHolderStyle_none
            }]
        },
        {
            name: '值',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [70, 70],
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    borderWidth: 5,
                    shadowBlur: 40,
                    borderColor: "#0ddaff",
                    shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                }
            },
            data: [{
                value: 1.5,
                name: '组合空调'
            }, {
                value: 6,
                name: '组合空调',
                itemStyle: placeHolderStyle_dashed
            }, {
                value: 2.5,
                name: 'invisible',
                itemStyle: placeHolderStyle_none
            }]
        },
        {
            name: '值',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [55, 55],
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    borderWidth: 5,
                    shadowBlur: 40,
                    borderColor: "#2184f7",
                    shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                }
            },
            data: [{
                value: 2,
                name: '热电连供'
            }, {
                value: 5.5,
                name: '热电连供',
                itemStyle: placeHolderStyle_dashed
            }, {
                value: 2.5,
                name: 'invisible',
                itemStyle: placeHolderStyle_none
            }]
        },
        {
            name: '值',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [40, 40],
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        // position: 'outside'
                    },
                    labelLine: {
                        show: false,
                        length: 100,
                        smooth: 0.5
                    },
                    borderWidth: 5,
                    shadowBlur: 40,
                    borderColor: "#184DB7",
                    shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                }
            },
            data: [{
                value: 3,
                name: '冷机'
            }, {
                value: 4.5,
                name: '冷机',
                itemStyle: placeHolderStyle_dashed
            }, {
                value: 2.5,
                name: 'invisible',
                itemStyle: placeHolderStyle_none
            }]
        },
        {
            name: '值',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [25, 25],
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        // position: 'outside'
                    },
                    labelLine: {
                        show: false,
                        length: 100,
                        smooth: 0.5
                    },
                    borderWidth: 5,
                    shadowBlur: 40,
                    borderColor: "#6C10DD",
                    shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                }
            },
            data: [{
                value: 4,
                name: '锅炉'
            }, {
                value: 3.5,
                name: '锅炉',
                itemStyle: placeHolderStyle_dashed
            }, {
                value: 2.5,
                name: 'invisible',
                itemStyle: placeHolderStyle_none
            }]
        }, {
            name: '白',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [0, 0],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 1,
                label: {
                    normal: {
                        formatter: '数据\n占比',
                        textStyle: {
                            color: '#00f6ff',
                            fontSize: 10
                        }
                    }
                }
            }]
        }
    ]
};

piechart.setOption(option_piechart);

var barchart = echarts.init(document.getElementsByClassName('barchart')[0]);

option_barchart = {
    // backgroundColor: '#0E2A43',
    // legend: {
    //     bottom: 20,
    //     textStyle: {
    //         color: '#fff',
    //     },
    //     data: ['男', '女']
    // },
    grid: {
        left: '-0%',
        right: '0%',
        bottom: '1%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        show: false,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#aaa',
            }
        },
    },
    xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#00ffe4',
                }
            },
            data: ['一层', '二层', '三层', '四层', '五层', '六层', '七层', '八层', '九层']
        }, {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: ['一层', '二层', '三层', '四层', '五层', '六层', '七层', '八层', '九层']
        },

    ],
    series: [{
        name: '总灯数',
        type: 'bar',
        itemStyle: {
            normal: {
                show: true,
                color: '#1a5208',
            }
        },
        label: {
            normal: {
                show: true,
                position: 'insideTop',
                textStyle: {
                    color: '#fff'
                }
            }
        },
        barGap: '-90%',
        barWidth: 22,
        data: [328, 560, 768, 328, 560, 338, 768, 570, 768]
    }, {
        name: '开启',
        type: 'bar',
        z: 10,
        itemStyle: {
            normal: {
                show: true,
                color: "#6DE446",
            }
        },
        label: {
            normal: {
                show: true,
                position: 'insideTop',
                textStyle: {
                    color: '#fff'
                }
            }
        },
        barWidth: 22,
        barGap: '-90%',
        data: [245, 468, 660, 245, 468, 245, 660, 468, 660]
    }]
};

barchart.setOption(option_barchart);

var liquidfill = echarts.init(document.getElementsByClassName('liquidfill')[0]);

var option_liquidfill = {

    series: [{
        type: 'liquidFill',
        data: [0.6],
        radius: '96%',
        center: ['50%', '50%'],
        itemStyle: {
            normal: {
                color: "#00FF88"
            }
        },
        label: {
            normal: {
                textStyle: {
                    fontSize: 26,
                    color: '#fff'
                }
            }
        },
        outline: {
            borderDistance: 0,
            itemStyle: {
                borderWidth: 1,
                borderColor: '#00ffff'
            }
        },
        backgroundStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(61,234,200, 0.9)' },
                { offset: 0.7, color: 'rgba(61,234,255, 0)' }
            ], false),
        },
    }]
}

liquidfill.setOption(option_liquidfill);


var barchart_door = echarts.init(document.getElementsByClassName('barchart_door')[0]);
var option_barchart_door = {
    grid: {
        bottom: '20%',
    },
    yAxis: {
        type: 'category',
        show: true,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#00ffe4',
            }
        },
        boundaryGap: false,
        // data: ['一层', '二层', '三层', '四层', '五层', '六层', '七层', '八层', '九层']
    },
    xAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#00ffe4',
            }
        },
        splitLine: {
            show: false
        }
    },

    series: [{
            name: '开门通过',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                        { offset: 1, color: 'rgba(61,234,200, 0.5)' },
                        { offset: 0, color: 'rgba(0,255,102, 1)' }
                    ], false),
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            barWidth: 10,
            barGap: 1,
            data: [790]
        },
        {
            name: '未开门',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                        { offset: 0, color: 'rgba(134,5,5, 1)' },
                        { offset: 1, color: 'rgba(252,12,12, 0.2)' }
                    ], false),
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            barWidth: 10,
            barGap: 1,
            data: [100]
        }
    ]

};
barchart_door.setOption(option_barchart_door);


var ringchart = echarts.init(document.getElementsByClassName('ringchart')[0]);
var count = 360;
var data = [];
for (var i = 0; i < count; i++) {
    data.push({
        value: [1, i]
    });
}
var option_ringchart = {

    color: ['red'],
    title: {
        text: '97.99' + '%',
        textStyle: {
            color: '#01ffff',
            fontSize: 25,
            fontWeight: 'normal',
            fontFamily: '华文细黑',
        },
        x: 'center',
        y: 'center'
    },
    visualMap: [{
        show: false,
        dimension: 1,
        min: 0,
        max: count,
        inRange: {
            colorHue: [0, 360]
        }
    }],
    series: [{
        radius: [45, 90],
        type: 'pie',
        silent: true,
        labelLine: { normal: { show: false } },
        data: data
    }]
}
ringchart.setOption(option_ringchart);