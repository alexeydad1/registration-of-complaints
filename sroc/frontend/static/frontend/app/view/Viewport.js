Ext.define('frontend.view.Viewport', {
    extend: 'Ext.container.Viewport',

    layout: 'fit',
    items: [{
        xtype: 'complaintList'
    }]
});
