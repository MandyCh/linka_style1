var fac_ratio = echarts.init(document.getElementsByClassName('fac_ratio')[0]);
var labelTop = {
    normal: {
        label: {
            show: false,
            position: 'center',
            formatter: '{b}',
            textStyle: {},
        },
        labelLine: {
            show: false
        },

    }
};
var labelFromatter = {
    normal: {
        label: {
            position: 'center',
            formatter: function(params) {
                return 100 - params.value + '%'
            },
            textStyle: {
                color: "#fff",
                fontSize: 10
            }
        },
    },
}
var labelBottom = {
    // show: false,
    normal: {
        color: '#ccc',
        label: {
            show: false,
            position: 'center',
            fontSize: 11
        },
        labelLine: {
            show: false
        },
        color: '#383838'
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};


var radius = [20, 24];
var option_fac_ratio = {
    legend: {
        x: 'left',
        y: 'bottom',
        data: [
            { name: '公共建筑', icon: "none" },
            { name: '商业综合体', icon: "none" },
            { name: '写字楼', icon: "none" },
            { name: '工厂', icon: "none" },
        ],
        // width: 250,
        itemGap: 2,
        itemWidth: 15,
        textStyle: {
            color: '#00a8ff',
            fontSize: 12
        }
    },
    title: {},
    toolbox: {},
    series: [{
            type: 'pie',
            center: ['15%', '50%'],
            radius: radius,
            x: '0%', // for funnel
            itemStyle: labelFromatter,
            data: [
                { name: 'other', value: 46, label: { show: false } },
                // { name: 'other1', value: 10, label: { show: false } },
                // { name: 'other2', value: 16, label: { show: false } },
                {
                    name: '公共建筑',
                    value: 54,
                    label: {
                        show: true,
                        position: 'center',
                        // fontSize: 11
                    }
                }
            ]
        },
        {
            type: 'pie',
            center: ['40%', '50%'],
            radius: radius,
            x: '20%', // for funnel
            itemStyle: labelFromatter,
            data: [
                { name: 'other', value: 56, label: { show: false } },
                { name: '商业综合体', value: 44, itemStyle: labelTop }
            ]
        },
        {
            type: 'pie',
            center: ['62%', '50%'],
            radius: radius,
            x: '40%', // for funnel
            itemStyle: labelFromatter,
            data: [
                { name: 'other', value: 65, label: { show: false } },
                { name: '写字楼', value: 35, itemStyle: labelTop }
            ]
        },
        {
            type: 'pie',
            center: ['85%', '50%'],
            radius: radius,
            x: '60%', // for funnel
            itemStyle: labelFromatter,
            data: [
                { name: 'other', value: 70, label: { show: false } },
                { name: '工厂', value: 30, itemStyle: labelTop }
            ]
        },
    ]
};

fac_ratio.setOption(option_fac_ratio);

console.log($('.txt_fund'));
console.log($('.img_fund'));
console.log($('.fund').find('a'));
$('.txt_fund').hover(function() {
    $('.txt_fund').addClass('active');
    $('.img_fund')[0].style.display = 'block'
    $('.img_home')[0].style.display = 'none';
    $('.img_repair')[0].style.display = 'none';

}).mouseout(function() {
    $('.img_fund')[0].style.display = 'none'
    $('.img_home')[0].style.display = 'block'
    $('.txt_fund').removeClass('active');
})

$('.txt_repair').hover(function() {
    $('.txt_repair').addClass('active');
    $('.img_repair')[0].style.display = 'block'
    $('.img_home')[0].style.display = 'none';
    $('.img_fund')[0].style.display = 'none';

}).mouseout(function() {
    $('.img_repair')[0].style.display = 'none'
    $('.img_home')[0].style.display = 'block'
    $('.txt_repair').removeClass('active');
})