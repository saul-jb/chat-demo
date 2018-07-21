const addChannelToUser = context => {
	// Add the channel to the creators channel list
	context.app.service("users").patch(context.params.user._id, {$push: {channels: context.result._id}});
	return context;
};

module.exports = {
	before: {
		all: [],
		find: [],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: []
	},

	after: {
		all: [],
		find: [],
		get: [],
		create: [addChannelToUser],
		update: [],
		patch: [addChannelToUser],
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
