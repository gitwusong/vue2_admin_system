<template>
    <div class="omtext" :style="style">
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
            <linearGradient :id="'linearRow_text' + item_.uuid.value " x1="0%" y1="0%" x2="0%" y2="100%" >
                <stop
                    v-for="(itm,idx) in item_.fillGradientColorGroup.value"
                    :key="idx"
                    :offset="itm.label +'%'"
                    :stop-color="itm.value"
                    :stop-opacity="item_.fillOpacity.value"
                />
            </linearGradient>
            <linearGradient :id="'linearCol_text' + item_.uuid.value " x1="0%" y1="0%" x2="100%" y2="0%" >
                <stop
                    v-for="(itm,idx) in item_.fillGradientColorGroup.value"
                    :key="idx"
                    :offset="itm.label +'%'"
                    :stop-color="itm.value"
                    :stop-opacity="item_.fillOpacity.value"
                />
            </linearGradient>
            <radialGradient :id="'radial_text' + item_.uuid.value " fx="50%" fy="50%" cx="50%" cy="50%" r="50%">
                <stop
                v-for="(itm,idx) in item_.fillGradientColorGroup.value"
                :key="idx"
                :offset="itm.label +'%'"
                :stop-color="itm.value"
                :stop-opacity="item_.fillOpacity.value" />
            </radialGradient>
        </defs>

            <text
            ref='path'
            :x="item_.x.value"
            :y="item_.y.value"
            :width="item_.w.value"
            :height="item_.h.value"
            :stroke="item_.strokeColor.value"
            :fill="item_.fillGradientColor.value =='color' ?  item_.fillColor.value : 'url('+item_.fillGradientColor.value+'_text'+ item_.uuid.value +')'"
            :stroke-width="item_.strokeWidth.value"
            :stroke-dasharray="item_.strokeDasharray.value"
            :font-family="item_.fontFamily.value"
            :font-size="item_.fontSize.value"
            :font-weight="item_.fontWeight.value"
            :font-style="item_.fontStyle.value"
            :fill-opacity="`${item_.fillGradientColor.value =='color' ?  item_.fillOpacity.value : ''}`"
            >{{item_.innerHtml.value}}</text>
        </svg>

    </div>
</template>

<script>
import baseItem from '../../baseitem'
export default {
    name: 'om_text',
    extends:baseItem
}
</script>

<style >
.omtext {
    position: relative;
    height: 100%;
    width: 100%;
    user-select: none;
}
</style>
