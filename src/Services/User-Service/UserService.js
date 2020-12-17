export default class UserService{

    getAllUsers(){
        return fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json())
    }

    getUserById(id){
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(value => value.json())
    }


}