/*
	Map Services
*/

angular
	.module('app')
	.factory('AppService', function($http, $q,  $sce, APP_CONFIG){

		var SAVE_DATA = "ITEM_DATA_SAVE";

		var saveData = function(data){
			window.localStorage.setItem(SAVE_DATA, JSON.stringify(data));
		}

		var getData = function(){
			var result = JSON.parse(window.localStorage.getItem(SAVE_DATA));

			return result;
		}

		return {
			saveData: saveData,
			getData: getData
		}
	})