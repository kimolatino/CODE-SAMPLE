Ext.define("Eagle.store.NotificacaoInformacoes", {
    extend: "Ext.data.Store",
    model: "Eagle.model.NotificacaoInformacao",
    autoLoad: false,
    pageSize: 0,
    proxy: {
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: "json",
            rootProperty: "data"
        },
        type: "ajax",
        url: "php/notificacoes.php?action=listarInformacoes"
    },
    sorters: [{
        direction: "DESC",
        property: "data"
    }]
});