var power_bar = echarts.init(document.getElementsByClassName('power_bar')[0]);
var gas_line = echarts.init(document.getElementsByClassName('gas_line')[0]);
var fac_liquidfill = echarts.init(document.getElementsByClassName('liquidfill_group')[0]);
var capsulePath = 'path://M3583,533.336a20.911,20.911,0,0,1,20.91,20.914v57.836a20.915,20.915,0,0,1-41.83,0V554.25A20.919,20.919,0,0,1,3583,533.336Z';

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
                // icon: 'image://./image/legend.png' //格式为'image://+icon文件地址'，其中image::后的//不能省略
            },
            {
                name: '公共建筑',
            },
            {
                name: '写字楼',
                // icon: 'image://./image/legend2.png'
            }, {
                name: '商业综合体',
                // icon: 'image://./image/legend3.png'
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
            data: [200, 1500, 2000, 1800],
        },
        {
            name: '2017年',
            type: 'line',
            smooth: true,
            data: [600, 2100, 2900, 2000],
        },
        {
            name: '2016年',
            type: 'line',
            smooth: true,
            data: [1000, 3300, 4100, 1500],
        },
        {
            name: '2015年',
            type: 'line',
            smooth: true,
            data: [1200, 4400, 3200, 1700],
        },
        {
            name: '2014年',
            type: 'line',
            smooth: true,
            data: [500, 5000, 1500, 700],
        },
    ]
};

var fac_liquidfill_option = {
    series: [{
            type: 'liquidFill',
            //data: [0.6, 0.5, 0.4, 0.3],
            data: [0.6, 0.5, 0.4, 0.3],
            shape: capsulePath,
            radius: '28%',
            // 水球颜色
            color: ['#49d088', '#38b470', '#2aaf66'],
            center: ['12%', '50%'],
            // outline  外边
            outline: {
                // show: false
                borderDistance: 0,
                itemStyle: {
                    borderWidth: 2,
                    borderColor: '#13FDCE',
                },
            },
            label: {
                normal: {
                    // textStyle: {
                    color: '#fff',
                    insideColor: 'yellow',
                    fontSize: 14
                        // }
                }
            },
            // 内图 背景色 边
            backgroundStyle: {
                color: 'rgba(4,24,74,0.8)',
            }
        },
        {
            type: 'liquidFill',
            //data: [0.6, 0.5, 0.4, 0.3],
            shape: capsulePath,
            data: [0.3, 0.2, 0.1, 0.05],
            radius: '28%',
            // 水球颜色
            color: ['#FE5555', '#F07581', '#FB5E61'],
            center: ['37%', '50%'],
            // outline  外边
            outline: {
                // show: false
                borderDistance: 0,
                itemStyle: {
                    borderWidth: 2,
                    borderColor: '#FE5555',
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#fff',
                        insideColor: 'yellow',
                        fontSize: 14
                    }
                }
            },
            // 内图 背景色 边
            backgroundStyle: {
                color: 'rgba(4,24,74,0.8)',
            }
        }, {
            type: 'liquidFill',
            shape: capsulePath,
            //data: [0.6, 0.5, 0.4, 0.3],
            data: [0.1, 0.05, 0.25],
            radius: '28%',
            // 水球颜色
            color: ['#FFBF11', '#F4B30E', '#EACE36'],
            center: ['62%', '50%'],
            // outline  外边
            outline: {
                // show: false
                borderDistance: 0,
                itemStyle: {
                    borderWidth: 2,
                    borderColor: '#FFBF11',
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#fff',
                        insideColor: 'yellow',
                        fontSize: 14
                    }
                }
            },
            // 内图 背景色 边
            backgroundStyle: {
                color: 'rgba(4,24,74,0.8)',
            }
        },
        {
            type: 'liquidFill',
            shape: capsulePath,
            //data: [0.6, 0.5, 0.4, 0.3],
            data: [0.7],
            radius: '28%',
            // 水球颜色
            color: ['#1EDDFF', '#38b470', '#2aaf66'],
            center: ['87%', '50%'],
            // outline  外边
            outline: {
                // show: false
                borderDistance: 0,
                itemStyle: {
                    borderWidth: 2,
                    borderColor: '#1EDDFF',
                },
            },
            label: {
                normal: {
                    // textStyle: {
                    color: '#fff',
                    insideColor: 'yellow',
                    fontSize: 14
                        // }
                }
            },
            // 内图 背景色 边
            backgroundStyle: {
                color: 'rgba(4,24,74,0.8)',
                // borderWidth: 5,
                // borderColor: '#fff',
            }
        },

    ]
};


power_bar.setOption(power_bar_option)
gas_line.setOption(gas_line_option)
fac_liquidfill.setOption(fac_liquidfill_option)

var energy_ring = echarts.init(document.getElementsByClassName('energy_ring')[0]);

var scaleData = [{
        'name': '工程建设',
        'value': 10
    },
    {
        'name': '产权交易',
        'value': 20
    },
    {
        'name': '土地交易',
        'value': 20
    },
    {
        'name': '其他交易',
        'value': 27
    },
    {
        'name': '政府采购',
        'value': 23
    }
];
var rich = {
    white: {
        color: '#ddd',
        align: 'center',
        padding: [5, 0]
    }
};
var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
};
var data = [];
for (var i = 0; i < scaleData.length; i++) {
    data.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
            normal: {

                borderWidth: 20,
                shadowBlur: 20,
                borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    offset: 0,
                    color: '#7777eb'
                }, {
                    offset: 1,
                    color: '#70ffac'
                }]),
                shadowColor: 'rgba(142, 152, 241, 0.6)'
            }
        }
    }, {
        value: 4,
        name: '',
        itemStyle: placeHolderStyle
    });
}

var seriesObj = [{
    name: '',
    type: 'pie',
    clockWise: false,
    radius: [80, 80],
    graphic: {
        elements: [{
            type: 'text',
            style: {
                // image: giftImageUrl,
                text: 'cc',
                width: 100,
                height: 100
            },
            left: 'center',
            top: 'center'
        }]
    },
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: false,
                position: 'center',
                color: '#ddd',
                formatter: function(params) {
                    var percent = 0;
                    var total = 0;
                    for (var i = 0; i < scaleData.length; i++) {
                        total += scaleData[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    if (params.name !== '') {
                        return params.name + '\n{white|' + '占比' + percent + '%}';
                    } else {
                        return '';
                    }
                },
                rich: rich
            },
            labelLine: {
                show: false
            }
        }
    },
    data: data
}];
var energy_ring_option = {
    // backgroundColor: '#04243E',
    tooltip: {
        show: false
    },
    graphic: {
        elements: [{
            type: 'text',
            style: {
                // image: giftImageUrl,
                text: "2013-2018\n   总能耗 ",
                fill: "#0cdee2 ",
                font: '1em "AdobeHeitiStd-Regular"',
                width: 100,
                height: 100
            },
            left: 'center',
            top: 'center'
        }]
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: seriesObj
}
energy_ring.setOption(energy_ring_option)