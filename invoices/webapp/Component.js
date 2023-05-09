sap.ui.define([
    "sap/ui/core/UIComponent",
    "invoices/model/Models",
    "sap/ui/model/resource/ResourceModel"
    /**
     * @param {type of sap.ui.core.mvc.Controller} UIComponent
     * @param {type of sap.ui.model.resource.ResourceModel} ResourceModel
     */
],

    function (UIComponent, Models, ResourceModel) {

        return UIComponent.extend("invoices.Component", {
            metadata: {
                manifest: "json",
            },
            init: function () {

                //call the init funtion of the parent
                UIComponent.prototype.init.apply(this, arguments);

                // set data model view
                this.setModel(Models.createRecipient());

                // set i18n model on the view
                var i18nmodel = new ResourceModel({ bundleName: "invoices.i18n.i18n" });
                this.setModel(i18nmodel, "i18n");

            }

        });

    });