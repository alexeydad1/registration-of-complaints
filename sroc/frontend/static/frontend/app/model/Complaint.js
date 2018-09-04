Ext.define('frontend.model.Complaint', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.reader.Json'
    ],
    idProperty: 'id',
    fields: ['id','created','operator', 'email', 'phone', 'status', 'text', 'service_comment'],
    pageSize: 15,
    proxy: {
        type: 'rest',
        url: '/api/complaints/',

        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'count',
            idProperty: 'id'
        },
        writer: {
            type: 'json',
            idProperty: 'id'
        }
    }

});