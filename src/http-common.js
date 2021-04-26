import axios from "axios";

// For deployment baseURL: "https://sproner.herokuapp.com/api",
// For local:   baseURL: "http://localhost:8080/api"
export default axios.create({
    baseURL: "https://sproner.herokuapp.com/api",
    headers: {
        "Content-type" : "application/json"
    }
});