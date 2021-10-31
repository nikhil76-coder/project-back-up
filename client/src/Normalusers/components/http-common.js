import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api/multipleFiles",
  headers: {
    "Content-type": "application/json"
  }
});