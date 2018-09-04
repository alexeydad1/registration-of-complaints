Ext.define('frontend.store.Status', {
    requires: ['Ext.data.*', 'Ext.grid.*'],
    extend: 'Ext.data.Store',
    model: 'frontend.model.Complaint',

    proxy: {
        type: 'rest',
        url: '/api/status/',

        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'count',
            idProperty: 'id'
        },

    },
    autoLoad: true
});
