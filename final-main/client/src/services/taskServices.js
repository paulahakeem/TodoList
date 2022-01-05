import axios from "axios";
const apiUrl = "http://server2-project10.apps.eu45.prod.nextcle.com/api/tasks";
//const apiUrl = "http://"+process.env.ENV_PORT+":8080/api/tasks";

export function getTasks() {
    return axios.get(apiUrl);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}
