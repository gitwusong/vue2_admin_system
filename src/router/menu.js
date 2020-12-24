export const menuList = [
    {
        menuId: '10',
        parentId: '0',
        name: '首页',
        url: 'home',
        icon: 'icon-shouye',
        permission:false,
        list: null
    }, {
        menuId: '20',
        parentId: '0',
        name: '机器人管理',
        url: 'robot',
        icon: 'icon-robot1',
        permission:false,
        list: [
            {
                menuId: '21',
                parentId: '20',
                name: '基本信息',
                url: 'basic_infor',
                icon: 'icon-jibenxinxi',
                permission:false,
                list: null
            }, {
                menuId: '22',
                parentId: '20',
                name: '远程控制',
                url: 'control',
                icon: 'icon-icon',
                permission:false,
                list: null
            }, {
                menuId: '23',
                parentId: '20',
                name: 'demo',
                url: 'demo',
                icon: '',
                permission:false,
                list: [
                    {
                        menuId: '231',
                        parentId: '23',
                        name: 'demo1',
                        url: 'demo1',
                        icon: '',
                        permission:false,
                        list: null
                    }, {
                        menuId: '232',
                        parentId: '23',
                        name: 'demo2',
                        url: 'demo2',
                        icon: '',
                        permission:false,
                        list: null
                    }
                ]
            }
        ]
    }, {
        menuId: '30',
        parentId: '0',
        name: '报表管理',
        url: 'report',
        icon: 'icon-baobiaoguanli',
        permission:false,
        list: null
    }, {
        menuId: '40',
        parentId: '0',
        name: '任务管理',
        url: 'task',
        icon: 'icon-renwu',
        permission:false,
        list: [
            {
                menuId: '41',
                parentId: '40',
                name: '任务节点',
                url: 'node',
                icon: 'icon-binghangrenwujiedian',
                permission:false,
                list: null
            }, {
                menuId: '42',
                parentId: '40',
                name: '任务列表',
                url: 'list',
                icon: 'icon-renwuliebiao',
                permission:false,
                list: null
            }, {
                menuId: '43',
                parentId: '40',
                name: '任务计划',
                url: 'plan',
                icon: 'icon-renwujihua',
                permission:false,
                list: null
            }, {
                menuId: '44',
                parentId: '40',
                name: '任务调度',
                url: 'dispatch',
                icon: 'icon-renwutiaodu',
                permission:false,
                list: null
            }
        ]
    }, {
        menuId: '50',
        parentId: '0',
        name: '巡检管理',
        url: 'xunjian',
        icon: 'icon-xunjian',
        permission:false,
        list: null
    }
]
