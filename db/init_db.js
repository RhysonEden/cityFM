const bcrypt = require("bcrypt");
const SALT_COUNT = 10;
const {
  client,
  searchPartsNumber,
  getAllUsers,
  createUser,
  getUsersByID,
  getAllCompanies,
  getAdminByUsername,
  getUserByUsername,
} = require("./index");

// CREATE TABLE company (
//   id SERIAL PRIMARY KEY,
//   cusnumber varchar UNIQUE NOT NULL,
//   cusname varchar UNIQUE NOT NULL,
//   hold varchar UNIQUE NOT NULL,
//   payterms varchar UNIQUE NOT NULL,
//   phone varchar UNIQUE NOT NULL,
//   address varchar UNIQUE NOT NULL,
//   city varchar UNIQUE NOT NULL
// )

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

async function dropTables() {
  try {
    console.log("Starting to drop tables...");
    await client.query(`
      DROP TABLE IF EXISTS users;
      `);

    ("Finished dropping tables!");
  } catch (error) {
    console.error("Error dropping tables!");
    throw error;
  }
}

async function createInitialUsers() {
  try {
    console.log("Starting to create users...");
    await new Promise((resolve, reject) => {
      ("here the user");
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const arman = await createUser({
          username: "david",
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
          admin: true,
        });
        resolve();
      });
    });
    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const katy = await createUser({
          username: "chris",
          password: hashedPassword,
          email: "test2@yahoo.com",
          admin: true,
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
    const part = await searchPartsNumber("GCS");
    const userDavid = await getUserByUsername("david");
    const userJames = await getUserByUsername("james");
    const userChris = await getUserByUsername("chris");
    const users = await getAllUsers();
    const admin = await getAdminByUsername('james');
    console.log("username", userDavid, userJames, userChris);
    console.log("users", users);
    console.log("part", part);
    console.log(admin)
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
