Ext.define("Eagle.view.situacoes.Window", {
    extend: "Ext.window.Window",
    alias: "widget.situacoes_window",
    
    requires: [
        "Eagle.view.situacoes.Form"
    ],
    
    title: "Manuten��o de Situa��es de Ve�culo",
    width: 400,
    border: false,
    modal: true,
    layout: "fit",
    
    initComponent: function(){
        Ext.apply(this, {
            buttons: [{
                text: "Salvar",
                action: "salvar"
            },{
                text: "Cancelar",
                action: "cancelar"
            }],
            items: [{
                xtype: "situacoes_form"
            }]
        });
        
        this.callParent(arguments);
    }
});