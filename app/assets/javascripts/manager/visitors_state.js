//= require models/visitors


app.state('manager:visitors', function($context) {

	$context._data['visitors'] = new Ergo.data.Collection({provider: VisitorsProvider});

	var visitors = $.ergo({
		etype: 'box',

		style: {'margin': 24},


		data: $context.data('visitors'),
		autoFetch: true,

		$tools: {
			etype: 'tool-bar',
			items: [{
				etype: 'button',
				state: 'primary',
				text: 'Новый посетитель',
				$icon: {
					etype: 'icon',
					cls: 'fa fa-fw fa-plus-circle before'
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
				binding: 'text'
			}, {
				header: 'Статус',
//				dataId: 'status',
	//			binding: 'text',
				$content: {
					etype: 'text',
//					cls: 'tag',
					style: {'text-transform': 'uppercase'},
					binding: function(v) {
						var tags = {
							'waiting': 'default',
							'visiting': 'success',
							'leaving': 'warning'
						}
						this.opt('text', v.status_text);
						this.states.set(tags[v.status]);
					}
				}
			}, {
				width: 160,
				$content: {
					etype: 'button',
					cls: 'primary tiny',
					text: 'Действие'
				}
			}]
		}
	});

	this.widget('visitors', visitors);

	$context.widget('content').components.set('visitors', visitors);

});	
