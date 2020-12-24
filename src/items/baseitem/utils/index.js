
import config from '../config/'

/**
 * @description:
 *     toMetaObject 将一般对象转化为元对象, {conponent:"om_group", uuid:"sdsd", "d"}
 * @param
 *     {Object} 一般对象
 * @return
 *     {Object} 返回元对象
 */
function toMetaObject(object) {
    const componentName = object.component
    const objStandardProperty = JSON.parse(JSON.stringify(config.metaProperties[componentName]))
    const propertiesAll_ = JSON.parse(JSON.stringify(config.propertiesAll))

    const metaObject = {}
    // 遍历  objStandardProperty下item 合并初始值 覆盖默认值
    for (const key in objStandardProperty) {
        metaObject[key] = { ... propertiesAll_[key], ... objStandardProperty[key] }
        if (object[key]) {
            metaObject[key].value = object[key]
        }
    }
    return metaObject
}

/**
 * @description:
 *     将图元移动到指定位置
 * @param
 *     {Object} item
 * @param
 *     {Object} point 指定位置
 * @return
 *     {Object} 返回移动后的item信息
 */
function moveItemTo(itemOld, point) {
    const dw = point.x - itemOld.left.value
    const dh = point.y - itemOld.top.value
    const itemNew = moveItem(itemOld, dw, dh)
    return itemNew
}

/**
 * @description:
 *     将图元沿着水平方向移动dw或者垂直方向移动dh
 * @param
 *     {Object} itemOld 未移动前的图元位置
 * @param
 *     {Number} dw 水平方向移动的距离
 * @param
 *     {Number} dh 垂直方向移动的距离
 * @return
 *     {Object} 返回移动后的item信息
 */
function moveItem(itemOld, dw, dh) {
    const itemNew = JSON.parse(JSON.stringify(itemOld))
    for (const key in itemNew) {
        if (!itemNew[key].geometry) {
            continue
        }
        if (key === 'width') {
            continue
        }

        if (key === 'height') {
            continue
        }

        if (key === 'left') {
            itemNew[key].value += dw
            continue
        }

        if (key === 'top') {
            itemNew[key].value += dh
            continue
        }

        if (itemNew[key].direction === 'point.x') {
            itemNew[key].value += dw
        }

        if (itemNew[key].direction === 'point.y') {
            itemNew[key].value += dh
        }
    }

    return itemNew
}

// 根据宽高等比例放缩几何点(不取整)
function scaleItem(oldItem_, itemNew_) {
    const oldViewBox = {}

    oldViewBox.x = oldItem_.left.value
    oldViewBox.y = oldItem_.top.value
    oldViewBox.width = oldItem_.width.value
    oldViewBox.height = oldItem_.height.value

    const newViewBox = {}
    newViewBox.x = itemNew_.left.value
    newViewBox.y = itemNew_.top.value
    newViewBox.width = itemNew_.width.value
    newViewBox.height = itemNew_.height.value

    const item_ = itemNew_

    const scaleX = (newViewBox.width - item_.strokeWidth.value) / (oldViewBox.width - item_.strokeWidth.value)
    const scaleY = (newViewBox.height - item_.strokeWidth.value) / (oldViewBox.height - item_.strokeWidth.value)

    for (const key in item_) {
        if (!item_[key].geometry) {
            continue
        }

        if (key === 'left') {
            continue
        }

        if (key === 'top') {
            continue
        }

        if (key === 'width') {
            continue
        }

        if (key === 'height') {
            continue
        }

        if (item_[key].direction === 'point.x') {
            item_[key].value = newViewBox.x + item_.strokeWidth.value / 2 + (item_[key].value - oldViewBox.x - item_.strokeWidth.value / 2 ) * scaleX
        }

        if (item_[key].direction === 'point.y') {
            item_[key].value = newViewBox.y + item_.strokeWidth.value / 2 + (item_[key].value - oldViewBox.y - item_.strokeWidth.value / 2 ) * scaleY
        }

        if (item_[key].direction === 'size.width') {
            item_[key].value = item_[key].value * scaleX
        }

        if (item_[key].direction === 'size.height') {
            item_[key].value = item_[key].value * scaleY
        }

        if (item_[key].direction === 'size') {
            item_[key].value = item_[key].value * scaleX
        }
    }

    return itemNew_
}

// 根据宽高等比例放缩几何点(取整)
function scaledItem(oldItem_, itemNew_) {
    scaleItem(oldItem_, itemNew_)
    const item_ = itemNew_
    for (const key in item_) {
        if (!item_[key].geometry) {
            continue
        }

        if (item_[key].datatype === 'Number') {
            item_[key].value = Math.round(item_[key].value)
        }
    }
    return item_
}

/**
 * @description:
 *
 * @param
 *     {Object} item
 * @param
 *     {Object} point 指定位置
 * @return
 *     {Object} 返回移动后的item信息
 */
function toMetaObjectRead(object = {}) {
    const componentName = object.component
    const objStandardProperty = JSON.parse(JSON.stringify(config.metaProperties[componentName]))
    const propertiesAll_ = JSON.parse(JSON.stringify(config.propertiesAll))

    const metaObject = {}
    // 遍历  objStandardProperty下item 合并初始值 覆盖默认值
    for (const key in objStandardProperty) {
        metaObject[key] = { ... propertiesAll_[key], ... objStandardProperty[key] }
        if (object[key]) {
            metaObject[key].value = object[key]
        }
        if ( key === 'subitems') {
            metaObject[key].value = object[key].value.map( item => toMetaObjectRead(item))
        }
    }
    return metaObject
}

function toMetaArrayRead(array = []) {
    const newsArr = []
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'object' && !Array.isArray(array[i])) {
            newsArr.push( toMetaObjectRead(array[i]) )
        }
    }
    return newsArr
}

// 数据去元
function getDataObjectValue(object = {}) {
    const newObj = {}
    for (const key in object) {
        if (typeof object[key] === 'object') { // value 为对象
            newObj[key] = object[key].value
            if (key === 'subitems') {
                newObj.subitems = {}
                newObj.subitems.name = '子图元'
                newObj.subitems.value = getDataArrayValue(object.subitems.value)
            }
        }
    }
    return newObj
}

function getDataArrayValue(array = []) {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'object' && !Array.isArray(array[i])) {
            newArr.push(getDataObjectValue(array[i]))
        }
    }
    return newArr
}

export default {
    toMetaObject,
    moveItemTo,
    moveItem,
    scaleItem,
    scaledItem,
    toMetaObjectRead,
    toMetaArrayRead,
    getDataObjectValue,
    getDataArrayValue
}
