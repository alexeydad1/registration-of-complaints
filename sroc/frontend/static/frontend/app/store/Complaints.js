Ext.define('frontend.store.Complaints', {
    requires: ['Ext.data.*', 'Ext.grid.*'],
    extend: 'Ext.data.Store',
    model: 'frontend.model.Complaint',
    autoLoad: true,
});
