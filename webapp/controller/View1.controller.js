sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("cloud.apiservicecartolaLetnis.controller.View1", {

		onAfterDetailNavigate: function(oEvent) {
			oEvent.getSource().hideMaster(); //Hide
		}

	});
});