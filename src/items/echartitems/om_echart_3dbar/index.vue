<template>
    <div class="om_echart" :style="style">
        <v-chart ref="echart" style="width:100%;height:100%" :options="item_.options.value" theme="shine"/>
    </div>
</template>

<script>
import baseitem from '@/items/baseitem'
import echarts from 'vue-echarts'
import 'echarts/theme/shine.js'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

export default {
    name: 'om_echart_3dbar',
    extends:baseitem,
    components: {
        'v-chart': echarts
    },

    mounted() {
        this.item_.itemReason.value = 'itemInit'

        this.item_.options.value = {
            tooltip: {},
            grid:
            {
                left:0,
                right:0,
                top:0,
                bottom:0
            },
            visualMap:
            {
                show: true,
                dimension: 2,
                min: -80,
                max: 80,
                inRange:
                {
                    symbolSize: [-80, 80],
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                    // color: ['#87CEEB', '#00BFFF', '#FFDC35', '#FFD306', '#FF2D2D', '#EA0000']
                }
            },
            xAxis3D:
            {
                type: 'value',
                name: '频率',
                min: 0,
                max: 50
            },
            yAxis3D:
            {
                type: 'value',
                name: '相位',
                min:0,
                max: 360
            },
            zAxis3D:
            {
                type: 'value',
                name: '放电量',
                min: -10,
                max: 20
            },
            grid3D:
            {
                viewControl:
                {
                    // autoRotate: true
                }
            },
            series:
            [
                {
                    type: 'bar3D',
                    data: [],
                    wireframe:
                    {
                        // show: false
                    }
                }
            ]
        }

        console.log('sdsd', this.$store.state.sceneStore.tgdata)

        setInterval(() => {
            this.item_.options.value.series[0].data = this.$store.state.sceneStore.tgdata
        }, 1000)
        /*
        setInterval(
            () => {
                let data = [];
                for (let freq = 0; freq < 50; freq++) {
                    for (let phase = 0; phase < 200; phase++) {
                        let discharge = Math.random() * 160 - 80;
                        let point = [freq, phase, discharge];
                        data.push(point);
                    }
                }

                this.item_.options.value.series[0].data = this.$store.state.sceneStore.tgdata;
            },
            1000
        );
   */
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