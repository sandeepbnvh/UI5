sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict';
     return Controller.extend("com.bnvh.zgwsample.controller.BaseController",{
        extractPath:function(oEvent){
            	var ProductID = oEvent.getParameter("arguments")
				var PId= Object.values(ProductID)
                return '/'+ PId;
        }
     });
     
});