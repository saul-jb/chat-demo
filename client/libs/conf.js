import defaultConf from "@/../config/default.json";
import productionConf from "@/../config/production.json";

let conf = {...defaultConf};

// When we build for production, merge production conf
if (process.env.NODE_ENV === "production") {
	conf = {...productionConf, ...conf};
}

export default conf;
