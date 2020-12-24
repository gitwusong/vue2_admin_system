<template>
    <div class="om_rect" :style="style">
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
        </svg>
    </div>
</template>

<script>
import baseItem from '../../baseitem'
// 图元的数据点信息发生改变
export default {
    name: 'om_rect',
    extends:baseItem
}
</script>

<style >

</style>
