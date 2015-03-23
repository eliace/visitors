
Context = Ergo.core.Object.extend({

	defaults: {
		plugins: [Ergo.Observable]		
	},


	_construct: function(o) {
		this.$super(o);

		this._states = {};

		this._children = new Ergo.core.Array();

	},



	// добавление состояния в контекст
	state: function(name, callback) {


	},


	// подсоединяем состояние
	// расширяется пространство контекста
	push: function(name) {

	},


	// отсоединяем состояние
	// сужается пространство контекста
	pop: function(name) {

	},


	// переключаемся в новое состояние
	// пространство контекста изменяется
	change: function(name) {

	}





});



var $context = new Ergo.core.Object({
	plugins: [Ergo.Observable]	
});

$context._states = {};
$context._scope = {widgets: {}};

$context.state = function(name, callback) {
	
	this._states[name] = callback;
	
	
};


$context.change = function(name, params) {
	
	var state = this._states[name];
	
	// 1. выгружаем текущее состояние
	
	
	
	// 2. загружаем новое состояни
	
	// создаем скоуп состояния
	// var scope = {
	// 	// заполняется виджетами состояния (они будут удалены при закрытии скоупа) 
	// 	widgets: {},
	// 	// сериализуемые параметры состояния
	// 	params: params
	// };

	var scope = this._scope;

	Ergo.deep_override(scope, {params: params});
	
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

