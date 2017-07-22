sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"cloud/apiservicecartolaLetnis/model/models",
	"sap/ui/model/json/JSONModel"
], function(UIComponent, Device, models, JSONModel) {
	"use strict";

	return UIComponent.extend("cloud.apiservicecartolaLetnis.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			var sUrl = "https://servicescartolafc.herokuapp.com/ligaLetnis";
			var oModel = new JSONModel(sUrl);
			this.setModel(oModel); //this neste caso é o component		
			
			this.getRouter().initialize();			
		}
	});
});