sap.ui.define([
    "sap/ui/model/json/JSONModel"
],
    /**
     * 
    * @param {type og sap.ui.model.json.JSONModel} JSonModel 
    */
    function (JSONModel) {
        'use strict';
    
        return {
            createRecipient : function()
            {
                var oData = {
                    recipient : {
                        name : "World"
                    }
    
                 };

                 return new JSONModel(oData);
            }

        }
    
    });