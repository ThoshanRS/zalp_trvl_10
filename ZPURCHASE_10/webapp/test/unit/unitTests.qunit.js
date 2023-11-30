/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comibmzpurchase10/btpsap/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
