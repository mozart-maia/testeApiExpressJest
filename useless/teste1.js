const { getFlagValue } = require("./master.js");

console.log(`${getFlagValue("--name")} ${getFlagValue("--greeting")}`);
