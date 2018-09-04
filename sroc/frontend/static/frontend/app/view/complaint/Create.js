Ext.define('frontend.view.complaint.Create', {
    extend: 'Ext.window.Window',
    alias : 'widget.complaintCreate',

    requires: ['Ext.form.*'],

    title : 'Новое обращение',
    layout: 'fit',
    autoShow: true,
    width: 400,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                padding: '5 5 0 5',
                border: false,
                style: 'background-color: #fff;',

                items: [
                    {
                        xtype: 'textfield',
                        name : 'email',
                        fieldLabel: 'Email',
                        invalidText: 'Not a valid time.  Must be in the format "12:34 PM".'
                    },
                    {
                        xtype: 'textfield',
                        name : 'phone',
                        fieldLabel: 'Телефон',
                        invalidText: 'Not a valid time.  Must be in the format "12:34 PM".'
                    },
                    {
                        xtype: 'combobox',
                        fieldLabel: 'Статус',
                        store: 'Status',
                        name: 'status',
                        valueField:'id',
                        displayField:'name',
                        queryMode:'local'
                    },
                    {
                        xtype: 'textareafield',
                        maxRows: 4,
                        name : 'text',
                        fieldLabel: 'Текст обращения'
                    },
                    {
                        xtype: 'textareafield',
                        maxRows: 4,
                        name : 'service_comment',
                        fieldLabel: 'Служебный комментарий'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});
