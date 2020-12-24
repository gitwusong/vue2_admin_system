<template>
    <div class="om_line" :style="style">
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
            <line
                :x1="item_.x1.value"
                :y1="item_.y1.value"
                :x2="item_.x2.value"
                :y2="item_.y2.value"
                :stroke="item_.strokeColor.value"
                :stroke-width="item_.strokeWidth.value"
                :stroke-dasharray="item_.strokeDasharray.value"

                stroke-linecap="round"
            ></line>
        </svg>
    </div>
</template>

<script>
import baseItem from '../../baseitem'
// 图元的数据点信息发生改变
export default {
    name: 'om_line',
    extends:baseItem
}
</script>

<style >
.om_line {
    position: relative;
    height: 100%;
    width: 100%;
}
</style>
