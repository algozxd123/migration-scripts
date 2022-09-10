const { tableNames, fieldRenaming, specialCases } = require("./renaming_tables");
require("dotenv").config();

const mongo = require('./mongo');

function replaceAll(str,mapObj){
  var re = new RegExp(Object.keys(mapObj).join("|"),"g");

  return str.replace(re, function(matched){
      return mapObj[matched.toLowerCase()];
  });
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
      console.log(`Updating ${colList[col]} fields`);
      await db.collection(colList[col]).updateMany(
        {},
        { $rename: fieldRenaming}
      );
    };

    // Modifing all collection names
    for(oldName in tableNames) {
      console.log(`Updating ${oldName} name`);
      await db.collection(oldName).rename(tableNames[oldName]);
    }

    // Removing unecessary data
    console.log('Removing unecessary data');
    await db.collection('posts').drop();
    await db.collection('components_content_manager_content_builders').drop();
    await db.collection('components_content_manager_contents').drop();
    await db.collection('contents').drop();
    await db.collection('podcasts').updateMany(
      {},
      { $unset: { created: "" }}
    );

    /**
    await db.collection('core_store').deleteMany(
      { key: "model_def_application::tags.tags" }, 
      { $unset : { "created": "" }}
    );
    
    
    let newKey;
    let newValue;
    console.log('Updating core_store documents');
    await db.collection('core_store').find({}).forEach(async function(e,i) {
      console.log(e.key);
      newKey = replaceAll(e.key, fieldRenaming);
      newValue = replaceAll(e.value, fieldRenaming);
      if(e.key.includes('national-case-summaries')) console.log(newValue.includes("categories"));
      newValue = replaceAll(newValue, specialCases);
      if(e.key.includes('national-case-summaries')) console.log(newValue.includes("categories"));
      await db.collection('core_store').updateOne(
        { _id: e._id }, 
        { $set: { key: newKey, value: newValue } }, 
        { upsert: true }
      );
    });
    */

  } finally {
    console.log('done');
  }
};

run();