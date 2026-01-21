import axios from "axios"


const BASE_URL = "http://127.0.0.1:8000/student/"

export async function get_all_students() {
    return await axios.get(BASE_URL)
}

export async function add_new_students(data) {
    return await axios.post(BASE_URL, data)
}

export async function get_one_student(id) {
    return await axios.get(BASE_URL + `${id}/`)
}

export async function update_student(id, data) {
    return axios.put(BASE_URL + `${id}/`, data)
}

export async function delete_student(id) {
    return await axios.delete(BASE_URL + '${id}/')
}