<template>
    <div class="om_echart" :style="style">
        <v-chart ref="echart" style="width:100%;height:100%" :options="item_.options.value" theme="shine"/>
    </div>
</template>

<script>
import baseitem from '@/items/baseitem'
import echarts from 'vue-echarts'
import 'echarts/theme/shine.js'
import 'echarts/lib/chart/gauge'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

export default {
    name: 'om_echart_gauge',
    extends:baseitem,
    components: {
        'v-chart': echarts
    },

    mounted() {
        this.item_.itemReason.value = 'itemInit'

        /*
        function randomData() {
            now = new Date(+now + oneDay);
            value = value + Math.random() * 21 - 10;
            return {
                name: now.toString(),
                value: [
                    [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                    Math.round(value)
                ]
            };
        }

        var data = [];
        var now = +new Date(1997, 9, 3);
        var oneDay = 24 * 3600 * 1000;
        var value = Math.random() * 1000;
        for (var i = 0; i < 1000; i++) {
            data.push(randomData());
        }

        this.item_.options.value = {
            grid:{
                left:4,
                top:4,
                right:4,
                bottom:4,
                show:true,
                containLabel:true,
            },
            title: {
                text: '动态实时数据',//主标题文本，'\n'指定换行
                x:'center',//水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
                y: 'top',//垂直安放位置，默认为top，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
                textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                    fontFamily: '黑体',
                    fontSize: 12,
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                },
            },
            backgroundColor: '#12cf96',
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    params = params[0];
                    var date = new Date(params.name);
                    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                },
                axisPointer: {
                    animation: false
                }
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: true
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: true
                }
            },
            series: [{
                name: '模拟数据',
                type: 'line',
                showSymbol: false,
                hoverAnimation: true,
                data: data
            }]
        };

        setInterval(
            () => {
                for (var i = 0; i < 5; i++) {
                    data.shift();
                    data.push(randomData());
                }
                this.item_.options.value.series[0].data = data

            },
            40);

  */
        const option =
        {
            series:
            [
                {
                    type: 'gauge',
                    radius: '100%',
                    detail: {
                        show:true, formatter: '{value}%',
                        textStyle: {
                            fontSize:14,
                            fontWeight: 'normal', // 标签数字的粗细
                            color: '#654321', // 标签数字的颜色
                            shadowColor: '#fff',
                            shadowBlur: 10
                        }
                    },
                    data: [{ value: 50 }]
                }
            ]
        }

        setInterval( () => {
            option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0
            this.item_.options.value = option
        }, 300)

        this.$refs.echart.resize()
    }

}
</script>

<style >
.om_echart {
    position: relative;
    height: 100%;
    width: 100%;
    user-select: none;
}
</style>