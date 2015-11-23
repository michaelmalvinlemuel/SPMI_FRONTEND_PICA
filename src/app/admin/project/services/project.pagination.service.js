(function() {
	'use strict'
	
	angular.module('spmiFrontEnd')
		.factory('ProjectPaginationService', ProjectPaginationService);
	
	function ProjectPaginationService(ProjectService) {
		
		var pagination = {}
		
		pagination.listCtrl = function(vm) {
			
			vm.show = {}
			vm.show.initiation = true;
			vm.show.preparation = true;
			vm.show.progress = true;
			vm.show.grading = true;
			vm.show.complete = true;
			vm.show.danger = true;
			
			vm.showLimit = 10;
			vm.currentPage = 1;
			
			vm.onShowChange = function() {
				
				function success(data) {
					vm.total = data.total;
					vm.currentPage = data.current_page;
					vm.projects = data.data;
				}
				
				function error(data) {
					
				}
				
				var params = [
					vm.showLimit
					, vm.show.initiation
					, vm.show.preparation
					, vm.show.progress
					, vm.show.grading
					, vm.show.complete
					, vm.show.danger
					, vm.currentPage
				]

				vm.service.apply(this, params).then(success, error)
			};
		}
		
		return pagination;
	}
})();