import axios from "axios";

const instance = axios.create({
    baseURL:'https://to-do-list-2acb9-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;