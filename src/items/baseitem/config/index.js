// 所有图元的配置项
const propertiesAll = {
    itemReason:{
        name:'图元变动原因',
        value:'',
        datatype:'String',
        ctrltype:'inputPicker',
        required:true,
        readonly:'readonly',
        disabled:true,
        visible:false
    },

    type:{
        name:'对象类型',
        value:'文本',
        datatype:'String',
        ctrltype:'inputPicker',
        required:true,
        readonly:'readonly',
        disabled:true,
        visible:true
    },

    // 唯一ID,自动生成
    uuid:{
        name:'对象Id',
        value:'',
        datatype:'String',
        ctrltype:'inputPicker',
        required:true,
        readonly:'readonly',
        disabled:true,
        visible:true
    },

    // 调用的组件名
    component:{
        name:'组件名称',
        value:'',
        datatype:'String',
        ctrltype:'inputPicker',
        required:true,
        readonly:'readonly',
        disabled:true,
        visible:false
    },

    left:{
        name:'X轴',
        value:0,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true,
        geometry:true,
        direction:'point.x',

        min:0,
        max:99999,
        step:1
    },

    top:{
        name:'Y轴',
        value:0,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true,
        geometry:true,
        direction:'point.y',

        min:0,
        max:99999,
        step:1
    },

    width:{
        name:'对象宽度',
        value:100,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true,
        geometry:true,
        direction:'size.width',

        min:0,
        max:99999,
        step:1
    },

    height: {
        name:'对象高度',
        value:100,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true,
        geometry:true,
        direction:'size.height',

        min:0,
        max:99999,
        step:1
    },

    active: {
        name:'激活状态',
        value:false,
        datatype:'Boolean',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:false,
        time:0
    },

    // 图元是否可编辑
    editable: {
        name:'激活状态',
        value:false,
        datatype:'Boolean',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:false
    },

    display:{
        name:'显示隐藏',
        value:'visible',
        datatype:'String',
        ctrltype:'displayPicker',
        required:true,
        readonly:'readonly',
        enabled:true,
        visible:true,

        range:['visible', 'hidden']
    },

    opacity:{
        name:'透明度',
        value:1,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        enabled:true,
        visible:true,
        min:0,
        max:1,
        step:0.1
    },

    zoom: {
        name:'缩放系数',
        value:1,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        // visible:true,
        visible:false,

        min:0.1,
        max:10,
        step:0.1
    },

    rotation: {
        name:'旋转角度',
        value:0,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true,

        min:0,
        max:359,
        step:1
    },

    zIndex: {
        name:'图层',
        value:0,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true,

        min:0,
        max:99999,
        step:1
    },

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    x: {
        name:'起始X:',
        direction:'point.x',
        geometry:true,
        value:0,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:false,
        min:-99999,
        max:99999,
        step:1
    },

    y: {
        name:'起始Y:',
        direction:'point.y',
        geometry:true,
        value:0,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:false,
        min:-99999,
        max:99999,
        step:1
    },

    w:{
        name:'对象宽度',
        value:100,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true,
        geometry:true,
        direction:'size.width',

        min:0,
        max:99999,
        step:1
    },

    h: {
        name:'对象高度',
        value:100,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true,
        geometry:true,
        direction:'size.height',

        min:0,
        max:99999,
        step:1
    },

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    font:{
        name:'字体设置',
        geometry:true,
        datatype:'Object',
        ctrltype:'fontPicker',
        disabled:false,
        visible:true,
        members:['fontFamily', 'fontSize', 'fontStyle', 'fontWeight']
    },
    fontFamily:{
        name:'字体名称',
        geometry:true,
        value:'宋体',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true
    },
    fontSize:{
        name:'字体大小',
        geometry:true,
        value:'14',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true
    },
    fontWeight:{
        name:'字体粗细',
        geometry:true,
        value:'normal',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true
    },
    fontStyle:{
        name:'字体风格',
        geometry:true,
        value:'normal',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true
    },
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    fill:{
        name:'填充',
        geometry:true,
        datatype:'Object',
        ctrltype:'fillPicker',
        disabled:false,
        visible:true,
        members:['fillOpacity', 'fillColor', 'fillGradientColor', 'fillGradientColorGroup']
    },
    fillColor:{
        name:'填充色',
        geometry:false,
        value:'none',
        datatype:'String',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:false
    },
    fillOpacity:{
        name:'透明度',
        geometry:false,
        value:'none',
        datatype:'String',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:false
    },
    fillGradientColor:{
        name:'渐变色',
        geometry:false,
        value:'color', // #radial
        datatype:'String',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:false
    },
    fillGradientColorGroup:{
        name:'渐变色号组',
        geometry:false,
        value:[
            { label:0, value:'#00ff00' },
            { label:100, value:'#9999ff' }
        ],
        datatype:'String',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:false
    },

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    stroke:{
        name:'轮廓设置',
        geometry:true,
        datatype:'Object',
        ctrltype:'strokePicker',
        disabled:false,
        visible:true,
        members:['strokeColor', 'strokeWidth', 'strokeDasharray']
    },

    strokeColor:{
        name:'轮廓色',
        geometry:false,
        value:'#000000',
        datatype:'String',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true
    },
    strokeWidth:{
        name:'线宽',
        value:1,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true,
        min:1,
        max:99999,
        direction:'strokeWidth',
        geometry:true
    },
    strokeDasharray:{
        name:'线型',
        value:'1,0',
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true,
        min:1,
        max:99999,
        direction:'strokeWidth',
        geometry:true
    },
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    background:{
        name:'填充色',
        geometry:false,
        value:'#000',
        datatype:'String',
        ctrltype:'backgroundPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true
    },

    innerHtml:{
        name:'内容',
        geometry:true,
        direction:'text',
        value:'内容区',
        datatype:'String',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true
    },

    href:{
        name:'路径',
        geometry:true,
        direction:'image',
        value:'',
        datatype:'String',
        ctrltype:'imagePicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:false,

        accept:'',
        limit:''
    },
    link:{
        name:'跳转路径',
        geometry:true,
        direction:'button',
        value:'',
        datatype:'String',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:false,

        accept:'',
        limit:''
    },

    point1: {
        name:'点1',
        datatype:'point',
        ctrltype:'pointPicker',
        visible:true,
        members:['x1', 'y1']
    },

    point2: {
        name:'点2',
        datatype:'point',
        ctrltype:'pointPicker',
        visible:true,
        members:['x2', 'y2']
    },

    point3: {
        name:'点3',
        datatype:'point',
        ctrltype:'pointPicker',
        visible:true,
        members:['x3', 'y3']
    },

    x1: {
        name:'坐标x1',
        direction:'point.x',
        geometry:true,
        value:0,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:false,
        min:-99999,
        max:99999,
        step:1
    },

    x2: {
        name:'坐标x2',
        direction:'point.x',
        geometry:true,
        value:50,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:false,
        min:-99999,
        max:99999,
        step:1
    },

    x3: {
        name:'坐标x3',
        direction:'point.x',
        geometry:true,
        value:200,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:false,
        min:-99999,
        max:99999,
        step:1
    },

    y1: {
        name:'坐标y1',
        direction:'point.y',
        geometry:true,
        value:0,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:false,
        min:-99999,
        max:99999,
        step:1
    },

    y2: {
        name:'坐标y2',
        direction:'point.y',
        geometry:true,
        value:100,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:false,
        min:-99999,
        max:99999,
        step:1
    },

    y3: {
        name:'坐标y3',
        direction:'point.y',
        geometry:true,
        value:200,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:false,
        min:-99999,
        max:99999,
        step:1
    },

    strokeShape:{
        name:'轮廓形状',
        direction:'none',
        geometry:true,
        value:'arc',
        datatype:'String',
        ctrltype:'strokeShapePicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true,
        range:['arc', 'chord', 'fan']
    },

    cx: {
        name:'圆心X',
        direction:'point.x',
        geometry:true,
        value:100,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true,
        min:0,
        max:99999,
        step:1
    },
    cy: {
        name:'圆心Y',
        direction:'point.y',
        geometry:true,
        value:100,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true,
        min:0,
        max:99999,
        step:1
    },

    r: {
        name:'半径',
        direction:'size',
        geometry:true,
        value:100,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true,
        min:0,
        max:99999,
        step:1
    },

    rx: {
        name:'X轴半径',
        direction:'size.width',
        geometry:true,
        value:100,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true,
        min:0,
        max:99999,
        step:1
    },

    ry: {
        name:'Y轴半径',
        direction:'size.height',
        geometry:true,
        value:50,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true,
        min:0,
        max:99999,
        step:1
    },

    angle1: {
        name:'角度1',
        direction:'angle',
        geometry:false,
        value:270,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true,
        min:0,
        max:360,
        step:1
    },
    angle2: {
        name:'角度2',
        direction:'angle',
        geometry:false,
        value:270,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true,
        min:0,
        max:360,
        step:1
    },

    guide: {
        name:'辅助线',
        value:1,
        datatype:'Number',
        ctrltype:'guidePicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true,
        min:0,
        max:1,
        step:1
    },

    subitems:{
        name:'子图元',
        value:[],
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true
    },

    options:{
        value:{},
        datatype:'String',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true,
        direction:'angle',
        geometry:false
    },

    // scene放大缩小专用
    transformScale: {
        name:'缩放系数',
        value:'1,1',
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:false,

        min:0.1,
        max:10,
        step:0.1
    },
    transform: {
        name:'反转',
        value:'',
        datatype:'string',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:false
    },

    // 值文本
    decimalPlaces:{
        name:'小数位数',
        value:2,
        datatype:'Number',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true,

        direction:'',
        geometry:true,

        min:0,
        max:10,
        step:1
    },

    dataFormat:{
        name:'格式化',
        value:'{value}',
        datatype:'String',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true,

        direction:'',
        geometry:true
    },

    dateFormat:{
        name:'时间格式',
        value:'yyyy-MM-dd hh:mm:ss.S',
        datatype:'String',
        ctrltype:'inputPicker',
        required:true,
        readonly:'',
        disabled:false,
        visible:true,

        direction:'',
        geometry:true
    }
}

// 类型配置
const metaProperties = {

    om_scene:{
        width:{
            name:'场景宽度',
            value:1920
        },
        height:{
            name:'场景高度',
            value:1280
        },
        component:{ value:'om_scene' },
        type:{ value:'场景' },
        top:{ visible:false },
        left:{ visible:false },
        display:{ visible:false },
        uuid:{ visible:false },
        zIndex:{ visible:false },
        zoom:{ visible:false },
        rotation:{ visible:false },
        opacity:{ visible:false },
        background:{
            name:'背景色',
            value:'#B2DFEE'
        },
        itemReason:{},
        transformScale:{},
        transform:{}
    },

    om_text:{
        itemReason:{},
        uuid:{ visible:false },
        component:{ value:'om_text' },
        type:{ value:'文本' },
        left:{ visible:true },
        top:{ visible:true },
        width:{ visible:false },
        height:{ visible:false },
        active:{ visible:false },
        display:{ visible:true },
        zIndex:{ visible:true },
        rotation:{ visible:true },
        opacity:{ visible:true },
        editable:{},

        fill:{},
        // fill:{ value:"#000000",name:"前景色"},
        fillOpacity:{ value:1 },
        fillColor:{ value:'#eeeeee' },
        fillGradientColor:{},
        fillGradientColorGroup:{},

        x:{ value:0, visible:false },
        y:{ value:0, visible:false },
        w:{ visible:false },
        h:{ visible:false },
        innerHtml:{ value:'文本内容' },

        //
        stroke:{},
        strokeColor:{ visible:false },
        strokeDasharray:{ visible:false },
        strokeWidth:{ value:0, visible:false },

        //
        font:{},
        fontFamily:{ visible:false },
        fontSize:{ value:14, visible:false },
        fontWeight:{ visible:false },
        fontStyle:{ visible:false },
        transform:{}
    },

    // ////////////////////////////////////////////////////////////////////////////////////////////////
    //
    om_value_text:{
        itemReason:{},
        uuid:{ visible:false },
        component:{ value:'om_value_text' },
        type:{ value:'值文本' },
        left:{ visible:true },
        top:{ visible:true },
        width:{ visible:false },
        height:{ visible:false },
        active:{ visible:false },
        display:{ visible:true },
        zIndex:{ visible:true },
        rotation:{ visible:true },
        opacity:{ visible:true },
        editable:{},

        fill:{},
        // fill:{ value:"#000000",name:"前景色"},
        fillOpacity:{ value:1 },
        fillColor:{ value:'#eeeeee' },
        fillGradientColor:{},
        fillGradientColorGroup:{},

        x:{ value:0, visible:false },
        y:{ value:0, visible:false },
        w:{ visible:false },
        h:{ visible:false },

        decimalPlaces:{},
        dataFormat:{},
        innerHtml:{ value:-12345, datatype:'Number' },

        //
        stroke:{},
        strokeColor:{ visible:false },
        strokeDasharray:{ visible:false },
        strokeWidth:{ value:0, visible:false },

        //
        font:{},
        fontFamily:{ visible:false },
        fontSize:{ value:14, visible:false },
        fontWeight:{ visible:false },
        fontStyle:{ visible:false },
        transform:{}
    },
    // //////////////////////////////////////////////////

    // ////////////////////////////////////////////////////////////////////////////////////////////////
    //
    om_datetime_text:{
        itemReason:{},
        uuid:{ visible:false },
        component:{ value:'om_datetime_text' },
        type:{ value:'时间文本' },
        left:{ visible:true },
        top:{ visible:true },
        width:{ visible:false },
        height:{ visible:false },
        active:{ visible:false },
        display:{ visible:true },
        zIndex:{ visible:true },
        rotation:{ visible:true },
        opacity:{ visible:true },
        editable:{},

        fill:{},
        // fill:{ value:"#000000",name:"前景色"},
        fillOpacity:{ value:1 },
        fillColor:{ value:'#eeeeee' },
        fillGradientColor:{},
        fillGradientColorGroup:{},

        x:{ value:0, visible:false },
        y:{ value:0, visible:false },
        w:{ visible:false },
        h:{ visible:false },

        dateFormat:{},
        innerHtml:{ value:'', datatype:'string' },

        //
        stroke:{},
        strokeColor:{ visible:false },
        strokeDasharray:{ visible:false },
        strokeWidth:{ value:0, visible:false },

        //
        font:{},
        fontFamily:{ visible:false },
        fontSize:{ value:14, visible:false },
        fontWeight:{ visible:false },
        fontStyle:{ visible:false },
        transform:{}
    },
    om_link:{
        itemReason:{},
        uuid:{ visible:false },
        component:{ value:'om_text' },
        type:{ value:'跳转按钮' },
        left:{ visible:true },
        top:{ visible:true },
        width:{ visible:false },
        height:{ visible:false },
        active:{ visible:false },
        display:{ visible:true },
        zIndex:{ visible:true },
        rotation:{ visible:true },
        opacity:{ visible:true },
        editable:{},

        fill:{},
        fillOpacity:{ value:1 },
        fillColor:{ value:'#eeeeee' },
        fillGradientColor:{},
        fillGradientColorGroup:{},

        x:{ value:0, visible:false },
        y:{ value:0, visible:false },
        w:{ visible:false },
        h:{ visible:false },
        innerHtml:{ value:'文本内容' },

        //
        stroke:{},
        strokeColor:{ visible:false },
        strokeDasharray:{ visible:false, value:'1,0' },
        strokeWidth:{ value:1, visible:false },

        //
        font:{},
        fontFamily:{ visible:false },
        fontSize:{ value:14, visible:false },
        fontWeight:{ visible:false },
        fontStyle:{ visible:false },
        link:{ visible:true },
        r:{ name:'圆角半径', geometry:false, value:5, visible:true },
        transform:{}
    },
    // //////////////////////////////////////////////////

    om_image:{
        itemReason:{},
        uuid:{ visible:false },
        component:{ value:'om_image' },
        type:{ value:'图片' },
        left:{ visible:true },
        top:{ visible:true },
        width:{ visible:true },
        height:{ visible:true },
        active:{ visible:false },
        display:{ visible:true },
        zIndex:{ visible:true },
        rotation:{ visible:true },
        opacity:{ visible:true },
        editable:{},

        //
        strokeWidth:{ value:0, visible:false },
        x:{ visible:false },
        y:{ visible:false },
        w:{ visible:false },
        h:{ visible:false },
        href:{ value:'timg.jpg', visible:true },
        transform:{}
    },

    om_bezier:{
        itemReason:{},
        uuid:{ visible:false },
        component:{ value:'om_bezier' },
        type:{ value:'贝塞尔曲线' },
        left:{ visible:true },
        top:{ visible:true },
        width:{ visible:true },
        height:{ visible:true },
        active:{ visible:false },
        display:{ visible:true },
        zIndex:{ visible:true },
        rotation:{ visible:true },
        opacity:{ visible:true },
        editable:{},

        x1:{ value:0 },
        y1:{ value:100 },
        x2:{ value:10 },
        y2:{ value:10 },
        x3:{ value:100 },
        y3:{ value:0 },
        point1:{},
        point2:{},
        point3:{},
        guide:{},

        //
        stroke:{},
        strokeColor:{ visible:false },
        strokeDasharray:{ visible:false },
        strokeWidth:{ visible:false },
        transform:{}
    },

    om_group:{
        itemReason:{},
        uuid:{ visible:false },
        component:{ value:'om_group' },
        type:{ value:'组合图元' },
        left:{ visible:true },
        top:{ visible:true },
        width:{ visible:true },
        height:{ visible:true },
        active:{ visible:false },
        display:{ visible:true },
        zIndex:{ visible:true },
        rotation:{ visible:true },
        opacity:{ visible:true },
        editable:{},

        subitems:{
            value:[],
            visible:false
        },
        transform:{}
    },

    om_ellipse:{
        itemReason:{},
        uuid:{ visible:false },
        component:{ value:'om_ellipse' },
        type:{ value:'椭圆' },
        left:{ visible:true },
        top:{ visible:true },
        width:{ visible:true },
        height:{ visible:true },
        active:{ visible:false },
        display:{ visible:true },
        zIndex:{ visible:true },
        rotation:{ visible:true },
        opacity:{ visible:true },
        editable:{},

        fill:{ value:'#ff0000', visible:true },
        fillOpacity:{ value:1 },
        fillColor:{ value:'#123456' },
        fillGradientColor:{},
        fillGradientColorGroup:{},

        rx:{ value:50, visible:true },
        ry:{ value:30, visible:true },
        cx:{ value:0, visible:true },
        cy:{ value:0, visible:true },

        //
        stroke:{},
        strokeColor:{ visible:false },
        strokeDasharray:{ visible:false },
        strokeWidth:{ visible:false },
        transform:{}
    },
    om_rect:{
        itemReason:{},
        uuid:{ visible:false },
        component:{ value:'om_rect' },
        type:{ value:'矩形' },
        left:{ visible:true },
        top:{ visible:true },
        width:{ visible:true },
        height:{ visible:true },
        active:{ visible:false },
        display:{ visible:true },
        zIndex:{ visible:true },
        rotation:{ visible:true },
        opacity:{ visible:true },
        editable:{},

        //
        x:{ visible:false },
        y:{ visible:false },
        w:{ visible:false },
        h:{ visible:false },

        //
        r:{ name:'圆角半径', geometry:false, value:5, visible:true },

        //
        fill:{},
        fillOpacity:{ value:1 },
        fillColor:{ value:'#123456' },
        fillGradientColor:{},
        fillGradientColorGroup:{},

        //
        stroke:{},
        strokeColor:{ value:'#ff0000', visible:false },
        strokeDasharray:{ visible:false },
        strokeWidth:{ value:2, visible:false },
        transform:{}
    },
    om_line:{
        controllReason:{},
        uuid:{ visible:false },
        component:{ value:'om_line' },
        type:{ value:'直线' },
        left:{ visible:true },
        top:{ visible:true },
        width:{ visible:true },
        height:{ visible:true },
        active:{ visible:false },
        display:{ visible:true },
        zIndex:{ visible:true },
        rotation:{ visible:true },
        opacity:{ visible:true },
        editable:{},

        itemReason:{},
        x1:{ value:0, visible:true },
        y1:{ value:0, visible:true },
        x2:{ value:100, visible:true },
        y2:{ value:100, visible:true },

        //
        stroke:{},
        strokeColor:{ value:'#000000', visible:false },
        strokeDasharray:{ visible:false },
        strokeWidth:{ visible:false },
        transform:{}
    },

    om_arc:{
        itemReason:{},
        uuid:{ visible:false },
        component:{ value:'om_arc' },
        type:{ value:'圆弧' },
        left:{ visible:true },
        top:{ visible:true },
        width:{ visible:true },
        height:{ visible:true },
        active:{ visible:false },
        display:{ visible:true },
        zIndex:{ visible:true },
        rotation:{ visible:true },
        opacity:{ visible:true },
        editable:{},

        cx:{ value:0 },
        cy:{ value:0 },
        rx:{ value:80 },
        ry:{ value:40 },
        angle1:{ value:0 },
        angle2:{ value:60 },
        strokeShape:{
        },

        //
        stroke:{},
        strokeColor:{ visible:false },
        strokeDasharray:{ visible:false },
        strokeWidth:{ visible:false },

        fill:{ value:'none' },
        fillOpacity:{ value:1 },
        fillColor:{ value:'#123456' },
        fillGradientColor:{},
        fillGradientColorGroup:{},

        guide:{},
        transform:{}
    },

    om_triangle:{

        itemReason:{},
        uuid:{ visible:false },
        component:{ value:'om_triangle' },
        type:{ value:'三角形' },
        left:{ visible:true },
        top:{ visible:true },
        width:{ visible:true },
        height:{ visible:true },
        active:{ visible:false },
        display:{ visible:true },
        zIndex:{ visible:true },
        rotation:{ visible:true },
        opacity:{ visible:true },
        editable:{},

        fill:{ value:'#ff0000', visible:true },
        fillOpacity:{ value:1 },
        fillColor:{ value:'#123456' },
        fillGradientColor:{},
        fillGradientColorGroup:{},

        x1:{ value:100 },
        y1:{ value:0 },
        x2:{ value:0 },
        y2:{ value:100 },
        x3:{ value:100 },
        y3:{ value:100 },

        //
        stroke:{},
        strokeColor:{ visible:false },
        strokeDasharray:{ visible:false },
        strokeWidth:{ visible:false },
        transform:{}
    },
    // 组合图元

    // ////////////////////////////////////////////////////////////////////////////
    // 仪表盘
    om_echart_gauge:{
        itemReason:{},
        uuid:{ visible:false },
        component:{ value:'om_echart_gauge' },
        type:{ value:'仪表盘' },
        left:{ visible:true },
        top:{ visible:true },
        width:{ visible:true },
        height:{ visible:true },
        active:{ visible:false },
        display:{ visible:true },
        zIndex:{ visible:true },
        rotation:{ visible:true },
        opacity:{ visible:true },
        editable:{},

        options:{
            value:{},
            visible:true
        },

        strokeWidth:{ value:0, visible:false },
        transform:{}
    },

    // 实时曲线
    om_echart_line:{
        itemReason:{},
        uuid:{ visible:false },
        component:{ value:'om_echart_line' },
        type:{ value:'实时波形' },
        left:{ visible:true },
        top:{ visible:true },
        width:{ value:200, visible:true },
        height:{ value:100, visible:true },
        active:{ visible:false },
        display:{ visible:true },
        zIndex:{ visible:true },
        rotation:{ visible:true },
        opacity:{ visible:true },
        editable:{},

        options:{
            value:{},
            visible:true
        },

        strokeWidth:{ value:0, visible:false },
        transform:{}
    },

    // 三维曲面
    om_echart_3dbar:{
        itemReason:{},
        uuid:{ visible:false },
        component:{ value:'om_echart_3dbar' },
        type:{ value:'三维曲面图' },
        left:{ visible:true },
        top:{ visible:true },
        width:{ value:200, visible:true },
        height:{ value:200, visible:true },
        active:{ visible:false },
        display:{ visible:true },
        zIndex:{ visible:true },
        rotation:{ visible:true },
        opacity:{ visible:true },
        editable:{},

        options:{
            value:{},
            visible:true
        },

        strokeWidth:{ value:0, visible:false },
        transform:{}
    }
// ////////////////////////////////////////////////////////////////////////////
}

export default {
    propertiesAll,
    metaProperties
}