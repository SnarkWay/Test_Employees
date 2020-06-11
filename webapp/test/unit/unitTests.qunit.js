/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Emp_V4/Emp_V4/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});