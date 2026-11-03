import ApiClient from "./src/api-client.js"

const api = new ApiClient({
    baseUrl: "https://jsonplaceholder.typicode.com"
});

console.log(api.baseUrl) ;