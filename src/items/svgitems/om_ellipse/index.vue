<template>
    <div class="om_ellipse" :style="style">
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
            <linearGradient :id="'linearRow_ellipse' + item_.uuid.value " x1="0%" y1="0%" x2="0%" y2="100%" >
                <stop
                    v-for="(itm,idx) in item_.fillGradientColorGroup.value"
                    :key="idx"
                    :offset="itm.label +'%'"
                    :stop-color="itm.value"
                    :stop-opacity="item_.fillOpacity.value"
                />
            </linearGradient>
            <linearGradient :id="'linearCol_ellipse' + item_.uuid.value " x1="0%" y1="0%" x2="100%" y2="0%" >
                <stop
                    v-for="(itm,idx) in item_.fillGradientColorGroup.value"
                    :key="idx"
                    :offset="itm.label +'%'"
                    :stop-color="itm.value"
                    :stop-opacity="item_.fillOpacity.value"
                />
            </linearGradient>
            <radialGradient :id="'radial_ellipse' + item_.uuid.value " fx="50%" fy="50%" cx="50%" cy="50%" r="50%">
                <stop
                v-for="(itm,idx) in item_.fillGradientColorGroup.value"
                :key="idx"
                :offset="itm.label +'%'"
                :stop-color="itm.value"
                :stop-opacity="item_.fillOpacity.value" />
            </radialGradient>
        </defs>

            <ellipse
            :cx="item_.cx.value"
            :cy="item_.cy.value"
            :rx="item_.rx.value"
            :ry="item_.ry.value"
            :fill="item_.fillGradientColor.value =='color' ?  item_.fillColor.value : 'url('+item_.fillGradientColor.value+'_ellipse'+ item_.uuid.value +')'"
            :stroke="item_.strokeColor.value"
            :fill-opacity="`${item_.fillGradientColor.value =='color' ?  item_.fillOpacity.value : ''}`"
            :stroke-width="item_.strokeWidth.value">
            </ellipse>
        </svg>
    </div>
</template>

<script>
import baseItem from '../../baseitem'
export default {
    name: 'om_ellipse',
    extends:baseItem
}
</script>

<style>
.om_ellipse {
    position: relative;
    height: 100%;
    width: 100%;
}
</style>
