sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",

],
    /**
     * 
     * @param {type of sap.ui.core.mvc.Controller} Controller
     * @param {type of sap.m.MessageToast} MessageToast
    */
    function (Controller, MessageToast) {
        'use strict';

        return Controller.extend("invoices.controller.App", {
            onInit: function() {

            },


            onShowHello: function () {
                // read text from i18n
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name") 
                
                var sMsg = oBundle.getText("helloMsg",[sRecipient])

                MessageToast.show(sMsg);
            }
        });
    });