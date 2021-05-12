import axios from 'axios'
export function getUsers(){
    return axios.get('http://jsonplaceholder.typicode.com/users')
}