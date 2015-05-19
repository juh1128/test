
Router.configure({
	loadingTemplate: 'loading'
});

Router.route('/',{
	template:'logo'
});

Router.route('/title', {
	template: 'title',

	waitOn: function () {
		return [Meteor.subscribe('noticeSlideImages')];
	}

});

Router.route('/login', {
	template: 'login'
});

Router.route('/pororoTown',{
	template:'pororoTown'
});

Router.route('/tayoTown',{
	template:'tayoTown'
});
