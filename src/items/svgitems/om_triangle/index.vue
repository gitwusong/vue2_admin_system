<template>
    <div class="om_triangle" :style="style">
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
            <linearGradient :id="'linearRow_triangle' + item_.uuid.value" x1="0%" y1="0%" x2="0%" y2="100%" >
                <stop
                    v-for="(itm,idx) in item_.fillGradientColorGroup.value"
                    :key="idx"
                    :offset="itm.label +'%'"
                    :stop-color="itm.value"
                    :stop-opacity="item_.fillOpacity.value"
                />
            </linearGradient>
            <linearGradient :id="'linearCol_triangle' + item_.uuid.value" x1="0%" y1="0%" x2="100%" y2="0%" >
                <stop
                    v-for="(itm,idx) in item_.fillGradientColorGroup.value"
                    :key="idx"
                    :offset="itm.label +'%'"
                    :stop-color="itm.value"
                    :stop-opacity="item_.fillOpacity.value"
                />
            </linearGradient>
            <radialGradient :id="'radial_triangle' + item_.uuid.value" fx="50%" fy="50%" cx="50%" cy="50%" r="50%">
                <stop
                v-for="(itm,idx) in item_.fillGradientColorGroup.value"
                :key="idx"
                :offset="itm.label +'%'"
                :stop-color="itm.value"
                :stop-opacity="item_.fillOpacity.value" />
            </radialGradient>
        </defs>

            <path :d="`M${item_.x1.value} ${item_.y1.value}
                L${item_.x2.value} ${item_.y2.value}
                L${item_.x3.value} ${item_.y3.value} Z`"
            :fill="item_.fillGradientColor.value =='color' ?  item_.fillColor.value : 'url('+item_.fillGradientColor.value+'_triangle'+ item_.uuid.value +')'"
            :stroke="item_.strokeColor.value"
            :fill-opacity="`${item_.fillGradientColor.value =='color' ?  item_.fillOpacity.value : ''}`"
            :stroke-width="item_.strokeWidth.value"/>
        </svg>
    </div>
</template>
<script>
import baseItem from '../../baseitem'
// 图元的数据点信息发生改变
export default {
    name: 'om_triangle',
    extends:baseItem
}
</script>

<style>
.om_triangle {
    position: relative;
    height: 100%;
    width: 100%;
}
</style>
