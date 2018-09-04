Ext.define('frontend.view.complaint.List' ,{
    requires: ['frontend.view.complaint.Create'],
    extend: 'Ext.grid.Panel',
    alias : 'widget.complaintList',

    title: 'Список обращений',
    store: 'Complaints',
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'Complaints',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true
    },
    {
        xtype: 'toolbar',
        items: [{
            text: ' + Add',
            handler: function() {
                Ext.create('frontend.view.complaint.Create').show();
            }
        }],
    }],

    columns: [
            {header: 'Id', dataIndex: 'id', flex: 1},
            {header: 'Дата обращения', dataIndex: 'created', flex: 1},
            {header: 'Оператор', dataIndex: 'operator', flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1},
            {header: 'Телефон', dataIndex: 'phone', flex: 1},
            {header: 'Статус', dataIndex: 'status', flex: 1},
            {header: 'Текст обращения', dataIndex: 'text', flex: 2},
            {header: 'Служебное примечание', dataIndex: 'service_comment', flex: 2}
        ]
});

