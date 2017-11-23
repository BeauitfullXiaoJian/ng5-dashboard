/*菜单列表*/
export const Menus = [
    {
        icon: 'fa fa-table fa-fw',
        title: '功能表格',
        children: [
            { title: '标准表格', url: '/table/simple' },
        ]
    },
    {
        icon: 'fa fa-list-alt fa-fw',
        title: '表单',
        children: [
            { title: '基本表单', url: '/form/simple' },
            { title: '多选/单选', url: '/form/checkbox' },
            { title: '下拉选择', url: '/form/select' },
            { title: '日期选择', url: '/form/datepicker' },
        ]
    },
    {
        icon: 'fa fa-folder-open-o fa-fw',
        title: '文件上传',
        children: [
            { title: '图片上传', url: '/upload/simple' },
            { title: '其他上传', url: '/upload/video' },
        ]
    },
    {
        icon: 'fa fa-pencil-square-o fa-fw',
        title: '面板切换',
        children: [
            { title: 'tab切换', url: '/pad/tab' },
            { title: 'collapse折叠', url: '/pad/collapse' },
        ]
    },
    {
        icon: 'fa fa-comments-o fa-fw',
        title: '消息提示',
        children: [
            { title: '简单示例', url: '/message/simple' },
        ]
    },
];
