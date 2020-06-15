sap.ui.define([
	"FSD/Manage_FSD_Northwind/controller/BaseController",
	"sap/ui/model/Filter",
	"sap/m/MessageToast"
], function (BaseController, Filter, MessageToast) {
	"use strict";

	return BaseController.extend("FSD.Manage_FSD_Northwind.controller.Landing", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf FSD.Manage_FSD_Northwind.view.Landing
		 */
		onInit: function () {
			var oView = this.getView();
			this.oSF = oView.byId("searchField");
		},

		onAfterRendering: function () {},

		onSuggest: function (event) {
			var sValue = event.getParameter("suggestValue"),
				aFilters = [];
			if (sValue) {
				aFilters = [
					new Filter([
						new Filter("BusinessPartnerGrouping", function (sText) {
							return (sText || "").toUpperCase().indexOf(sValue.toUpperCase()) > -1;
						}),
						new Filter("BusinessPartnerGrouping_Text", function (sDes) {
							return (sDes || "").toUpperCase().indexOf(sValue.toUpperCase()) > -1;
						})
					], false)
				];
			}

			this.oSF.getBinding("suggestionItems").filter(aFilters);

			this.oSF.getBinding("suggestionItems").attachEventOnce('dataReceived', function () {
				this.oSF.suggest();
			}.bind(this));

		},

		onSearch: function (event) {
			this.getView().byId("productInput").setBusy(true);
			var list = this.getView().byId("idList");
			var query = event.getParameters("selectedItem").selectedItem.getText();
			var binding = list.getBinding("items");
			if (!query) {
				binding.filter([]);
				this.getView().byId("productInput").setBusy(false);
			} else {
				binding.filter([new sap.ui.model.Filter([
					new sap.ui.model.Filter("EmployeeID", sap.ui.model.FilterOperator.EQ, query)
				], false)]);
				this.getView().byId("productInput").setBusy(false);
			}
		},

		onItemPressed: function (oEvent) {
			var oRouter = this.getRouter();
			var sParameter = oEvent.getSource().getInfo();
			oRouter.navTo("ObjectDetail", {
				empID: sParameter
			});
		},

		onPressAdd: function (oEvent) {
			//this.byId("addForm").setVisible(true);
			//jQuery(this.byId("addForm").getId()).show();
			if (oEvent.getSource().getPressed()) {
				this.byId("addForm").setVisible(true);
			} else {
				this.byId("addForm").setVisible(false);
			}
		},

		onPressClear: function () {
			this.byId("productInput").setValue("");
			var list = this.getView().byId("idList");
			var binding = list.getBinding("items");
			binding.filter([]);
		}

	});

});