<template>
    <div class="om_rect" :style="style" @click="router_link">
        <svg
        ref="svg"
        style="position:absolute;left:0;top:0;"
        :width="item_.width.value"
        :height="item_.height.value"
        :viewBox="`${item_.left.value}
        ${item_.top.value}
        ${item_.width.value}
        ${item_.height.value}`"
        >
           <!--   渐变色 -->
        <defs>
            <linearGradient :id="'linearRow_rect'+ item_.uuid.value " x1="0%" y1="0%" x2="0%" y2="100%" >
                <stop
                    v-for="(itm,idx) in item_.fillGradientColorGroup.value"
                    :key="idx"
                    :offset="itm.label +'%'"
                    :stop-color="itm.value"
                    :stop-opacity="item_.fillOpacity.value"
                />
            </linearGradient>
            <linearGradient :id="'linearCol_rect'+ item_.uuid.value " x1="0%" y1="0%" x2="100%" y2="0%" >
                <stop
                    v-for="(itm,idx) in item_.fillGradientColorGroup.value"
                    :key="idx"
                    :offset="itm.label +'%'"
                    :stop-color="itm.value"
                    :stop-opacity="item_.fillOpacity.value"
                />
            </linearGradient>
            <radialGradient :id="'radial_rect' + item_.uuid.value " fx="50%" fy="50%" cx="50%" cy="50%" r="50%">
                <stop
                v-for="(itm,idx) in item_.fillGradientColorGroup.value"
                :key="idx"
                :offset="itm.label +'%'"
                :stop-color="itm.value"
                :stop-opacity="item_.fillOpacity.value" />
            </radialGradient>
        </defs>
            <g>
                <rect
                :x="item_.x.value"
                :y="item_.y.value"
                :width="item_.w.value"
                :height="item_.h.value"
                :fill="item_.fillGradientColor.value =='color' ?  item_.fillColor.value : 'url('+item_.fillGradientColor.value+'_rect'+ item_.uuid.value +')'"
                :stroke="item_.strokeColor.value"
                :stroke-width="item_.strokeWidth.value"
                :stroke-dasharray="item_.strokeDasharray.value"
                :fill-opacity="`${item_.fillGradientColor.value =='color' ?  item_.fillOpacity.value : ''}`"
                :rx="item_.r.value"
                stroke-linecap="round"
                ></rect>
                <!--  -->
                <text
                ref='text'
                style="min-height:10px;min-height:10px;"
                :x="item_.x.value + item_.w.value/2 - text.w/2 "
                :y="item_.y.value + item_.h.value/2 + text.h/2"
                :width="item_.w.value"
                :height="item_.h.value"

                :stroke="item_.strokeColor.value"
                :font-family="item_.fontFamily.value"
                :font-size="item_.fontSize.value"
                :font-weight="item_.fontWeight.value"
                :font-style="item_.fontStyle.value"
                :fill-opacity="`${item_.fillGradientColor.value =='color' ?  item_.fillOpacity.value : ''}`"
                >{{item_.innerHtml.value ? item_.innerHtml.value : ''}}</text>
            </g>
        </svg>
    </div>
</template>

<script>
import baseItem from '../../baseitem'
import baseitem from '@/items/baseitem/utils/index.js'
// 图元的数据点信息发生改变
export default {
    name: 'om_rect',
    extends:baseItem,
    data:() => ({
        text:{
            w:0,
            h:0
        }

    }),
    mounted() {
        const box = this.$refs.text.getBBox()
        this.text.w = box.width
        this.text.h = box.height
    },
    watch:{
        'item.innerHtml.value'() {
            this.$nextTick(() => {
                const box = this.$refs.text.getBBox()
                let scaleW = 0
                let scaleH = 0
                scaleW = box.width - this.text.w
                scaleH = box.height - this.text.h
                this.text.w = box.width
                this.text.h = box.height
                this.item_.w.value += scaleW
                this.item_.h.value += scaleH
                Object.assign(this.item$, this.item_)
            })
        }
    },
    methods : {
        router_link() {
            if (!this.item_.link.value) {
                alert('请先填写要跳转的路径')
                return
            }
            const src = this.item_.link.value
            const lastIndex = src.lastIndexOf('.')
            const suffix = src.substring(lastIndex)

            if (suffix === '.om') {
                const url = 'data/' + this.item_.link.value
                this.$http({
                    url:this.$http.url(url),
                    method:'get'
                })
                    .then(data => {
                        if (data.status === 200) {
                            this.$store.state.sceneStore.detail.scene = baseitem.toMetaObjectRead(data.data.scene)
                            this.$store.state.sceneStore.detail.items = baseitem.toMetaArrayRead(data.data.items)
                            this.$store.state.sceneStore.detail.bindData = data.data.bindData
                        } else {
                            alert('请检查路径是否存在')
                        }
                    })
                    .catch(err => alert(err))
            } else {
                window.open(this.item_.link.value)
                // window.location.href = this.item_.link.value
            }
        }
    }
}
</script>

<style >

</style>
