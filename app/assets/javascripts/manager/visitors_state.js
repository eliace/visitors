//= require models/visitors
//= require manager/new_visitor_dialog


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
					cls: 'fa fa-plus-circle before'
				},
				$content: {
					etype: '&text',
					binding: false
				},
				events: {
					'jquery:click': function(e) {
						$context.push('dialog:visitors:new');
					}
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
				binding: function(v) {

					if(v.status == 'visiting') {
						var begin = moment(v.entered_at);
						var end = moment(new Date());
						var d = end.subtract(begin);
						this.opt('text', moment.duration(d).humanize());
					}
				}
			}, {
				width: 160,
				binding: function(v) {

					if(v.status == 'visiting') {

						this.components.set('content', {
							width: 120,
							etype: 'button',
							cls: 'success tiny',
							text: 'Пропуск',
							$content: {
								etype: '&text',
								binding: false
							},
							$icon: {
								etype: 'icon',
								cls: 'fa fa-print after'
							}
						});

					}
					else if(v.status == 'leaving') {

						this.components.set('content', {
							width: 120,
							etype: 'button',
							cls: 'default tiny',
							text: 'Продлить',
							$content: {
								etype: '&text',
								binding: false
							},
							$icon: {
								etype: 'icon',
								cls: 'fa fa-refresh after'
							}
						});
						
					}

				}
			}]
		}

	});

	this.widget('visitors', visitors);

	$context.widget('content').components.set('visitors', visitors);

});	
