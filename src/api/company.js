import axios from "axios";
let token = sessionStorage.getItem("token");
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export async function getCompanies() {
  try {
    const company = await axios.get("/api/company");
    return company;
  } catch (error) {
    throw error;
  }
}

export async function getPart(partNumber) {
  let head = config;
  if (!head) {
    let head = "Not Valid";
    return head;
  }
  try {
    let url = "/api/company/parts/" + partNumber;
    const part = await axios.get(url, head);
    return part;
  } catch (error) {
    throw error;
  }
}

export async function showConLog(id) {
  try {
    const log = await axios.get(`/api/company/logs/${id}`);
    console.log(log);
  } catch (error) {
    throw error;
  }
}
