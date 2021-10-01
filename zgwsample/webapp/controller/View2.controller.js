sap.ui.define([
	"com/bnvh/zgwsample/controller/BaseController"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("com.bnvh.zgwsample.controller.View2", {
			onInit: function () {
				this.Router = this.getOwnerComponent().getRouter();
				this.Router.getRoute("detail").attachPatternMatched(this.herculis,this);
			},
			herculis: function(oEvent){
            var sPath = this.extractPath(oEvent);
            this.getView().bindElement(sPath); 
        }
		});
	});
