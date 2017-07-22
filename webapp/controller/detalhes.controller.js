sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function(Controller, UIComponent, JSONModel) {
	"use strict";

	return Controller.extend("cloud.apiservicecartolaLetnis.controller.detalhes", {

		onInit: function() {
			//aqui o this aponta para o controller
			this._oList = this.byId("jogadores");

			// @type sap.m.routing.Router
			this._oRouter = UIComponent.getRouterFor(this);

			//amarro uma função na rota, assim sempre que uma rota 
			//for chamada, será chamada a função que está amarrada ao evento
			//passo o this na chamada da função para conseguir recuperar o this(controller)
			this._oRouter.attachRoutePatternMatched(this._oRouteMatched, this);

		},

		_oRouteMatched: function(evt) {
			//aqui o this não aponta para controller e sim para router

			var oParameters = evt.getParameters();
			var oArguments = oParameters.arguments;
			//category_id é o nome do parâmetro da rota
			// var sId = oArguments.time_id;
			var time = oArguments.time;

			var oComponent = this.getOwnerComponent();
			var model = oComponent.getModel();
			var oList = this.byId('jogadores');
			if (model.oData.times) {
				var times = model.oData.times[time];

				var oModel = new JSONModel(times);
				//oList.setModel(oModel);
				this.getView().setModel(oModel); //this neste caso é o component
			}
			//faz o bind na view inteira:
			// var oView = this.getView();
			// oView.bindElement(`/Categories(${sId})`, {

			// });

			// //Preenchendo a lista pelo Controller:
			// this._oList.bindItems({
			// 	path: `/Categories(${sCategoryId})/Products`,
			// 	template: new sap.m.StandardListItem({
			// 		title: '{Name}'
			// 	})
			// });

		},
		
		onPressGoBack: function(evt){
			//poderia passar também apenas o this
			var oRouter = UIComponent.getRouterFor(this.getView());
			
			//r2 é o nome da rota
			oRouter.navTo('default');			
		}

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf cloud.apiservicecartolaLetnis.view.detalhes
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf cloud.apiservicecartolaLetnis.view.detalhes
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf cloud.apiservicecartolaLetnis.view.detalhes
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf cloud.apiservicecartolaLetnis.view.detalhes
		 */
		//	onExit: function() {
		//
		//	}

	});

});