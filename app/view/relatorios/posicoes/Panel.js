Ext.define("Eagle.view.relatorios.posicoes.Panel", {
    extend: "Ext.panel.Panel",
    alias: "widget.relatorios_posicoes_panel",
    border: false,
    autoScroll: false,
    layout: "border",
    title: "Posi��es",
    icon: "resources/images/16/ios7-navigate-outline.png",
    initComponent: function(){
        Ext.apply(this, {
            items: [{
                buttons: [{
                    action: "filtrar",
                    text: "Filtrar"
                }],
                collapsible: true,
                border: false,
                items: [{
                    border: false,
                    flex: 1,
                    rootVisible: false,
                    scroll: "vertical",
                    store: "VeiculosTree",
                    xtype: "treepanel"
                },{
                    items: [{
                        allowBlank: false,
                        fieldLabel: "Data In�cio",
                        name: "dataIni",
                        value: new Date(),
                        xtype: "datefield"
                    },{
                        allowBlank: false,
                        fieldLabel: "Data Fim",
                        name: "dataFim",
                        value: new Date(),
                        xtype: "datefield"
                    }],
                    layout: "form",
                    xtype: "form",
                    border: false
                }],
                layout: {
                    type: "vbox",
                    align: "stretch"
                },
                resizable: true,
                region: "west",
                title: "Filtro",
                width: "25%",
                xtype: "panel"
            },{
                defaultType: "panel",
                layout: "fit",
                region: "center",
                autoScroll: true,
                border: false,
                tbar: [
                    "->",
                    {
                        tooltip:'Imprimir relat�rio',
                        icon: 'resources/images/16/printer1.png',
                        action: 'exportaPrint'
                    },{
                        tooltip:'Exportar .xls',
                        icon: 'resources/images/16/xls.png',
                        action: 'exportaXls'
                    },{
                        tooltip:'Exportar .pdf',
                        icon: 'resources/images/16/pdf.png',
                        action: 'exportaPdf'
                    }
                ]
            }]
        });
        
        this.callParent(arguments);
    }
});