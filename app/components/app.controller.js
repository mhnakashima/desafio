/*
	Map Controller
*/
angular
	.module('app')
	.controller('AppController', function(AppService, APP_CONFIG, $timeout){
		var vm = this;
		vm.messages = [];
	
		vm.addMessage = function(){
			
			var date = new Date();
			var messageId = date.getFullYear() +''+ date.getMonth() + '' + date.getDay() + '' + date.getHours() + '' + date.getSeconds()
			
			vm.messageObject = {
				id: messageId,
				title: 'Message: ' + messageId,
				date: date,	
				message: vm.message
			}

			vm.messages.push(vm.messageObject);
			AppService.saveData(vm.messages);
			vm.resetMessage();
		}

		vm.resetMessage = function(){
			vm.message = '';
			vm.messageObject = {
				id: 0,
				title: '',
				date: '',
				message: ''
			}
		}

		vm.getMessages = function(){
			if(AppService.getData() != null){
				vm.messages = [];
				vm.messages = AppService.getData();
			}
		}

		vm.resetMessage();
		vm.getMessages(); //verifico se há mensagens salvas
	})	