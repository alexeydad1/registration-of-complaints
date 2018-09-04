Ext.define('frontend.model.Status', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.reader.Json'
    ],
    idProperty: 'id',
    fields: ['id','name'],
    pageSize: 15,

});