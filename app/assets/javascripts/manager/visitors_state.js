
app.state('visitors', function($context) {

	var visitors = $.ergo({
		etype: 'box',
		cls: 'list-box'
	});

	this.widget('visitors', visitors);

	$context.widget('content').components.set('visitors', visitors);

});	
