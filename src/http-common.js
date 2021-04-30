import axios from "axios";

// For deployment baseURL: "https://sproner.herokuapp.com/api",
// For local:   baseURL: "    baseURL: "http://localhost:3001/api","
export default axios.create({
    baseURL: "http://localhost:3001/api",
    headers: {
        "Content-type" : "application/json"
    }
});