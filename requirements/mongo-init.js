const { MongoClient } = require("mongodb");

async function main() {
  const client = new MongoClient("mongodb://localhost:27017");

  try {
    await client.connect();
    const db = await client.db("shac-database");
    await db.createCollection("curriculum");
    await db.createCollection("log");
    await db.createCollection("student-record");
    await db.createCollection("subject");
    await db.createCollection("user");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main().catch(console.error);