
<!---------------------------------------------------------------------------------------------------------
detail.items:
[
    {

    },
    {
        ...,
        subitems:{
            value:[item],
        }
    },
    {
        ....
    }
]
----------------------------------------------------------------------------------------------------------->
<template>
    <div
    class="om_group"
    :style="style"
    >
        <div
        class="item"
        v-for="(subitem, index) in item_.subitems.value"
        :key="index"
        :style="`
            position:absolute;
            left:${subitem.left.value-item_.left.value}px;
            top:${subitem.top.value-item_.top.value}px;
            width:${subitem.width.value}px;
            height:${subitem.height.value}px;`"
        >
            <component
            :is="`${subitem.component.value}`"
            :item="subitem"
            >
            </component>
        </div>
    </div>
</template>

<script>

import om_baseitem from '../baseitem'
import items from './config'
export default {
    name: 'om_groupitem',
    components:{
        ... items
    },
    extends:om_baseitem,
    methods : {
        initItem() {
            return
        },

        // 解散图元
        breakItem() {
            return
        },

        // 合并图元
        combineItem() {
            return
        },

        moveItem() {
            const dw = this.item_.left.value - this.itemOld.left.value
            const dh = this.item_.top.value - this.itemOld.top.value

            const subitems = this.item_.subitems.value
            for (let i = 0; i < subitems.length; i++) {
                const subitem = subitems[i]
                subitem.left.value += dw
                subitem.top.value += dh
                subitem.itemReason.value = 'itemMoving'
            }
            this.item_.itemReason.value = 'itemMoving'
        },

        scaleItem() {
            const sx = this.item_.width.value / this.itemOld.width.value
            const sy = this.item_.height.value / this.itemOld.height.value

            const subitems = this.item_.subitems.value
            for (let i = 0; i < subitems.length; i++) {
                const subitem = subitems[i]

                subitem.left.value = (subitem.left.value - this.itemOld.left.value ) * sx + this.item_.left.value
                subitem.top.value = (subitem.top.value - this.itemOld.top.value ) * sy + this.item_.top.value
                subitem.width.value = subitem.width.value * sx
                subitem.height.value = subitem.height.value * sy
                subitem.itemReason.value = 'itemResized'
            }
        },

        scaledItem() {
            this.scaleItem()
        },

        calcViewBox() {
            const subitems = this.item_.subitems.value
            var boundingRect = {}
            {
                const subitem = subitems[0]
                boundingRect.x = subitem.left.value
                boundingRect.y = subitem.top.value
                boundingRect.width = subitem.width.value
                boundingRect.height = subitem.height.value
                boundingRect.right = subitem.left.value + subitem.width.value
                boundingRect.bottom = subitem.top.value + subitem.height.value
            }

            for (var i = 0; i < subitems.length; i++) {
                const subitem = subitems[i]

                var boundingRectNext = {}
                boundingRectNext.x = subitem.left.value
                boundingRectNext.y = subitem.top.value
                boundingRectNext.width = subitem.width.value
                boundingRectNext.height = subitem.height.value
                boundingRectNext.right = subitem.left.value + subitem.width.value
                boundingRectNext.bottom = subitem.top.value + subitem.height.value

                if (boundingRectNext.x < boundingRect.x) {
                    boundingRect.x = boundingRectNext.x
                }

                if (boundingRectNext.y < boundingRect.y) {
                    boundingRect.y = boundingRectNext.y
                }

                if (boundingRectNext.right > boundingRect.right) {
                    boundingRect.right = boundingRectNext.right
                }

                if (boundingRectNext.bottom > boundingRect.bottom) {
                    boundingRect.bottom = boundingRectNext.bottom
                }
            }

            boundingRect.width = boundingRect.right - boundingRect.x
            boundingRect.height = boundingRect.bottom - boundingRect.y

            this.item_.left.value = boundingRect.x
            this.item_.top.value = boundingRect.y
            this.item_.width.value = boundingRect.width
            this.item_.height.value = boundingRect.height

            // setTimeout(
            //         ()=>{
            //             console.log(
            //                     this.item_.left.value,
            //                     this.item_.top.value)

            //             let subitems = this.item_.subitems.value
            //             for(let i=0; i<subitems.length; i++){
            //                 let subitem = subitems[i];
            //                 console.log("timeout",
            //                     subitem.left.value,
            //                     subitem.top.value,
            //                     subitem.x.value,
            //                     subitem.y.value)
            //             }
            //         },
            //         3000
            //     )
        }
    },

    computed:{
        style() {
            if (!this.item_.editable.value) {
                return {
                    postion:'absolute',
                    left:`${this.item_.left.value}px`,
                    top:`${this.item_.top.value}px`,
                    width:`${this.item_.width.value}px`,
                    height:`${this.item_.height.value}px`,
                    transform:`rotate(${this.item_.rotation.value}deg)`,
                    display:`${this.item_.display.value}px`,
                    opacity:`${this.item_.opacity.value}px`
                }
            }

            return {
                postion:'relative',
                left:`${0}px`,
                top:`${0}px`,
                width:`${this.item_.width.value}px`,
                height:`${this.item_.height.value}px`
            }
        }
    }
}

</script>

<style scoped>
.om_group {
    position: relative;
    height: 100%;
    width: 100%;
}
.wrapper{
    position: absolute;
    height: 100%;
    width: 100%;
}
</style>
