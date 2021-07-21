import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { Posts } from '../../components/Posts/Posts';
import { Container } from '../../components/UI/Container'
import { Pagination } from '../../components/UI/Pagination';
import { fetchAllPosts } from '../../helpers/fetch';

export const HomeScreen = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setcurrentPage] = useState(1);

    //Get current posts
    const indexOfLastPost = currentPage * 10;
    const indexOfFirstPost = indexOfLastPost - 10;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setcurrentPage(pageNumber);
    const url = "https://jsonplaceholder.typicode.com/posts";

    const onDelete = async (id) => {
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
                        setPosts(posts.filter(post => post.id !== id));
                        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                    }
                })


            }
          })
    }

    useEffect(() => {
        const awaitPost = async () => {
            setLoading(true);
            const resp = await fetchAllPosts();
            const data = await resp.json();
            setPosts(data);
            setLoading(false);
        }
        awaitPost();
    }, []);

    return (
        <>
            <h2 className="bg-dark mb-0 text-light text-center mt-0 pt-3 pb-3">Posts</h2>
            <Container justify='between'>
                <Posts loading={loading} posts={currentPosts} onDelete={onDelete} />
                <Pagination postPerPage={10} totalPosts={posts.length} paginate={paginate} />
            </Container>
        </>
    )
}
