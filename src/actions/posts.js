
import Swal from "sweetalert2";
import { fetchAllPosts } from "../helpers/fetch";
import { types } from "../types/types";

const url = "https://jsonplaceholder.typicode.com/posts";

export const startGettingPosts = () => {
    return async (dispatch) => {
        const resp = await fetchAllPosts();
        const data = await resp.json();
        dispatch(getAllPosts(data));
    }
}

const getAllPosts = (posts) => ({
    type: types.postGetAll,
    payload: {
        posts,
        loading: false
    }
})

export const clearAllPosts = () => ({
    type: types.postClearAll
})

export const startDelete = (id) => {
    return (dispatch) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#343a40',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            
                fetch(`${url}/${id}`, {
                    method: 'DELETE'
                })
                .then(resp => {
                    if(resp.ok){
                        dispatch(deletePost(id));
                        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                    }
                })
            }
          })
    }
}

const deletePost = (id) => ({
    type: types.postDelete,
    payload: id
})

export const startAddNewPost = (values, userId) => {

    const {title, body} = values;
    return async (dispatch) => {
        
        const resp = await fetch(`${url}?userId=${userId}&title=${title}&body=${body}`,{
            method: 'POST'
        });
        if(resp.ok){
            dispatch(addNewPost(title, body, userId))
            Swal.fire('Post added', 'The post was added', 'success');
        }
        else{
            Swal.fire('Error', 'Contact the administrator', 'error');
        }
    }
} 

const addNewPost = (title, body, userId) => ({
    type: types.postAddNew,
    payload: {
        title,
        body,
        userId,
        id: Math.floor(Math.random() * 10000)
    }
});

export const setCurrentPage = (number) => ({
    type: types.postSetCurrentPage,
    payload: number
});

export const startUpdatePost = (post, userId, postId, history) => {
    return async (dispatch) => {
        const resp = await fetch(`${url}/${postId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                post, 
                userId,
                id: postId
            }),
        });
        if(resp.ok){
            dispatch(updatePost(post, userId, postId));
            Swal.fire('Post updated', 'The post was updated succeeded', 'success');
        }
    }
}

const updatePost = (post, userId, postId) => ({
    type: types.postUpdate,
    payload: {
        ...post,
        id: postId,
        userId
    }
})