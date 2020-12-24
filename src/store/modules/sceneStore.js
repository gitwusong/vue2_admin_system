import { uuid } from 'vue-uuid'
import baseitem from '@/items/baseitem'
import vueBus from '@/components/bus'
// 将对象属性格式转成元属性格式
function toMetaDetail(detail) {
    const scene = detail.scene
    const items = detail.items
    //
    const metaScene = baseitem.utils.toMetaObject(scene)
    //
    const metaItems = []
    for (let i = 0; i < items.length; i++) {
        const item = items[i]
        const metaItem = baseitem.utils.toMetaObject(item)
        metaItems.push(metaItem)
    }

    //
    var metaDetail = {}
    metaDetail['scene'] = metaScene
    metaDetail['items'] = metaItems
    return metaDetail
}

function init() {
    const detail = {
        scene:{
            component:'om_scene',
            type:'场景',
            width:1920,
            height:1280,
            background:'#B2DFEE',
            uuid:uuid.v1(),
            zoom:1
        },
        items:[],
        binddata:{}
    }
    return toMetaDetail(detail)
}

const detail = init()

setInterval(
    () => {
        const items = detail.items
        let length = items.length
        if (length <= 10000) return
        if (length > 100) length = 100
        for (let i = 0; i < length; i++) {
            const item = items[i]

            item.left.value = 100 * (i % 12)
            item.top.value = 100 * (parseInt(i / 12))

            if (item.fillColor) {
                const r = Math.random() * 255
                const g = Math.random() * 255
                const b = Math.random() * 255
                item.fillColor.value = `rgb(${r},${g},${b})`
                // item.itemReason.value = "itemMoved"
                item.itemReason.value = 'itemMoving'
            }

            if (item.strokeColor) {
                const r = Math.random() * 255
                const g = Math.random() * 255
                const b = Math.random() * 255
                item.strokeColor.value = `rgb(${r},${g},${b})`
                // item.itemReason.value = "itemMoved"
                item.itemReason.value = 'itemMoving'
            }

            if (item.r) {
                item.r.value = Math.random() * 50
                // item.itemReason.value = "itemMoved"
                item.itemReason.value = 'itemMoving'
            }
        }
    }, 300
)

export default {
    state:{
        detail:detail,
        global:null,
        selectedItems:[],
        currentSelectedItem:detail.scene,
        // currentSelectedItem:{},
        selectedBoxStatus:'', // 圈选状态,
        tgdata:[]
    },
    actions : {

    },
    mutations:{
        // 用户添加图元
        itemNew(state, ev) {
        //
            if (ev.dataTransfer.items !== undefined) {
                for (let i = 0; i < ev.dataTransfer.items.length; i++) {
                    const element = ev.dataTransfer.items[i]
                    if (element.kind === 'file' && element.webkitGetAsEntry().isFile) { // 拖拽的是文件 且不是文件目录
                        const file = element.getAsFile()
                        const filePath = file.path
                        if (filePath.slice(filePath.lastIndexOf('.') + 1, filePath.length) !== 'om') return // 不是om后缀的就return
                        localStorage.setItem('addFilePath', filePath)
                        window.location.reload() // 重新加载
                    } else
                    if (element.kind === 'string' && element.type === 'item') { // 拖拽的是图元item (注意传参不要用file)
                        vueBus.$emit('revokeSave')
                        let item = ev.dataTransfer.getData('item')
                        item = JSON.parse(item)
                        const newItem = {
                            uuid:uuid.v1(),
                            component:item.component
                        }
                        let metaNewItem = {}
                        if (item.component === 'om_group') {
                            metaNewItem = baseitem.utils.toMetaObjectRead(item.data)
                            metaNewItem.uuid.value = uuid.v1()
                        } else {
                            metaNewItem = baseitem.utils.toMetaObject(newItem)
                        }
                        // 移动图元到拖拽位置
                        metaNewItem.left.value = ev.offsetX
                        metaNewItem.top.value = ev.offsetY
                        metaNewItem.itemReason.value = 'itemInit'
                        //
                        state.detail.items.push(metaNewItem)

                        // let dateStart = new Date()
                        // let items = []
                        // for(let i=0; i<100; i++){
                        //   let item = JSON.parse(JSON.stringify(metaNewItem))
                        //   if(!item) continue;
                        //   item.left.value = i;
                        //   item.top.value = i;
                        //   item.uuid.value = uuid.v1();
                        //   item.itemReason.value = "itemInit";
                        //   items.push(item)
                        // }
                        // let dateEnd = new Date()
                        // console.log('item loading finish:', dateEnd-dateStart, 'ms');
                        // state.detail.items =  [...state.detail.items,...items]
                        // dateEnd = new Date()
                        // setTimeout( ()=>{
                        //     dateEnd = new Date()
                        //     console.log('item rending finish:', dateEnd-dateStart, 'ms');
                        //   },   0 )
                    }
                }
            }
        },

        // ///////////////////////////////////////////////////////////////////////////////////////////////////
        // 控制器事件
        itemActived(state, itemNew) {
            for (let i = 0; i < state.selectedItems.length; i++) {
                //
                const selectedItem = state.selectedItems[i]
                selectedItem.active.value = false
                selectedItem.itemReason.value = 'itemSelected'
            }

            //
            itemNew.active.value = true

            //
            state.selectedItems = []
            state.selectedItems.push(itemNew)
            state.currentSelectedItem = itemNew
        },

        itemSelected(state, itemNew) {
        //
            const uuid = itemNew.uuid.value
            const active = itemNew.active.value

            // 本次处于选中状态，那么说明原先是没有选中的
            if (active) {
                // 避免重复
                for (let i = 0; i < state.selectedItems.length; i++) {
                    if (state.selectedItems[i].uuid.value === uuid) {
                        Object.assign(state.selectedItems[i], itemNew)
                        return
                    }
                }

                state.selectedItems.push(itemNew)
                state.currentSelectedItem = itemNew
                return
            }

            //
            const selectedItems = state.selectedItems
            let length = selectedItems.length
            for (let i = 0; i < length; i++) {
                //
                const selectedItem = selectedItems[i]

                //
                if (selectedItem.uuid.value === uuid) {
                    selectedItems.splice(i, 1)
                    break
                }
            }

            length = selectedItems.length
            if (length > 0) {
                state.currentSelectedItem = selectedItems[length - 1]
            } else {
                state.currentSelectedItem = state.detail.scene
            }
        },
        // ///////////////////////////////////////////////////////////////////////////////////////////////////

        // ///////////////////////////////////////////////////////////////////////////////////////////////////
        // 图元调整完后，发送事件给状态管理器
        // itemAdjusted(state, itemNew) {
        //   let index = itemNew.index.value;
        //   let item = state.detail.items[index]
        //   Object.assign(item, itemNew)
        // },

        // ///////////////////////////////////////////////////////////////////////////////////////////////////

        // ///////////////////////////////////////////////////////////////////////////////////////////////////
        itemsMoved(state, direction) {
            for (let i = 0; i < state.detail.items.length; i++) {
                const item = state.detail.items[i]
                if (item.active.value) {
                    // item.itemReason.value = "itemMoved"
                    item.itemReason.value = 'itemMoving'
                    if (direction === 'left') {
                        item.left.value += -1
                    }

                    if (direction === 'right') {
                        item.left.value += 1
                    }

                    if (direction === 'up') {
                        item.top.value += -1
                    }

                    if (direction === 'down') {
                        item.top.value += 1
                    }
                }
            }
        },

        // 删除图元
        itemsRemoved(state) {
            for (let i = state.detail.items.length - 1; i >= 0; i--) {
                const item = state.detail.items[i]
                if (item.active.value) {
                    delete state.detail.items.splice(i, 1)
                }
            }

            state.selectedItems = []
            state.currentSelectedItem = state.detail.scene
        },

        // 用户点击场景，而非图元
        sceneActived(state) {
            for (let i = 0; i < state.detail.items.length; i++) {
                if (state.detail.items[i].active.value) {
                    state.detail.items[i].itemReason.value = 'itemSelected'
                    state.detail.items[i].active.value = false
                }
            }
            state.selectedItems = []
            state.currentSelectedItem = state.detail.scene
        // vueBus.$emit("revokeCurrent")
        },

        selectedItems(state) { //
            var selectedItems = []
            for (let i = 0; i < state.detail.items.length; i++) {
                const item = state.detail.items[i]
                if (item.active.value) {
                    selectedItems.push(item)
                }
            }

            if (selectedItems.length > 0) {
                selectedItems.sort((a, b) => { return a.active.time - b.active.time })
            }

            //
            state.selectedItems = selectedItems

            //
            if (selectedItems.length > 0) {
                selectedItems.sort((a, b) => { return a.active.time - b.active.time })
                state.currentSelectedItem = selectedItems[selectedItems.length - 1]
                return
            }
            state.currentSelectedItem = state.detail.scene
        },

        clearSelectedItems(state) {
            this.selectedItems = []
            this.currentSelectedItem = state.detail.scene
        }
    },
    getters:{
        detail:function(state) {
            return state.detail
        },
        selectedItems:function(state) {
            return state.selectedItems
        },
        currentSelectedItem:function(state) {
            return state.currentSelectedItem
        }
    }
}