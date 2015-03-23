
var $context = new Ergo.core.Object({
	plugins: [Ergo.Observable]	
});

$context._states = {};

$context.state = function(name, callback) {
	
	this._states[name] = callback;
	
	
};


$context.change = function(name, params) {
	
	var state = this._states[name];
	
	// 1. выгружаем текущее состояние
	
	
	
	// 2. загружаем новое состояни
	
	// создаем скоуп состояния
	var scope = {
		// заполняется виджетами состояния (они будут удалены при закрытии скоупа) 
		widgets: {},
		// сериализуемые параметры состояния
		params: params
	};
	
	// заполняем скоуп состояния
	state.call(this, scope);
	
	for(var i in scope.widgets) {
		
		var w = scope.widgets[i];
		
		if(!w._rendered)
			w.render('body');
		
		// var w = $.ergo(scope.widgets[i], null, scope);
// 			
		// w.render('.'+i);
// 			
		// w.bind();
// 			
		// scope.widgets[i] = w;
	}
	
	
	
};


app = $context;

