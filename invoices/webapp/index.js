sap.ui.define([
    "sap/ui/core/ComponentContainer"
],
    /**
     * 
     * @param {type of sap.ui.core.ComponentContainer} ComponentContainer 
     */
    function (ComponentContainer) {
        'use strict';
        new ComponentContainer({
            name: "invoices",
            settings: {
                id: "invoices"
            },
            async: true
        }).placeAt("content");

    });