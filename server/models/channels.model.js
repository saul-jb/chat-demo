// channels-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
	const mongooseClient = app.get("mongooseClient");
	const { Schema } = mongooseClient;
	const channels = new Schema({
		title: { type: String, required: true, unique: true, maxlength: 10 },
		admins: [{ type: Schema.Types.ObjectId, ref: "users", required: true }],
		users: [{ type: Schema.Types.ObjectId, ref: "users" }]
	}, {
		timestamps: true
	});

	return mongooseClient.model("channels", channels);
};
