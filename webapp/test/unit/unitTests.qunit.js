/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/sap/demoUDV2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});