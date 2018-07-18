const app = require("./app");
const port = app.get("port");
const server = app.listen(port);

process.on("unhandledRejection", (reason, p) =>
	console.error(`Unhandled Rejection at: Promise ${p}, reason: ${reason}`)
);

server.on("listening", () => {
	console.log(`Feathers application started on http://${app.get("host")}:${port}`);
});
