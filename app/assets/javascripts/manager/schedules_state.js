
SchedulesProvider = new Ergo.data.AjaxProvider('schedules');




app.state('manager:schedules', function($context) {

	$context._data['schedules'] = new Ergo.data.Collection({provider: SchedulesProvider});


	var schedules = $.ergo({
	  etype: 'table-grid',
	  cls: 'list-view cell-large',
		data: $context.data('schedules'),
		autoFetch: true,

		$content_autoHeight: false,		// "отпустим" высоту
		$header_autoRender: false,		// не будем рисовать заголовок

		style: {'margin': 24},

		columns: [{
			header: 'Посетитель',
			dataId: 'title',
			binding: 'text'
		}, {
			header: 'Дата посещения',
			dataId: 'visit_begin',
			binding: 'text'
		}, {
			header: 'Время посещения',
			dataId: 'visit_end',
			binding: 'text'
		}]
	});

	this.widget('schedules', schedules);

	$context.widget('content').components.set('schedules', schedules);

});	
