
app.state('dialog:visitors:new', function($context) {

	var dlg = $.ergo({
	  etype: 'panel',
	  cls: 'modal widget',
	  mixins: ['modal', 'effects'],
	  effects: {
	    show: {type: 'fadeIn', delay: 300}
	  },
	  title: 'Диалог',
	  closeOn: 'outerClick',
	  width: 600,

	  $content: {
	  	$form: {
	  		etype: 'html:form'
	  	}
	  },

	  $footer: {

	  }


	});

	dlg.render('body');
	dlg.open();

});
