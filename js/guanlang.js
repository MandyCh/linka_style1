var temp_chart_07 = echarts.init(document.getElementsByClassName('temp_chart')[0]);
var humd_chart_07 = echarts.init(document.getElementsByClassName('humd_chart')[0]);
var temp_chart_20 = echarts.init(document.getElementsByClassName('temp_chart')[1]);
var humd_chart_20 = echarts.init(document.getElementsByClassName('humd_chart')[1]);
var placeHolderStyle = {
    normal: {
        color: '#05F4FF', //未完成的圆环的颜色
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
};
temp_chart_option = {
    // backgroundColor: '#011128',
    title: {
        text: '76℃',
        x: '55%',
        y: '40%',
        textStyle: {
            fontWeight: 'normal',
            color: "#0bb6f0",
            fontSize: 14
        }
    },
    color: ['#05F4FF', '#313443', '#fff'],
    legend: {
        show: false,
        itemGap: 12,
        data: ['温度']
    },

    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: false,
        radius: [23, 30],
        center: ['70%', '50%'],
        itemStyle: {
            normal: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
            }
        },
        hoverAnimation: false,
        data: [{
            value: 100,
        }]
    }, {
        name: 'Line 2',
        type: 'pie',
        clockWise: false,
        radius: [40, 39],
        center: ['70%', '50%'],
        data: [{
            value: 100,
            name: '温度',
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            itemStyle: {
                color: '#05F4FF'
            }
        }, {
            value: 0,
            name: '温度',
            labelLine: {
                show: true,
                length: 0,
                length2: 50
            },
            itemStyle: {
                color: '#05F4FF'
            }
        }]
    }, ]
};


humd_chart_option = {
    // backgroundColor: '#011128',
    title: {
        text: '33',
        x: '60%',
        y: '40%',
        textStyle: {
            fontWeight: 'normal',
            color: "#0bb6f0",
            fontSize: 14
        }
    },
    color: ['#05F4FF', '#313443', '#fff'],
    legend: {
        show: false,
        itemGap: 12,
        data: ['温度']
    },

    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: false,
        radius: [23, 30],
        center: ['70%', '50%'],
        itemStyle: {
            normal: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
            }
        },
        hoverAnimation: false,
        data: [{
            value: 100,
        }]
    }, {
        name: 'Line 2',
        type: 'pie',
        clockWise: false,
        radius: [40, 39],
        center: ['70%', '50%'],
        data: [{
                value: 0,
                name: '湿度',
                itemStyle: {
                    color: '#05F4FF'
                }
            },
            // {
            //     value: 100,
            //     name: '湿度',
            //     label: {
            //         show: false,
            //     },
            //     labelLine: {
            //         show: false,
            //     },
            //     itemStyle: {
            //         color: '#05F4FF'
            //     }
            // },
        ]
    }, ]
};

temp_chart_07.setOption(temp_chart_option);
humd_chart_07.setOption(humd_chart_option);
temp_chart_20.setOption(temp_chart_option);
humd_chart_20.setOption(humd_chart_option);

var district_target = document.getElementsByClassName('district_target')[0];
console.log(district_target);

for (var i = 0; i < 32; i++) {
    var div = document.createElement('div');
    div.innerText = i + 1;
    div.style.textAlign = 'center';
    div.style.lineHeight = '72px';
    div.style.fontSize = "18px"
    div.className = 'target_' + i;
    div.style.width = '72px';
    div.style.height = '72px';
    div.style.backgroundRepeat = 'no-repeat';
    div.style.backgroundPositionX = 'center';
    div.style.backgroundPositionY = 'center';
    div.style.marginLeft = "20px";
    div.style.marginRight = "20px";
    div.style.marginTop = "8px";
    // div.style.marginBottom = "10px";
    if (i == 6) {
        div.style.backgroundImage = 'url(./image/alarm_gl.png)';
    } else if (i == 19) {
        div.style.backgroundImage = 'url(./image/important.png)'
    } else {
        div.style.backgroundImage = 'url(./image/normal.png)'
    }

    if (i > 15) {
        div.style.marginTop = "0";
    }
    district_target.append(div);



}