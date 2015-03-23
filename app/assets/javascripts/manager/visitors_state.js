
app.state('visitors', function($scope) {

	var visitors = $.ergo({
		etype: 'box',
		cls: 'list-box'
	});


	$scope.widgets['content'].components.set('visitors', visitors);

});	
