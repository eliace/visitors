

Scope = Ergo.core.Object.extend({

	_construct: function(o) {
		this._super(o);

		this._widgets = {};


		this._context = null;
	},




	// получение виджета из пространства контекста
	widget: function(key, w) {

		if(arguments.length == 1) {
			return this._widgets[key];
		}
		else if(arguments.length == 2) {
			this._widgets[key] = w;
		}


	},


	params: function() {
		return this._context._params;
	},

	context: function() {
		return this._context;
	}


});





Context = Ergo.core.Object.extend({

	defaults: {
		plugins: [Ergo.Observable]		
	},


	_construct: function(o) {
		this._super(o);

		this._states = {};

		this._scopes = {};

		this._data = {};

	},



	widget: function(key) {

		for(var i in this._scopes) {
			var w = this._scopes[i].widget(key);
			if(w) return w;
		}

	},


	data: function(key) {
		return this._data[key];
	},



	// подсоединяем состояние
	// расширяется пространство контекста
	push: function(name) {

		var name_a = name.split(':');
		var group = (name_a.length == 1) ? null : name_a[0];

		// если присутствует скоуп с такой же группой, то закрываем его
		for(var i in this._scopes) {
			if(i.indexOf(group+':') != -1) {
				this.pop(i);
			}
		}



		// создаем контекст
		var scope = new Scope();
		// делаем параметры общими
		scope._context = this;

		this._scopes[name] = scope;

		this._states[name].call(scope, this);

		for(var i in scope._widgets) {
			
			var w = scope._widgets[i];
			
			if(!w._rendered)
				w.render('body');
		}


	},


	// отсоединяем состояние
	// сужается пространство контекста
	pop: function(name) {

		var scope = this._scopes[name];

		for(var i in scope._widgets) {
			
			var w = scope._widgets[i];

			w._destroy();
			
		}


	},




	// добавление состояния в контекст
	state: function(name, callback) {

		this._states[name] = callback;

	},


	// переключаемся в новое состояние
	// пространство контекста изменяется
	change: function(name, params, data) {

		var ctx = new Context();
		ctx.params = params;
		ctx.data = data;
		ctx._scope = this;

		ctx.push(name);


		this._context = ctx;
	},





});


/*
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
*/

app = new Context();

