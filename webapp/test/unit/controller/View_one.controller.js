/*global QUnit*/

sap.ui.define([
	"custes5/zcustes5/controller/View_one.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View_one Controller");

	QUnit.test("I should test the View_one controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
