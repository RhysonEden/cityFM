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
    const part = await axios.get(`/api/company/parts/${partNumber}`);
    return part;
  } catch (error) {
    throw error;
  }
}
