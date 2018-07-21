const addUsername = context => {
	context.data.username = context.params.user.username;
	return context;
};

module.exports = {
	before: {
		all: [],
		find: [],
		get: [],
		create: [addUsername],
		update: [],
		patch: [],
		remove: []
	},

	after: {
		all: [],
		find: [],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: []
	},

	error: {
		all: [],
		find: [],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: []
	}
};
