import axios from "axios";

const API = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/place/autocomplete/json",
  responseType: "json",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true"
  }
});

export default API;
