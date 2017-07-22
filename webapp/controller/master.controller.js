sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function(Controller, UIComponent) {
	"use strict";

	return Controller.extend("cloud.apiservicecartolaLetnis.controller.master", {
		
		onInit: function() {
			this._oRouter = UIComponent.getRouterFor(this);
		},		
		
		onDetailPress: function(evt){

			// retorna o item que foi clicado
			var oListItem = evt.getSource();
			// retorna as informações do item clicado:
			var oContext = oListItem.getBindingContext();
			var oTime = oContext.getObject();	
			var sId = oTime.id;
			this._oRouter.navTo('detalhes', {
				time: sId
			});			
		}
		
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf cloud.apiservicecartolaLetnis.view.master
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf cloud.apiservicecartolaLetnis.view.master
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf cloud.apiservicecartolaLetnis.view.master
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf cloud.apiservicecartolaLetnis.view.master
		 */
		//	onExit: function() {
		//
		//	}

	});

});