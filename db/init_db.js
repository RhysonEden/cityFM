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
          CREATE TABLE parts (
            id SERIAL PRIMARY KEY,
            number varchar NOT NULL,
            descr varchar NOT NULL,
            price varchar NOT NULL
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
      DROP TABLE IF EXISTS parts;
      `);

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

async function createInitialParts() {
  try {
    console.log("Starting to create parts...");
    await createPart({
      number: "GILQ1292902",
      descr: "13WATTFLUORESCENTLAMP",
      price: "7.92",
    });
    await createPart({
      number: "GCS27370-0000",
      descr: "120VVALVEDISPENSE",
      price: "59.72",
    });
    await createPart({
      number: "GCS27370-0000",
      descr: "120VVALVEDISPENSE",
      price: "59.72",
    });
    await createPart({
      number: "GCSSTZ6485",
      descr: "120V3.5RPMMOTOR",
      price: "152.41",
    });
    await createPart({
      number: "USCU-PN101B-12",
      descr: "12X3UNLEADEDDECAL",
      price: "2.31",
    });
    await createPart({
      number: "SYN800-F",
      descr: "12VOLTDCPULSER",
      price: "212.02",
    });
    await createPart({
      number: "SYN4000800-F-12-V",
      descr: "12VOLTDCPULSER",
      price: "190.81",
    });
    await createPart({
      number: "RICR3001-U1BKBK",
      descr: "11AREBUILTW/COVER/GUARD",
      price: "23.86",
    });
    await createPart({
      number: "PIP706400",
      descr: "115VOLTELECTRICMOTOR",
      price: "95.42",
    });
    await createPart({
      number: "GMS10X370",
      descr: "10X370OVALCAPACITOR",
      price: "1.95",
    });
    await createPart({
      number: "GILT19976V10R",
      descr: "ASSYMETERV+",
      price: "848.19",
    });
    await createPart({
      number: "LBDCF18L/TE841",
      descr: "18W4PINBASETRIPLETUBEFLUO",
      price: "9.04",
    });
    await createPart({
      number: "GILT19976V10S",
      descr: "ASSYMETERV+",
      price: "1163.99",
    });
    await createPart({
      number: "VFN55095-01",
      descr: "ADAPTERTM950PRINTER",
      price: "31.54",
    });
    await createPart({
      number: "OPWSMA-2020",
      descr: "ADAPTOR2 NPSMTO2 MNPT",
      price: "95.19",
    });
    await createPart({
      number: "OPWSMA-2015",
      descr: "ADAPTOR2 NPSMTO1.5 NPT",
      price: "66.00",
    });
    await createPart({
      number: "CIM50032",
      descr: "ADAPTOR1-1/2-16NALUM",
      price: "19.53",
    });
    await createPart({
      number: "GILM06917B001",
      descr: "BULBSPAIR10.4 DISPLAY",
      price: "273.64",
    });
    const a00002 = await createPart({
      number: "ESC755-0037",
      descr: "NEWGSITESCANNER",
      price: "394.89",
    });
    const a00003 = await createPart({
      number: "PEM350-10",
      descr: "SHOOKHOSERETRIEVER",
      price: "0.57",
    });
    const a00004 = await createPart({
      number: "GILQ1006810",
      descr: "0RING1-5/16X1-9/16X1/8",
      price: "5.19",
    });
    const a00005 = await createPart({
      number: "GCS054-69103-EGO",
      descr: "054INF.SW280V",
      price: "24.19",
    });
    const a00006 = await createPart({
      number: "GILT18785G265",
      descr: "0VERLAYADVEXXONDIESELBLACK",
      price: "40.51",
    });
    const a00007 = await createPart({
      number: "GILR19429G189",
      descr: "0VERLAYADVPUTDOWNEXXON",
      price: "38.57",
    });
    const a00008 = await createPart({
      number: "GILR19429G172",
      descr: "0VERLAYADVPUTDOWNPTSINSTRUCTIONS",
      price: "38.57",
    });
    const a00009 = await createPart({
      number: "GILEU04001G007",
      descr: "0VERLAYENCMISCDECAL",
      price: "39.07",
    });
    const a00010 = await createPart({
      number: "GILR19429G6",
      descr: "0VERLAYON/OFFBLACK",
      price: "38.57",
    });
    const a00011 = await createPart({
      number: "GILR19429G257",
      descr: "0VERLAYON/OFFBPNEWIMAGE",
      price: "38.57",
    });
    const a00012 = await createPart({
      number: "TCIWS1000",
      descr: "11/2INCOUPLINGWASHER",
      price: "1.70",
    });
    const a00013 = await createPart({
      number: "GILQ12654-03B",
      descr: "1PLYPAPER930/950VERIFONE",
      price: "24.51",
    });
    const a00014 = await createPart({
      number: "WESPI-4586",
      descr: "1.5 BARBEDEND-2 MALENPTX1.5",
      price: "39.75",
    });
    const a00015 = await createPart({
      number: "WESPI-4500",
      descr: "1.5 FLEXPIPECOFLEX",
      price: "15.90",
    });
    const a00016 = await createPart({
      number: "WFIP14636U",
      descr: "1.5 TESTASSEMBLY",
      price: "51.60",
    });
    const a00017 = await createPart({
      number: "MIL736",
      descr: "1/4INHOSEBARBPLUGMSTYLE",
      price: "1.68",
    });
    const a00018 = await createPart({
      number: "OPW20-7080",
      descr: "10BASET-NETWORKINTERFACESYS-2",
      price: "1003.95",
    });
    const a00019 = await createPart({
      number: "GILQ13850-10",
      descr: "10FTCABLE",
      price: "12.45",
    });
    const a00020 = await createPart({
      number: "FIBFL42SK10",
      descr: "10 SKIRT42 MANHOLE",
      price: "170.38",
    });
    const a00021 = await createPart({
      number: "GPI126517",
      descr: "10-1PULSERKIT",
      price: "246.66",
    });
    const a00022 = await createPart({
      number: "LMPCAP1000W",
      descr: "1000WCAPACITOR005-2779BH",
      price: "29.89",
    });
    const a00023 = await createPart({
      number: "LMPMH1000W",
      descr: "1000WMHBULBMH1000/U/B",
      price: "54.60",
    });
    const a00024 = await createPart({
      number: "LMPBAL-MH100W",
      descr: "100WMHBALLASTM100MLTLC3M500",
      price: "88.60",
    });
    const a00025 = await createPart({
      number: "LMPMH100W",
      descr: "100WMHBULBMH100/U/M/PS",
      price: "25.87",
    });
    const a00026 = await createPart({
      number: "LMPF108T12DHO",
      descr: "108DHOBULB105 INDUSTRIAL",
      price: "30.41",
    });
    const a00027 = await createPart({
      number: "MAR144-224-5",
      descr: "17.5MFDCAPACITORQUANTUM1/3&3/4HP",
      price: "97.73",
    });
    const a00028 = await createPart({
      number: "YORK17.5",
      descr: "17.5CAPACITOR",
      price: "41.77",
    });
    const a00029 = await createPart({
      number: "LMPBAL-HPS150W",
      descr: "150HPSBALLASTS150MLTLC3M5",
      price: "99.40",
    });
    const a00030 = await createPart({
      number: "LMPBAL1232",
      descr: "1232BALLASTUSB-16",
      price: "116.92",
    });
    const a00031 = await createPart({
      number: "GCSPS-RG-2025",
      descr: "120VMOTOR",
      price: "192.17",
    });
    const a00032 = await createPart({
      number: "LMPBAL-MH175W",
      descr: "175WMHBALLASTM175ML5AC3M500",
      price: "95.48",
    });
    const a00033 = await createPart({
      number: "AMI13470",
      descr: "16X20BLUEPADS",
      price: "0.34",
    });
    const a00034 = await createPart({
      number: "AMI13470BAG",
      descr: "16X20BLUEPADS(200PERBAG)",
      price: "66.51",
    });
    const a00035 = await createPart({
      number: "GMS15X370",
      descr: "15X370OVALCAPACITOR",
      price: "3.11",
    });
    const a00036 = await createPart({
      number: "LMPSS-5-15MM-BK",
      descr: "15MMSHORTSTOPBOOTNEONINSUL",
      price: "1.57",
    });
    const a00037 = await createPart({
      number: "LMPSS-EC5-BK",
      descr: "15MMDBLBACKBOOTNEONINSULA",
      price: "1.57",
    });
    const a00038 = await createPart({
      number: "TUTG1182",
      descr: "157",
      price: "210.67",
    });
    const a00039 = await createPart({
      number: "COMP50318698",
      descr: "15 MONITOR/OTHERSDISCONTINUED",
      price: "158.48",
    });
    console.log("Finished creating parts!");
  } catch (error) {
    console.error("Error creating parts!");
    throw error;
  }
}

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
          username: "@dm1nGFT",
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
    await createInitialParts();
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
