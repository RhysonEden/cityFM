const bcrypt = require("bcrypt");
const SALT_COUNT = 10;
const {
  client,
  searchPartsNumber,
  createPart,
  createUser,
  getUsersByID,
  getAllCompanies,
  getAdminByUsername,
  getUserByUsername,
} = require("./index");

async function createTables() {
  try {
    console.log("Creating Tables");
    await client.query(`
        CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          username varchar UNIQUE NOT NULL,
          password varchar NOT NULL,
          email varchar NOT NULL,
          admin varchar NOT NULL
          );
      `);
  } catch (error) {
    throw error;
  }
}

// CREATE TABLE parts (
//   id SERIAL PRIMARY KEY,
//   number varchar NOT NULL,
//   descr varchar NOT NULL,
//   price varchar NOT NULL
//   );

async function dropTables() {
  try {
    console.log("Starting to drop tables...");
    await client.query(`
      DROP TABLE IF EXISTS users;
      `);
    //      DROP TABLE IF EXISTS parts;
    ("Finished dropping tables!");
  } catch (error) {
    console.error("Error dropping tables!");
    throw error;
  }
}

// await createPart({
//   number: "",
//   descr: "",
//   price: "",
// });

async function createInitialUsers() {
  try {
    console.log("Starting to create users...");
    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const david = await createUser({
          username: "david",
          password: hashedPassword,
          email: "test1@yahoo.com",
          admin: false,
        });
        resolve();
      });
    });

    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const admin = await createUser({
          username: "@dm1ngft1",
          password: hashedPassword,
          email: "test1@yahoo.com",
          admin: true,
        });
        resolve();
      });
    });

    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const james = await createUser({
          username: "james",
          password: hashedPassword,
          email: "test2@yahoo.com",
          admin: false,
        });
        resolve();
      });
    });
    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const chris = await createUser({
          username: "chris",
          password: hashedPassword,
          email: "test2@yahoo.com",
          admin: false,
        });
        resolve();
      });
    });
    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();
  } catch (error) {
    throw error;
  }
}

async function testDB() {
  try {
    await dropTables();
    await createTables();
    await createInitialUsers();
    // await createInitialParts();
    // const part = await searchPartsNumber("GCS");
    // const userDavid = await getUserByUsername("david");
    // const userJames = await getUserByUsername("james");
    // const userChris = await getUserByUsername("chris");
    // const main = await getUserByUsername('@dm1nGFT')
    // const users = await getAllUsers();
    // const admin = await getAdminByUsername('james');
    // console.log("username", userDavid, userJames, userChris, main);
    // console.log("users", users);
    // // console.log("part", part);
    console.log("All Complete");
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
}

rebuildDB()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());
