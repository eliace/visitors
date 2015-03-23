//= require manager/visitors_state



app.state('manager', function($context) {
	
	var self = this;
	
	var timer = setInterval(function() {
		
		self.events.fire('clock');
				
	}, 15000);
	
	
	
	
	var navigation = $.ergo({
		
		etype: 'html:nav',
		title: 'Система контроля посетителей',
		style: {'width': '100%', 'border-bottom': '1px solid #e7e7e7'},
		layout: 'column',
		$header: {
			etype: 'box',
			wrapper: {
				width: '1%'
			},
			$content: {
				etype: 'link',
				text: 'Система контроля посетителей',
				cls: 'nav-title'
			}
		},
		$content: {
			etype: 'box',
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
			wrapper: {
				width: '98%'
			}
		},
		$user: {
			etype: 'menu-bar',
			cls: 'user',
//			state: 'right',
			width: 100,			
			wrapper: {
				width: '1%'
			},
			items: [{
				cls: 'username',
//				text: 'Username',
				etype: 'text',
				data: this.user,
				dataId: 'username',
				style: {'white-space': 'nowrap'}
			}]
		}						
		
	}, null, this);
	
	
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
					'jquery:click': 'menuItem'
				}				
			},
			items: [{
				text: 'Посетители',
				name: 'visitors'
			}, {
				text: 'Расписание',
				name: 'schedule'
			}, {
				text: 'Организации',
				name: 'departments'
			}]
		},


		onMenuItem: function(e) {
			this.opt('index', e.target.opt('name'));
		},


		set: {
			'index': function(v) {

				// выбираем пункт меню
				this.content.selection.set(v);

				// устанавливаем состояние
				self.change(v);

			}
		}

	});
	
	
	var content = $.ergo({
		etype: 'box'
	});



	
	$context.widgets['navigation'] = navigation;
	$context.widgets['menu'] = menu;
	$context.widgets['content'] = content;
	
	
	self.events.fire('clock');


	menu.opt('index', $context.params['page']);
	
});
