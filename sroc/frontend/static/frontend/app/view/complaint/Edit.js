Ext.define('frontend.view.complaint.Edit', {
    extend: 'Ext.window.Window',
    alias : 'widget.complaintEdit',

    requires: ['Ext.form.Panel'],

    title : 'Редактирование обращения',
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
                        fieldLabel: 'Email'
                    },
                    {
                        xtype: 'textfield',
                        name : 'phone',
                        fieldLabel: 'Телефон'
                    },
                    {
                        xtype: 'textfield',
                        name : 'status',
                        fieldLabel: 'Статус'
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
