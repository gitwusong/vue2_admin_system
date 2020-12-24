<template>
    <div class="om_datetime_text" :style="style">
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
            <linearGradient :id="'linearRow_text' + item_.uuid.value" x1="0%" y1="0%" x2="0%" y2="100%" >
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
            >{{innerHtml}}</text>

        </svg>

    </div>
</template>

<script>
import baseItem from '../../baseitem'
export default {
    name: 'om_datetime_text',
    extends:baseItem,
    computed:{
        innerHtml() {
            console.log('innerHtml')
            return ''
            // author: meizz
            // Date.prototype.Format = function(fmt) {
            //     var o = {
            //         'M+': this.getMonth() + 1, // 月份
            //         'd+': this.getDate(), // 日
            //         'h+': this.getHours(), // 小时
            //         'm+': this.getMinutes(), // 分
            //         's+': this.getSeconds(), // 秒
            //         'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
            //         'S': this.getMilliseconds() // 毫秒
            //     }
            //     if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
            //     for (var k in o) { if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
            //     return fmt
            // }

            // let date = null
            // let innerHtml = this.item_.innerHtml.value
            // if (!innerHtml) {
            //     date = new Date()
            // }

            // if ( typeof (innerHtml) !== 'string' && typeof (innerHtml) !== 'number') {
            //     date = new Date()
            // }

            // if ( typeof (innerHtml) === 'string') {
            //     innerHtml = innerHtml.trim()
            //     if (innerHtml === '') {
            //         date = new Date()
            //     } else {
            //         date = new Date(innerHtml.replace(/-/, '/'))
            //     }
            // }

            // if ( typeof (innerHtml) === 'number') {
            //     date = new Date()
            //     date.setTime(innerHtml)
            // }

            // return date.Format(this.item_.dateFormat.value)
        }
    }
}
</script>

<style>
.om_datetime_text {
    position: relative;
    height: 100%;
    width: 100%;
    user-select: none;
}
</style>
