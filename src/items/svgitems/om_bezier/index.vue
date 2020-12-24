
<!---
:style="`transform:rotate(${item_.rotation.value}deg);opacity:${item_.opacity.value};`"
--->
<template>
    <div class="ombezier" :style="style">
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
            <path
            ref='path'
            :d="`M${item_.x1.value} ${item_.y1.value}
                Q${item_.x2.value} ${item_.y2.value} ${item_.x3.value} ${item_.y3.value}`"
            :stroke="item_.strokeColor.value"
            :stroke-width="item_.strokeWidth.value"
            fill="none"
            stroke-linecap="round"/>

            <template v-if="item_.guide.value">
                <circle
                :cx="item_.x1.value"
                :cy="item_.y1.value"
                r="2"
                fill="#000000"
                stroke="#777777"
                :stroke-width="item_.strokeWidth.value" />

                <circle
                :cx="item_.x2.value"
                :cy="item_.y2.value"
                r="2"
                fill="#000000"
                stroke="#777777"
                :stroke-width="item_.strokeWidth.value" />

                <circle
                :cx="item_.x3.value"
                :cy="item_.y3.value"
                r="2"
                fill="#000000"
                stroke="#777777"
                :stroke-width="0" />

                <path
                :d="`M${item_.x1.value} ${item_.y1.value}
                    L${item_.x2.value} ${item_.y2.value}
                    L${item_.x3.value} ${item_.y3.value}`"
                fill="none"
                :stroke="item_.strokeColor.value"
                :stroke-width="item_.strokeWidth.value"
                stroke-dasharray="5,5"/>
            </template>

        </svg>

    </div>
</template>

<script>
import baseItem from '../../baseitem'
// 图元的数据点信息发生改变
export default {
    name: 'om_bezier',
    extends:baseItem
}
</script>

<style>
.ombezier {
    position: relative;
    height: 100%;
    width: 100%;
}
</style>
