var power_bar = echarts.init(document.getElementsByClassName('power_bar')[0]);
var gas_line = echarts.init(document.getElementsByClassName('gas_line')[0]);
var fac_liquidfill = echarts.init(document.getElementsByClassName('liquidfill_group')[0]);
// var com_liquidfill = echarts.init(document.getElementsByClassName('com_liquidfill')[0]);
// var off_liquidfill = echarts.init(document.getElementsByClassName('off_liquidfill')[0]);
// var bus_liquidfill = echarts.init(document.getElementsByClassName('bus_liquidfill')[0]);

var power_bar_option = {
    title: {},
    tooltip: {
        trigger: 'axis'
    },
    color: ['#9cff00', '#ff7800', '#00d8ff', '#0c21ba'],
    legend: {
        x: "right",
        data: [{
                name: '工厂',
                icon: 'image://./image/legend.png' //格式为'image://+icon文件地址'，其中image::后的//不能省略
            },
            {
                name: '公共建筑',
                icon: 'image://./image/legend1.png'
            },
            {
                name: '写字楼',
                icon: 'image://./image/legend2.png'
            }, {
                name: '商业综合体',
                icon: 'image://./image/legend3.png'
            }
        ],
        textStyle: {
            fontSize: 10,
            color: '#00a8ff',
        }
    },
    toolbox: {

    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['2018年', '2017年', '2016年', '2015年'],
        axisLabel: {
            show: true,
            textStyle: {
                color: '#0cdee2',
                fontFamily: 'AdobeHeitiStd-Regular'
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#0cdee2',
            }
        },
    }],
    yAxis: [{
        type: 'value',
        position: 'right',
        splitLine: { show: false }, //去除网格线
        axisLabel: {
            show: true,
            textStyle: {
                color: '#0cdee2'
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#0cdee2',
            }
        },
    }],
    series: [{
            name: '工厂',
            type: 'bar',
            barWidth: 8,
            barGap: '1',
            data: [2000, 1500, 2000, 1800, ],
            itemStyle: { // 图形的形状
                barBorderRadius: [3, 3, 0, 0]
            },
        },
        {
            name: '公共建筑',
            type: 'bar',
            barWidth: 8,
            barGap: '0.8',
            data: [600, 1100, 1900, 2000],
            itemStyle: { // 图形的形状
                barBorderRadius: [3, 3, 0, 0]
            },
        },
        {
            name: '写字楼',
            type: 'bar',
            barWidth: 8,
            data: [1200, 1300, 2100, 1500, ],
            itemStyle: { // 图形的形状
                barBorderRadius: [3, 3, 0, 0]
            },
        },
        {
            name: '商业综合体',
            type: 'bar',
            barWidth: 8,
            data: [1600, 1400, 2200, 1700],
            itemStyle: { // 图形的形状
                barBorderRadius: [3, 3, 0, 0]
            },
        },
    ]
};

var gas_line_option = {
    tooltip: {
        trigger: 'axis'
    },
    color: ['#C204C8', '#246698', '#01D606', '#B8BC0A', '#D70305'],
    // legend: {
    //     x: "right",
    //     data: ['2018年', '2017年', '2016年', '2015年', '2014年'],
    //     textStyle: {
    //         fontSize: 10,
    //         color: '#00a8ff',
    //     },
    //     icon: "circle"
    // },
    toolbox: {

    },
    calculable: true,
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['工厂', '公共建筑', '写字楼', '商业综合体'],
        axisLabel: {
            show: true,
            textStyle: {
                color: '#0cdee2',
                fontFamily: 'AdobeHeitiStd-Regular'
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#0cdee2',
            }
        },
    }],
    yAxis: [{
        type: 'value',
        type: 'value',
        position: 'left',
        splitLine: { show: false }, //去除网格线
        axisLabel: {
            show: true,
            textStyle: {
                color: '#0cdee2'
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#0cdee2',
            }
        },
    }],
    series: [{
            name: '2018年',
            type: 'line',
            smooth: true,
            data: [0, 1500, 2000, 1800],
        },
        {
            name: '2017年',
            type: 'line',
            smooth: true,
            data: [0, 2100, 2900, 2000],
        },
        {
            name: '2016年',
            type: 'line',
            smooth: true,
            data: [0, 3300, 4100, 1500],
        },
        {
            name: '2015年',
            type: 'line',
            smooth: true,
            data: [0, 4400, 3200, 1700],
        },
        {
            name: '2014年',
            type: 'line',
            smooth: true,
            data: [0, 5000, 1500, 700],
        },
    ]
};

var fac_liquidfill_option = {
    series: [{
        backgroundStyle: {
            color: 'rgba(255,255,255,0.5)'
        },
        type: 'liquidFill',
        data: [0.6],
        itemStyle: {
            normal: {
                color: '#a9db5a'
            }
        },
        outline: {
            show: false
        },
        shape: "circle",
        label: {
            normal: {
                // formatter: function() {
                //     return '这里是我要在js中获取的数据';
                // },
                textStyle: {
                    color: '#fff',
                    fontSize: 16
                }
            }
        }
    }, {
        backgroundStyle: {
            color: 'rgba(255,255,255,0.5)'
        },
        type: 'liquidFill',
        data: [0.5],
        itemStyle: {
            normal: {
                color: '#7d3d03'
            }
        },
        outline: {
            show: false
        },
        shape: "circle",
        label: {
            normal: {
                // formatter: function() {
                //     return '这里是我要在js中获取的数据';
                // },
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            }
        }
    }, {
        backgroundStyle: {
            color: 'rgba(255,255,255,0.5)'
        },
        type: 'liquidFill',
        data: [0.4],
        itemStyle: {
            normal: {
                color: '#0b6e80'
            }
        },
        outline: {
            show: false
        },
        shape: "circle",
        label: {
            normal: {
                // formatter: function() {
                //     return '这里是我要在js中获取的数据';
                // },
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            }
        }
    }, {
        backgroundStyle: {
            color: 'rgba(255,255,255,0.5)'
        },
        type: 'liquidFill',
        data: [0.3],
        itemStyle: {
            normal: {
                color: '#06126e'
            }
        },
        outline: {
            show: false
        },
        shape: "circle",
        label: {
            normal: {
                // formatter: function() {
                //     return '这里是我要在js中获取的数据';
                // },
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                }
            }
        }
    }, ]
}

// var com_liquidfill_option = {
//     series: [
//         {
//         backgroundStyle: {
//             color: 'rgba(255,255,255,0.5)'
//         },
//         type: 'liquidFill',
//         data: [0.5],
//         itemStyle: {
//             normal: {
//                 color: '#7d3d03'
//             }
//         },
//         outline: {
//             show: false
//         },
//         shape: "circle",
//         label: {
//             normal: {
//                 // formatter: function() {
//                 //     return '这里是我要在js中获取的数据';
//                 // },
//                 textStyle: {
//                     color: '#fff',
//                     fontSize: 14
//                 }
//             }
//         }
//     }, ]
// }
// var off_liquidfill_option = {
//     series: [{
//         backgroundStyle: {
//             color: 'rgba(255,255,255,0.5)'
//         },
//         type: 'liquidFill',
//         data: [0.4],
//         itemStyle: {
//             normal: {
//                 color: '#0b6e80'
//             }
//         },
//         outline: {
//             show: false
//         },
//         shape: "circle",
//         label: {
//             normal: {
//                 // formatter: function() {
//                 //     return '这里是我要在js中获取的数据';
//                 // },
//                 textStyle: {
//                     color: '#fff',
//                     fontSize: 14
//                 }
//             }
//         }
//     }, ]
// }
// var bus_liquidfill_option = {
//     series: [{
//         backgroundStyle: {
//             color: 'rgba(255,255,255,0.5)'
//         },
//         type: 'liquidFill',
//         data: [0.3],
//         itemStyle: {
//             normal: {
//                 color: '#06126e'
//             }
//         },
//         outline: {
//             show: false
//         },
//         shape: "circle",
//         label: {
//             normal: {
//                 // formatter: function() {
//                 //     return '这里是我要在js中获取的数据';
//                 // },
//                 textStyle: {
//                     color: '#fff',
//                     fontSize: 14
//                 }
//             }
//         }
//     }, ]
// }


power_bar.setOption(power_bar_option)
gas_line.setOption(gas_line_option)
fac_liquidfill.setOption(fac_liquidfill_option)
    // com_liquidfill.setOption(com_liquidfill_option)
    // off_liquidfill.setOption(off_liquidfill_option)
    // bus_liquidfill.setOption(bus_liquidfill_option)