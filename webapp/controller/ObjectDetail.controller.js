sap.ui.define([
	"FSD/Manage_FSD_Northwind/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("FSD.Manage_FSD_Northwind.controller.ObjectDetail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf FSD.Manage_FSD_Northwind.view.ObjectDetail
		 */
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("ObjectDetail").attachPatternMatched(this._onObjectMatched, this);
		},

		_onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				path: "/Employees(" + oEvent.getParameter("arguments").empID + ")"
			});
		},

		onEdit: function () {
			this.getView().byId("one").destroyBlocks();
			var oFragment = sap.ui.xmlfragment("FSD.Manage_FSD_Northwind.view.Fragments.Change", this);
			this.getView().byId("one").addBlock(oFragment);

		},

		onDisplay: function () {
			this.getView().byId("one").destroyBlocks();
			var oFragment = sap.ui.xmlfragment("FSD.Manage_FSD_Northwind.view.Fragments.Display", this);
			this.getView().byId("one").addBlock(oFragment);
		},

		onNavBack: function () {
			this.getRouter().navTo("Landing");
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf FSD.Manage_FSD_Northwind.view.ObjectDetail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf FSD.Manage_FSD_Northwind.view.ObjectDetail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf FSD.Manage_FSD_Northwind.view.ObjectDetail
		 */
		//	onExit: function() {
		//
		//	}

	});

});