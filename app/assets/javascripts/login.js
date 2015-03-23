



$(document).ready(function(){
	
	
	var login = $.ergo({
		
		etype: 'panel',
		
		id: 'login-form',
		
		cls: 'paper widget dark',
		
		title: 'Вход в систему',
		
		width: 300,
		
		layout: 'center',
		
		$content: {
		
			etype: 'html:form',
			
			style: {'padding': 16, 'text-align': 'center'},
			
			layout: 'stack',
			
			items: [{
				etype: 'text-box',
				name: 'username',
				placeholder: 'Логин',
				$addon: {
					cls: 'addon',
					$content: {
						etype: 'icon',
						cls: 'fa fa-fw fa-user'					
					}
				},
			}, {
				etype: 'text-box',
				name: 'password',
				placeholder: 'Пароль',
				$addon: {
					cls: 'addon',
					$content: {
						etype: 'icon',
						cls: 'fa fa-fw fa-lock'					
					}
				},
				$content_type: 'password'				
			}],
			
			$submit: {
				etype: 'html:input',
				weight: 10,
				type: 'submit',
				cls: 'btn primary',
				value: 'Войти'
			}
		
		}
	});
	
	
	login.render('body');
	
//	login.layout.update();
	
	
});
