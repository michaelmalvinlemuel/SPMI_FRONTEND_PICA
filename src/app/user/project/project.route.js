(function () {
	
	'use strict'
	
	angular
		.module('spmiFrontEnd')
		.config(ProjectRouter)
	
	function ProjectRouter($stateProvider){
		$stateProvider
			.state('main.user.project', {
				url: '/project',
				views: {
					'content': {
						templateUrl: 'app/user/project/views/list.html',
						controller: 'UserProjectController as vm'
					}
				},
				resolve: {
					projects: function ( ProjectService ) {
						return ProjectService.user();
					},
				}
			})
	
			.state('main.user.project.detail', {
				url: '/:projectId',
				views: {
					'content@main.user': {
						templateUrl: 'app/user/project/views/detail.html',
						controller: 'DetailUserProjectController',
						controllerAs: 'vm',
					}
				},
				resolve: {
					project: function ($stateParams, ProjectService) {
						return ProjectService.showLast($stateParams.projectId);
					},
				}
			})
			
			.state('main.user.project.detail.form', {
				url: '/:formId',
				views: {
					'content@main.user': {
						templateUrl: 'app/user/project/views/upload.html',
						controller: 'FormDetailUserProjectController as vm'
					}
				},
				resolve: {
					form: function($stateParams, ProjectService) {
						return ProjectService.form($stateParams.formId);
					},
					project: function($stateParams, ProjectService) {
						return ProjectService.leader($stateParams.projectId)
					},
				},
			})
	}

})();