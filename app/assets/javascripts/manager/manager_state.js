//= require manager/visitors_state
//= require manager/schedules_state



app.state('manager', function($context) {
	

	var timer = setInterval(function() {
		
		$context.events.fire('clock');
				
	}, 15000);
	
	
	
	
	var navigation = $.ergo({
		
		etype: 'navigation',
		title: 'Система контроля посетителей',
		style: {/*'width': '100%',*/ 'border-bottom': '1px solid #e7e7e7'},
//		layout: 'column',
		cls: 'nav-main',
//		layout: 'fluid',
		// $header: {
		// 	etype: 'box',
		// 	// wrapper: {
		// 	// 	width: '1%'
		// 	// },
		// 	$content: {
		// 		etype: 'link',
		// 		text: 'Система контроля посетителей',
		// 		cls: 'nav-title'
		// 	}
		// },
		$content: {
//			etype: 'box',
			$clock: {
				cls: 'nav-clock',
				
				events: {
					'ctx:clock': function() {
						var date = new Date();
						var hours = date.getHours();
						var minutes = date.getMinutes();
						if(minutes < 10) minutes = '0'+minutes;
						
						this.hours.opt('text', hours);
						this.minutes.opt('text', minutes);
//						this.opt('text', Ergo.format('%s:%s', hours, minutes));
					}
				},
				
				$hours: {
					etype: '&text'
				},
				$ticker: {
					etype: 'text',
					cls: 'clock-ticker',
					text: ':'
				},
				$minutes: {
					etype: '&text'
				}
				
			},
			$user: {
				etype: 'menu-bar',
				cls: 'user right',
	//			state: 'right',
//				width: 100,			
				// wrapper: {
				// 	width: '1%'
				// },
				items: [{
					cls: 'username',
	//				text: 'Username',
					etype: 'text',
					data: $context.data('user'),
					dataId: 'username',
					style: {'white-space': 'nowrap'}
				}]
			}						
			// wrapper: {
			// 	width: '98%'
			// }
		},
		
	}, null, $context);
	
	
	var menu = $.ergo({
		etype: 'box',
		style: {'padding': '8px 0', 'text-align': 'center'},
		$content: {
			etype: 'list',
			cls: 'nav-menu',
			style: {'display': 'inline-block'},
			mixins: ['selectable'],
			defaultItem: {
				$content: {
					etype: 'link',
					$content: {
						etype: '&text',
						format: '#{title}'
					}
				},
				actions: {
					'jquery:click': 'menuClick'
				}				
			},
			items: [{
				text: 'Посетители',
				name: 'manager:visitors'
			}, {
				text: 'Расписание',
				name: 'manager:schedules'
			}, {
				text: 'Организации',
				name: 'manager:departments'
			}]
		},


		onMenuClick: function(e) {
			this.opt('index', e.target.opt('name'));
		},


		set: {
			'index': function(v) {

				// выбираем пункт меню
				this.content.selection.set(v);

				// изменяем зависимое состояние
				$context.push(v);

			}
		}

	});
	
	
	var content = $.ergo({
		etype: 'box'
	});



	
	this.widget('navigation', navigation);
	this.widget('menu', menu);
	this.widget('content', content);
	
	
	$context.events.fire('clock');

	// восстанавливаем состояние
	menu.opt('index', 'manager:' + $context.params['page']);
	
});
