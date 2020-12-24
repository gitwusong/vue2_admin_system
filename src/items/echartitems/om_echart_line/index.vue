<template>
    <div class="om_echart" :style="style">
        <v-chart ref="echart" style="width:100%;height:100%" :options="item_.options.value" theme="shine"/>
    </div>
</template>

<script>
import baseitem from '@/items/baseitem'
import echarts from 'vue-echarts'
import 'echarts/theme/shine.js'
import 'echarts/lib/chart/line'
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

        function randomData() {
            now = new Date(+now + oneDay)
            value = Math.random() * 10 + 5
            return {
                name: now.toString(),
                value: [
                    [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                    Math.round(value)
                ]
            }
        }

        var data = []
        var now = +new Date(2020, 1, 3)
        var oneDay = 24 * 3600 * 1000
        var value = Math.random() * 1000
        for (var i = 0; i < 100; i++) {
            data.push(randomData())
        }

        this.item_.options.value = {
            grid:{
                left:0,
                top:0,
                right:0,
                bottom:0,
                show:true,
                containLabel:true
            },
            tooltip: {
                trigger: 'axis',
                formatter: function(params) {
                    params = params[0]
                    var date = new Date(params.name)
                    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1]
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
        }

        setInterval(
            () => {
                for (var i = 0; i < 5; i++) {
                    data.shift()
                    data.push(randomData())
                }
                this.item_.options.value.series[0].data = data
            },
            300
        )

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