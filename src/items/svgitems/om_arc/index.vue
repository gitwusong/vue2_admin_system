<template>
    <div class="om_arc" :style="style">
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
            <linearGradient :id="'linearRow_arc' + item_.uuid.value " x1="0%" y1="0%" x2="0%" y2="100%" >
                <stop
                    v-for="(itm,idx) in item_.fillGradientColorGroup.value"
                    :key="idx"
                    :offset="itm.label +'%'"
                    :stop-color="itm.value"
                    :stop-opacity="item_.fillOpacity.value"
                />
            </linearGradient>
            <linearGradient :id="'linearCol_arc'+ item_.uuid.value " x1="0%" y1="0%" x2="100%" y2="0%" >
                <stop
                    v-for="(itm,idx) in item_.fillGradientColorGroup.value"
                    :key="idx"
                    :offset="itm.label +'%'"
                    :stop-color="itm.value"
                    :stop-opacity="item_.fillOpacity.value"
                />
            </linearGradient>
            <radialGradient :id="'radial_arc' + item_.uuid.value " fx="50%" fy="50%" cx="50%" cy="50%" r="50%">
                <stop
                v-for="(itm,idx) in item_.fillGradientColorGroup.value"
                :key="idx"
                :offset="itm.label +'%'"
                :stop-color="itm.value"
                :stop-opacity="item_.fillOpacity.value" />
            </radialGradient>
        </defs>

            <!---辅助线--->
            <template v-if="item_.guide.value">
                <!--------------椭圆虚线------------------>
                <ellipse
                :cx="item_.cx.value"
                :cy="item_.cy.value"
                :rx="item_.rx.value"
                :ry="item_.ry.value"
                fill="none"
                stroke="#777777"
                :stroke-width="1"
                stroke-dasharray="3,3">
                </ellipse>

                <!---圆心--->
                <circle
                :cx="item_.cx.value"
                :cy="item_.cy.value"
                r="2"
                fill="#777777"
                />

                <path
                :d="d2"
                fill="none"
                stroke="#777777"
                :stroke-width="1"
                stroke-dasharray="3,3"/>
            </template>

            <!---圆弧---->
            <template v-if="item_.strokeShape.value==='arc'">
                <path
                :d="arc"
                :fill="item_.fillGradientColor.value =='color' ?  item_.fillColor.value : 'url('+item_.fillGradientColor.value+'_arc'+ item_.uuid.value +')'"
                :stroke="item_.strokeColor.value"
                :fill-opacity="`${item_.fillGradientColor.value =='color' ?  item_.fillOpacity.value : ''}`"
                :stroke-width="item_.strokeWidth.value" />
            </template>

            <!---弦---->
            <template v-if="item_.strokeShape.value==='chord'">
                <path
                :d="chord"
                :fill="item_.fillGradientColor.value =='color' ?  item_.fillColor.value : 'url('+item_.fillGradientColor.value+'_arc'+ item_.uuid.value +')'"
                :stroke="item_.strokeColor.value"
                :fill-opacity="`${item_.fillGradientColor.value =='color' ?  item_.fillOpacity.value : ''}`"
                :stroke-width="item_.strokeWidth.value" />
            </template>

            <!---扇形---->
            <template v-if="item_.strokeShape.value==='fan'">
                <path
                :d="fan"
                :fill="item_.fillGradientColor.value =='color' ?  item_.fillColor.value : 'url('+item_.fillGradientColor.value+'_arc'+ item_.uuid.value +')'"
                :stroke="item_.strokeColor.value"
                :fill-opacity="`${item_.fillGradientColor.value =='color' ?  item_.fillOpacity.value : ''}`"
                :stroke-width="item_.strokeWidth.value" />
            </template>
        </svg>
    </div>
</template>

<script>
import baseItem from '../../baseitem'
// 图元的数据点信息发生改变
export default {
    name: 'om_arc',
    extends:baseItem,
    computed:{
        arc() {
            let clockwise = 0
            let bigarc = 0

            if (this.item_.angle2.value - this.item_.angle1.value === 360) {
                clockwise = 1
                bigarc = 1
            } else if (
                this.item_.angle2.value - this.item_.angle1.value >= 180 &&
                this.item_.angle2.value - this.item_.angle1.value < 360) {
                clockwise = 0
                bigarc = 1
            } else if (
                this.item_.angle2.value < this.item_.angle1.value >= 0 &&
                this.item_.angle2.value < this.item_.angle1.value < 180) {
                clockwise = 0
                bigarc = 0
            } else if (
                this.item_.angle2.value - this.item_.angle1.value >= -180 &&
                this.item_.angle2.value < this.item_.angle1.value < 0) {
                clockwise = 1
                bigarc = 0
            } else if (
                this.item_.angle2.value - this.item_.angle1.value >= -360 &&
                this.item_.angle2.value < this.item_.angle1.value < -180) {
                clockwise = 1
                bigarc = 1
            } else {
                clockwise = 0
                bigarc = 0
            }
            const d = `
            M${this.point1.x} ${this.point1.y}
            A${this.item_.rx.value} ${this.item_.ry.value} 
            0 ${bigarc} ${clockwise}
            ${this.point2.x} ${this.point2.y}`
            return d
        },

        chord() {
            let clockwise = 0
            let smallarc = 0
            if (this.item_.angle2.value - this.item_.angle1.value > 180) {
                clockwise = 0
                smallarc = 1
            } else if (this.item_.angle2.value < this.item_.angle1.value) {
                clockwise = 1
                smallarc = 0
            } else if (this.item_.angle1.value - this.item_.angle2.value > 180) {
                clockwise = 1
                smallarc = 0
            } else {
                clockwise = 0
                smallarc = 0
            }
            const d = `
            M${this.point1.x} ${this.point1.y}
            A${this.item_.rx.value} ${this.item_.ry.value} 
            0 ${smallarc} ${clockwise}
            ${this.point2.x} ${this.point2.y} Z`
            return d
        },

        fan() {
            let clockwise = 0
            let smallarc = 0
            if (this.item_.angle2.value - this.item_.angle1.value > 180) {
                clockwise = 0
                smallarc = 1
            } else if (this.item_.angle2.value < this.item_.angle1.value) {
                clockwise = 1
                smallarc = 0
            } else if (this.item_.angle1.value - this.item_.angle2.value > 180) {
                clockwise = 1
                smallarc = 0
            } else {
                clockwise = 0
                smallarc = 0
            }
            const d = `
            M${this.item_.cx.value} ${this.item_.cy.value}
            L${this.point1.x} ${this.point1.y}
            A${this.item_.rx.value} ${this.item_.ry.value} 
            0 ${smallarc} ${clockwise}
            ${this.point2.x} ${this.point2.y} 
            Z`
            return d
        },

        d2() {
            const d2 = `
            M${this.point1.x} ${this.point1.y}
            L${this.item_.cx.value} ${this.item_.cy.value}
            L${this.point2.x} ${this.point2.y} `
            return d2
        },

        point1() {
            const cx = this.item_.cx.value
            const cy = this.item_.cy.value
            const rx = this.item_.rx.value
            const ry = this.item_.ry.value
            const angle = this.item_.angle1.value
            return this.calcPoint(cx, cy, rx, ry, angle)
        },

        point2() {
            const cx = this.item_.cx.value
            const cy = this.item_.cy.value
            const rx = this.item_.rx.value
            const ry = this.item_.ry.value
            const angle = this.item_.angle2.value
            return this.calcPoint(cx, cy, rx, ry, angle)
        }
    },
    methods:{
        calcPoint(cx, cy, rx, ry, angle) {
            angle = angle % 360

            const point = {
                x:0,
                y:0
            }

            if (angle === 0) {
                point.x = cx + rx
                point.y = cy
                return point
            }

            if (angle === 90) {
                point.x = cx
                point.y = cy - ry
                return point
            }

            if (angle === 180) {
                point.x = cx - rx
                point.y = cy
                return point
            }

            if (angle === 270) {
                point.x = cx
                point.y = cy + ry
                return point
            }

            const delta = Math.sqrt(ry * ry + rx * rx * Math.tan(angle / 180 * Math.PI) * Math.tan(angle / 180 * Math.PI))
            point.x = rx * ry / delta
            point.y = rx * ry * Math.tan(angle / 180 * Math.PI) / delta

            if (angle > 0 && angle < 90) {
                point.x = cx + point.x
                point.y = cy - point.y
                return point
            }

            if (angle > 90 && angle < 180) {
                point.x = cx - point.x
                point.y = cy + point.y
                return point
            }

            if (angle > 180 && angle < 270) {
                point.x = cx - point.x
                point.y = cy + point.y
                return point
            }

            if (angle > 270 && angle < 360) {
                point.x = cx + point.x
                point.y = cy - point.y
                return point
            }
        }
    }
}
</script>

<style>

</style>
