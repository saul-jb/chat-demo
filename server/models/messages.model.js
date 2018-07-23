// messages-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
	const mongooseClient = app.get("mongooseClient");
	const { Schema } = mongooseClient;
	const messages = new Schema({
		text: { type: String, required: true, maxlength: 250 },
		username: { type: String, required: true },
		user: { type: Schema.Types.ObjectId, ref: "users", required: true },
		channel: { type: Schema.Types.ObjectId, ref: "channels", required: true }
	}, {
		timestamps: true
	});

	return mongooseClient.model("messages", messages);
};
