require("dotenv").config();

const { migrate } = require("./migrate");
const { customMigrate } = require("./customMigrateLinks");

async function f() {
  await migrate();
  await customMigrate();

  process.exit();
}

f();
