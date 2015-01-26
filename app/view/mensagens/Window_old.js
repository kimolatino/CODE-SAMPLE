Ext.define("Eagle.view.mensagens.Window", {
    extend: "Ext.panel.Panel",
    alias: "widget.mensagemwindow",
    
    width: 700,
    layout: "fit",
    border: false,
    modal: true,
    
    initComponent: function(){
        Ext.apply(this, {
            fieldDefaults: [{
                labelAlign: "top"
            }],
            items: [{
                xtype: "tabpanel",
                items: [{
                    title: "Ve�culo (Texto)",
                    xtype: "veiculotextoform"
                },{
                    title: "Ve�culo (Pergunta / Resposta)",
                    xtype: "veiculoperguntarespostaform"
                },{
                    title: "Usu�rio (Texto)",
                    xtype: "usuariotextoform"
                }]
            }]
        });
        
        this.callParent(arguments);
    }
});