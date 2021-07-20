

export const fectchLogin = (data) => {
    const {email, password} = data;
    const url = `http://challenge-react.alkemy.org/?email=${email}&password=${password}`;
    return fetch(url);
} 

export const fetchAllPosts = async () => {
    const url = " https://jsonplaceholder.typicode.com/posts";
    const resp = await fetch(url);
    return resp;
}