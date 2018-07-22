const addChannelToUser = context => {
	// Add the channel to the creators channel list
	context.app.service("users").patch(context.params.user._id, {$push: {channels: context.result._id}});
	return context;
};

const removeChannelFromAllUsers = context => {
	const allUsers = [...context.result.users, ...context.result.admins];
	const promises = [];

	allUsers.forEach(user => {
		promises.push(context.app.service("users").patch(user, {
			$pull: {
				channels: context.result._id
			}
		}));
	});

	return Promise.all(promises).then(() => {
		return context;
	}).catch(err => {
		console.error(err);
	});
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
		patch: [],
		remove: [removeChannelFromAllUsers]
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
