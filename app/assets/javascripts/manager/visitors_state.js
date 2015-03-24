//= require models/visitors


app.state('visitors', function($context) {

	$context._data['visitors'] = new Ergo.data.Collection({provider: VisitorsProvider});


	var visitors = $.ergo({
	  etype: 'table-grid',
	  cls: 'list-view cell-large',
		// etype: 'box',
		// cls: 'list-box',
		data: $context.data('visitors'),
		autoFetch: true,

		$content_autoHeight: false,
		$header_autoRender: false,

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
		// dynamic: true,
		// defaultItem: {
		// 	etype: 'item-box',
		// 	layout: 'hbox',
		// 	items: [{
  //       binding: 'text',
  //       dataId: 'title',
  //       width: 140				
		// 	}, {
  //       binding: 'text',
  //       dataId: 'department.title',
  //       width: 140				
		// 	}, {
  //       binding: 'text',
  //       dataId: 'status',
  //       width: 140				
		// 	}]
		// }
	});

	this.widget('visitors', visitors);

	$context.widget('content').components.set('visitors', visitors);

});	
