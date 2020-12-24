<template>
    <div class="om_image" :style="style">
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
            <image
            crossorigin="anonymous"
            :x="item_.x.value"
            :y="item_.y.value"
            :width="item_.w.value"
            :height="item_.h.value"
            :xlink:href="'/images/'+item_.href.value"
            preserveAspectRatio="none"
            ></image>
        </svg>
    </div>
</template>

<script>
import baseItem from '../../baseitem'
export default {
    name: 'om_image',
    extends:baseItem,

    methods:{

    }
}
</script>

<style >
.om_image {
    position: relative;
    height: 100%;
    width: 100%;
}
</style>
