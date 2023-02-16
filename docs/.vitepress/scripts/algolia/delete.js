const algoliasearch = require("algoliasearch");

const client = algoliasearch(process.env.APPLICATION_ID, process.env.API_KEY);

const indexName = "oer";
const index = client.initIndex(indexName);
index.clearObjects();
console.log(`Deleted records of index ${indexName}`);
