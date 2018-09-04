Ext.define('frontend.controller.Complaints', {
    extend: 'Ext.app.Controller',

    stores: [
        'Complaints@frontend.store',
        'Status@frontend.store'
    ],

    models: [
        'Complaint@frontend.model'
    ],

    views: [
        'Edit@frontend.view.complaint',
        'List@frontend.view.complaint'
    ],

    refs: [
        {
            ref: 'complaintsPanel',
            selector: 'panel'
        }
    ],

    init: function() {
        this.control({
            'viewport > complaintList': {
                itemdblclick: this.editComplaint
            },
            'complaintCreate button[action=save]': {
                click: this.createComplaint
            },
            'complaintEdit button[action=save]': {
                click: this.updateComplaint
            }
        });
    },

    createComplaint: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues();
        values['operator'] = 1;

        var complaint = Ext.create('frontend.model.Complaint', values);

        complaint.save({
            callback : function(record, operation) {

                if (operation.wasSuccessful()) {
                    win.close();

                } else {
                    var msg = '';
                    errors_resp = operation.error.response.responseJson;
                    for (key in errors_resp) {
                        msg += key + ': ' + errors_resp[key] + '</br>';
                    };

                    Ext.MessageBox.show({
                        title: 'Ошибка!',
                        msg: msg,
                        icon: Ext.MessageBox.ERROR,
                        buttons: Ext.Msg.OK
                    });
                }
            }
        });
        this.getComplaintsStore().reload();
    },

    editComplaint: function(grid, record) {
        var edit = Ext.create('frontend.view.complaint.Edit').show();

        edit.down('form').loadRecord(record);
    },

    updateComplaint: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();

        this.getComplaintsStore().sync();
    }
});
