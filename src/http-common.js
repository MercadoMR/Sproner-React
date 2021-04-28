import axios from "axios";

// For deployment baseURL: "https://sproner.herokuapp.com/api",
// For local:   baseURL: "http://localhost:8080/api"
//  curl -vL square.github.io/okhttp 2>&1 | fgrep -i access-control-allow-origin
export default axios.create({
    baseURL: "http://localhost:3001/api",
    headers: {
        "Content-type" : "application/json"
    }
});