sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	
	return Controller.extend("FSD.Manage_FSD_Northwind.controller.BaseController", {
		
		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		
		getModel: function(sName) {
			return this.getOwnerComponent().getModel(sName);
		},
		
		setModel: function(oModel, sName) {
			return this.getOwnerComponent().setModel(oModel, sName);
		},
		
		getResourceBundle: function() {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		}
		
	});
});