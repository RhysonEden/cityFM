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
        const tampa = await createUser({
          username: "tampa",
          password: hashedPassword,
          email: "tampadispatch@guardianfueltech.com",
          admin: false,
        });
        resolve();
      });
    });
    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const tampa = await createUser({
          username: "sanford",
          password: hashedPassword,
          email: "sanforddispatch@guardianfueltech.com",
          admin: false,
        });
        resolve();
      });
    });
    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const tampa = await createUser({
          username: "atlanta",
          password: hashedPassword,
          email: "atlantadispatch@guardianfueltech.com",
          admin: false,
        });
        resolve();
      });
    });
    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const david = await createUser({
          username: "david",
          password: hashedPassword,
          email: "DMcMichael@guardianfueltech.com",
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
          email: "GuardianConnect@guardianfueltech.com",
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
          email: "jgale@guardianfueltech.com",
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
          email: "cfielder@guardianfueltech.com",
          admin: false,
        });
        resolve();
      });
    });
    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const birmingham = await createUser({
          username: "birmingham",
          password: hashedPassword,
          email: "Birminghamdispatch@guardianfueltech.com",
          admin: false,
        });
        resolve();
      });
    });
    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const chrcharlotteis = await createUser({
          username: "charlotte",
          password: hashedPassword,
          email: "charlottedispatch@guardianfueltech.com",
          admin: false,
        });
        resolve();
      });
    });
    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const columbia = await createUser({
          username: "columbia",
          password: hashedPassword,
          email: "columbiadispatch@guardianfueltech.com",
          admin: false,
        });
        resolve();
      });
    });
    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const chris = await createUser({
          username: "ftmyers",
          password: hashedPassword,
          email: "ftmyersdispatch@guardianfueltech.com",
          admin: false,
        });
        resolve();
      });
    });
    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const ftlauderdale = await createUser({
          username: "ftlauderdale",
          password: hashedPassword,
          email: "miramardispatch@guardianfueltech.com",
          admin: false,
        });
        resolve();
      });
    });
    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const pensacola = await createUser({
          username: "pensacola",
          password: hashedPassword,
          email: "gulfcoastdispatch@guardianfueltech.com",
          admin: false,
        });
        resolve();
      });
    });
    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const jacksonville = await createUser({
          username: "jacksonville",
          password: hashedPassword,
          email: "jaxdispatch@guardianfueltech.com",
          admin: false,
        });
        resolve();
      });
    });
    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const knoxville = await createUser({
          username: "knoxville",
          password: hashedPassword,
          email: "knoxdispatch@guardianfueltech.com",
          admin: false,
        });
        resolve();
      });
    });
    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const nashville = await createUser({
          username: "nashville",
          password: hashedPassword,
          email: "NashvilleDispatch@guardianfueltech.com",
          admin: false,
        });
        resolve();
      });
    });
    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const raleigh = await createUser({
          username: "raleigh",
          password: hashedPassword,
          email: "raleighdispatch@guardianfueltech.com",
          admin: false,
        });
        resolve();
      });
    });
    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const savannah = await createUser({
          username: "savannah",
          password: hashedPassword,
          email: "Savannahdispatch@guardianfueltech.com",
          admin: false,
        });
        resolve();
      });
    });
    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const tallahassee = await createUser({
          username: "tallahassee",
          password: hashedPassword,
          email: "tallydispatch@guardianfueltech.com",
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
