const parseMessage = context => {
	let promises = [];

	for (let data of context.result.data) {
		promises.push(context.app.service("users").get(data.user));
	}

	return Promise.all(promises).then(res => {
		context.result.data.map((item, index) => {
			item.username = res[index].username;
		});

		return context;
	}).catch(err => {
		console.error(err);

		return context;
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
		find: [parseMessage],
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
