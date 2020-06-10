import axios from "axios";

export default axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/place/autocomplete/json?",
  responseType: "json",
  headers: {
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
  }
});
