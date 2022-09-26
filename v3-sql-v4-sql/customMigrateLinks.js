const {
  dbV3,
  dbV4
} = require("./config/database");

const link_tables = require("./link_tables");

async function customMigrate() {
  for(table in link_tables){
    const items = await dbV3(table);
  
    const newItems = items.map((item) => {
      let i = JSON.parse(JSON.stringify(item).replace(new RegExp('-', 'g'), '_'));
      if(i["created_by"]) {
        i["created_by_id"] = i["created_by"];
        delete i["created_by"];
      }
      if(i["updated_by"]) {
        i["updated_by_id"] = i["updated_by"];
        delete i["updated_by"];
      }
      delete i["id"];
      return i;
    });

    await dbV4(link_tables[table]).insert(newItems);
  }
};

module.exports = {
  customMigrate
};