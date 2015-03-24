//= require models/visitors


app.state('manager:visitors', function($context) {

	$context._data['visitors'] = new Ergo.data.Collection({provider: VisitorsProvider});


	var visitors = $.ergo({
	  etype: 'table-grid',
	  cls: 'list-view cell-large',
		data: $context.data('visitors'),
		autoFetch: true,

		$content_autoHeight: false,		// "отпустим" высоту
		$header_autoRender: false,		// не будем рисовать заголовок

		style: {'margin': 24},

		columns: [{
			header: 'Посетитель',
			dataId: 'title',
			binding: 'text'
		}, {
			header: 'Куда',
			dataId: 'department.title',
			binding: 'text'
		}, {
			header: 'Статус',
			dataId: 'status',
			binding: 'text'
		}]
	});

	this.widget('visitors', visitors);

	$context.widget('content').components.set('visitors', visitors);

});	
