angular.module('mainApp').directive('navigationLinksDir',['jQuery',function($){
	return {
		restrict : 'A',
		controller: ['$scope', function tabsController($scope) {}],
		link:function(scope, element, attrs){
			var hidepane=true;
			element.on('click',function(){
				
				var $linkPane = $('.links-pane');
				hidepane = !hidepane;
				if(!hidepane){
					$linkPane.css('left','0px');
					element.css('left','8%');
				}else{
					$linkPane.css('left','-7.9%');
					element.css('left','0px');
				}
				
			});
		}
	}
}])