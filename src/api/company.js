import axios from "axios";

export async function getCompanies() {
  try {
    const company = await axios.get("/api/company");
    return company;
  } catch (error) {
    throw error;
  }
}

export async function getPart(partNumber) {
  try {
    console.log("part 14", partNumber);
    const part = await axios.get(`/api/company/parts/${partNumber}`);
    console.log("part16", part.data.part);
    return part;
  } catch (error) {
    throw error;
  }
}
