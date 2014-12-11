var HomeView = function(store) {

	this.initialize = function() {
		// Define a wrapper for the view. The div wrapper is used to attach events
		this.el = $('<div/>');
		this.el.on('keyup', '.search-key', this.findByName)
	}

	this.initialize();

	render: function() {
        this.el.html(HomeView.template());
        return this;
    },

    findByName: function() {
        store.findByName($('.search-key').val(), function(employees) {
           $('.employee-list').html(self.employeeLiTpl(employees));
        });
    },

}

HomeView.template = Handlebars.compile($('#home-tpl').html());
HomeView.liTemplate = Handlebars.compile($('#employee-li-tpl').html());
