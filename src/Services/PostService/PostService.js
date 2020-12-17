export default class PostService{

    getPost(posts=[], id){
       return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(value => value.json())
    }

}