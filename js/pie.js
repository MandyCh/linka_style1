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