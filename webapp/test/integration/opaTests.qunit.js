/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"FSD/Manage_FSD_Northwind/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});