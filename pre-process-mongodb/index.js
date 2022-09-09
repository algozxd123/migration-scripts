const tableNames = require("./tableNames");
require("dotenv").config();

const mongo = require('./mongo');

async function getSchema(db, collection){
  let mr = db.runCommand({
    "mapreduce" : collection,
    "map" : function() {
      for (var key in this) { emit(key, null); }
    },
    "reduce" : function(key, stuff) { return null; }, 
    "out": collection + "_keys"
  });

  let result = db[mr.result].distinct("_id");

  return result;
}

async function run() {
  try {
    await mongo.connect();

    const db = mongo.db(process.env.DB);
    const colListObj = await db.listCollections().toArray();
    const colList = colListObj.map((c) => {
      return c.name;
    });
    
    // Modifing all collection field names
    for(col in colList) {
      await db.collection(colList[col]).updateMany(
        {},
        { $rename: tableNames}
      );
    };

    // Modifing all collection names
    for(oldName in tableNames) {
      await db.collection(oldName).rename(tableNames[oldName]);
    }

    await db.collection('posts').drop();
    await db.collection('components_content_manager_content_builders').drop();
    await db.collection('components_content_manager_contents').drop();
    await db.collection('contents').drop();
    await db.collection('podcasts').updateMany(
      {},
      { $unset: { created: "" }}
    );

  } finally {
    console.log('done');
  }
};

run();