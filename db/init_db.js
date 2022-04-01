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
  getTicketByNumber,
  createTicket,
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
      DROP TABLE IF EXISTS ticket;
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
          admin: true,
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
      bcrypt.hash(
        "gc@gft2020",
        SALT_COUNT,
        async function (err, hashedPassword) {
          const callcenter = await createUser({
            username: "gftcenter",
            password: hashedPassword,
            email: "Guardianresourcecenter@guardianfueltech.com",
            admin: false,
          });
          resolve();
        }
      );
    });
    await new Promise((resolve, reject) => {
      bcrypt.hash(
        "mr@gft2020",
        SALT_COUNT,
        async function (err, hashedPassword) {
          const monica = await createUser({
            username: "monica",
            password: hashedPassword,
            email: "mriley@guardianfueltech.com",
            admin: true,
          });
          resolve();
        }
      );
    });
    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
}

// async function createIntialTicket() {
//   try {
//     console.log("Starting to create ticket...");
//     const ticket = await createTicket({
//       ticket: "123456-0089",
//       cfm: 12345678,
//       space: 10,
//       blower: 10,
//       can: 10,
//       trailer: 10,
//       truck: 10,
//       water: 10,
//       hand: 10,
//       misc: 10,
//       p1: 10,
//       labor: 10,
//       travel: 10,
//       part: 10,
//       consumables: 10,
//       laptop: 10,
//       enviroment: 10,
//       disposal: 10,
//       project: 10,
//       stand: 10,
//       final: 10,
//       nte: 10,
//       uplift: 10,
//     });
//     console.log("Finished creating ticket!");
//   } catch (error) {
//     console.error("Error creating ticket!");
//     throw error;
//   }
// }

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
    // await createIntialTicket();
    // const test = await getTicketByNumber("123456-0089");
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
    // console.log("Ticket =", test);
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
