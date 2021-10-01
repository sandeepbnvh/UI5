sap.ui.define([
	"com/bnvh/zgwsample/controller/BaseController"
],
	function (Controller) {
		"use strict";

		return Controller.extend("com.bnvh.zgwsample.controller.View1", {
			onInit: function () {
				this.Router = this.getOwnerComponent().getRouter();
				this.Router.getRoute("detail").attachPatternMatched(this.herculis, this);
			},
			onProductSelect:function(oEvent){
				var onSelect= oEvent.getParameter("listItem");
				this.Router.navTo("detail",{
					ProductId: onSelect.getBindingContextPath().split("/")[1]
				});
			},
			herculis: function(oEvent){
			
				//var fruitId = oEvent.getParameter("arguments").fruitId;
			
				var sPath = this.extractPath(oEvent);
				var oList = this.getView().byId("idLST");
				var element = {};
				if(oList.getItems().length > 0){
					for (let i = 0; i < oList.getItems().length; i++) {
						element = oList.getItems()[i];
						if (element.getBindingContextPath() === sPath){
							oList.setSelectedItem(element);
							break;
						}	
					}
					// if(element){
					//     oList.setSelectedItem(element);
					// }
				}	
			}
		});
	});
