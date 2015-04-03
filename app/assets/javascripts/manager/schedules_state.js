
SchedulesProvider = new Ergo.data.AjaxProvider('schedules');




app.state('manager:schedules', function($context) {

	$context._data['schedules'] = new Ergo.data.Collection({provider: SchedulesProvider});


	var schedules = $.ergo({
		etype: 'box',

		data: $context.data('schedules'),
		autoFetch: true,

		style: {'margin': 24},

		$tools: {
			etype: 'tool-bar',
			items: [{
				etype: 'button',
				state: 'primary',
				text: 'Новый посетитель',
				$icon: {
					etype: 'icon',
					cls: 'fa fa-plus-circle before'
				},
				$content: {
					etype: '&text',
					binding: false
				}
			}]
		},

		$content: {

		  etype: 'table-grid',
		  cls: 'list-view cell-large',

		  style: {'margin-top': 24},

			$content_autoHeight: false,		// "отпустим" высоту
			$header_autoRender: false,		// не будем рисовать заголовок

			columns: [{
				header: 'Посетитель',
				dataId: 'title',
				binding: 'text'
			}, {
				header: 'Куда',
				dataId: 'department.title',
				binding: 'text',
				$content: {
					etype: 'link'
				}
			}, {
				header: 'Дата посещения',
				dataId: 'visit_begin',
				binding: 'text',
				format: function(v) {
					return moment(v).format('DD MMM YYYY');
				}
			}, {
				header: 'Время посещения',
	//			dataId: 'visit_end',
				binding: 'text',
				format: function(v) {
					var t1 = moment(v.visit_begin).format('HH:mm');
					var t2 = moment(v.visit_end).format('HH:mm');
					return t1 + ' - ' + t2;
				}
			}]
		}
	});

	this.widget('schedules', schedules);

	$context.widget('content').components.set('schedules', schedules);

});	
