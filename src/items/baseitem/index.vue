<script>
import utils from './utils'
export default {
    utils:utils,
    name: 'om_baseitem',
    props: {
        item:{
            type:Object,
            default:function() {
                return {}
            }
        }
    },
    data() {
        return {
            // 临时拷贝
            item_:JSON.parse(JSON.stringify(this.item)),
            itemOld:null,

            // 引用
            item$:this.item
        }
    },
    watch:{
        item:{
            deep:true,
            immediate:true,
            handler:function(itemNew) {
                // console.log("base1",itemNew.itemReason.value)
                if (itemNew.itemReason.value === 'itemAdjusted') {
                    // 已经在内部的拷贝变量中调整过了，不需要再进行调整
                    return
                }
                // console.log("base2",itemNew.itemReason.value)
                // console.log("第一次打印", this.item_.top.value)
                this.itemOld = JSON.parse(JSON.stringify(this.item_))
                const itemNew_ = JSON.parse(JSON.stringify(itemNew))
                if (itemNew_.component.value === 'om_group') {
                    delete itemNew_.subitems
                    console.log('sdsds')
                }
                this.item_ = Object.assign(this.item_, itemNew_)

                this.dealItem()
            }
        }
    },
    methods:{

        dealItem() {
            const itemReason = this.item_.itemReason.value

            if (itemReason === 'itemPasted') {
                this.pastedItem()
            }

            if (itemReason === 'itemBreaked') {
                this.breakItem()
            }

            if (itemReason === 'itemCombined') {
                this.combineItem()
            }

            if (itemReason === 'itemInit') {
                this.initItem()
                this.vueBus.$emit('revokeCurrent')
            }
            if (itemReason === 'itemScaleItem') {
                this.scaleItem()
            }

            if (
                itemReason === 'itemMoving' ||
                itemReason === 'itemResizing' ||
                itemReason === 'itemRotating' ||
                itemReason === 'itemRotated'
            ) {
                this.scaledItem()
            }

            if (itemReason === 'itemMoved') {
                this.scaledItem()
                this.vueBus.$emit('revokeCurrent')
            }
            if (itemReason === 'itemResized') {
                this.scaledItem()
                this.vueBus.$emit('revokeCurrent')
            }

            this.getViewBox()
        },
        // 最后获取viewBox
        getViewBox() {
            const itemReason = this.item_.itemReason.value
            this.$nextTick( () => {
                this.calcViewBox()
                this.item_.itemReason.value = 'itemAdjusted'
                const item_ = JSON.parse(JSON.stringify(this.item_))
                // 对于组合图元，
                if (item_.component.value === 'om_group') {
                    // delete item_.subitems;
                }
                // 为了效率，避免状态管理器的遍历，这里直接修改引用
                Object.assign(this.item$, item_)
                // 发一份
                this.$emit('itemAdjusted', item_)
                // 同时通知状态管理器，图元的激活选中状态发生改变

                if (itemReason === 'itemActived') {
                    this.$store.commit('itemActived', this.item$)
                    return
                }
                if (itemReason === 'itemSelected') {
                    this.$store.commit('itemSelected', this.item$)
                    return
                }
                // 粘贴图元默认为选中状态
                if (itemReason === 'itemPasted') {
                    this.$store.commit('itemSelected', this.item$)
                    return
                }
            })
        },
        // 通过粘贴生成图元
        pastedItem() {
            this.item_ = utils.moveItem(this.item_, 50, 50)
        },

        // 解散图元
        breakItem() {

        },

        // 合并图元
        combineItem() {
        },

        initItem() {
            const dw = this.item_.left.value
            const dh = this.item_.top.value

            this.item_.left.value = 0
            this.item_.top.value = 0
            this.item_ = utils.moveItem(this.item_, dw, dh)
        },
        scaleItem() {
            utils.scaleItem(this.itemOld, this.item_)
        },

        scaledItem() {
            utils.scaledItem(this.itemOld, this.item_)
        },

        calcViewBox() {
            if (!this.$refs) {
                return
            }

            if (this.$refs.svg) {
                const bbox = this.$refs.svg.getBBox()
                const dx = bbox.x - this.item_.strokeWidth.value / 2 - Math.floor(bbox.x - this.item_.strokeWidth.value / 2)
                const dy = bbox.y - this.item_.strokeWidth.value / 2 - Math.floor(bbox.y - this.item_.strokeWidth.value / 2)
                this.item_.left.value = Math.floor(bbox.x - this.item_.strokeWidth.value / 2)
                this.item_.top.value = Math.floor(bbox.y - this.item_.strokeWidth.value / 2)
                this.item_.width.value = Math.ceil(bbox.width + this.item_.strokeWidth.value + dx)
                this.item_.height.value = Math.ceil(bbox.height + this.item_.strokeWidth.value + dy)
                return
            }

            if (this.$refs.echart) {
                this.$refs.echart.resize()
                return
            }
        },

        // ///////////////////////////////////////////////////////////////////////////////////////////////////
        // 控制器事件
        notifyItem(eventName, transform) {
            this.itemOld = JSON.parse(JSON.stringify(this.item_))
            this.item_.left.value = transform.left.value
            this.item_.top.value = transform.top.value
            this.item_.width.value = transform.width.value
            this.item_.height.value = transform.height.value

            this.item_.opacity.value = transform.opacity.value
            this.item_.rotation.value = transform.rotation.value
            this.item_.zIndex.value = transform.zIndex.value

            this.item_.active.value = transform.active.value
            this.item_.active.time = transform.active.time

            this.item_.transform.value = transform.transform.value

            if (eventName === 'controllerActived') {
                this.item_.itemReason.value = 'itemActived'
            }
            if (eventName === 'controllerSelected') {
                this.item_.itemReason.value = 'itemSelected'
            }

            if (eventName === 'controllerResized') {
                this.item_.itemReason.value = 'itemResized'
            }
            if (eventName === 'controllerMoving') {
                this.item_.itemReason.value = 'itemMoving'
            }
            if (eventName === 'controllerMoved') {
                this.item_.itemReason.value = 'itemMoved'
            }
            if (eventName === 'controllerResizing') {
                this.item_.itemReason.value = 'itemResizing'
            }
            if (eventName === 'controllerRotating') {
                this.item_.itemReason.value = 'itemRotating'
            }
            if (eventName === 'controllerRotated') {
                this.item_.itemReason.value = 'itemRotated'
            }
            //
            this.dealItem()
        }
    },
    computed:{
        style() {
            /* if(!this.item_.editable.value){
                return {
                    position:'absolute',
                    left:`${this.item_.left.value}px`,
                    top:`${this.item_.top.value}px`,
                    width:`${this.item_.width.value}px`,
                    height:`${this.item_.height.value}px`,
                    transform:`rotate(${this.item_.rotation.value}deg)`,
                    display:`${this.item_.display.value}`,
                    opacity:`${this.item_.opacity.value}px`
                }
            }*/
            // console.log("this.item_.transform.value",this.item_.transform.value)
            return {
                position:'relative',
                visibility:`${this.item_.display.value}`,
                transform:this.item_.transform.value,
                left:`${0}px`,
                top:`${0}px`,
                width:`${this.item_.width.value}px`,
                height:`${this.item_.height.value}px`
            }
        }
    }
}
</script>