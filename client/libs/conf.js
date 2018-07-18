import defaultConf from "@/../config/default.json";
import productionConf from "@/../config/production.json";

let conf = {...defaultConf};

// When we build for production, merge production conf
if (process.env.NODE_ENV === "production") {
	conf = {...conf, ...productionConf};
}

export default conf;
