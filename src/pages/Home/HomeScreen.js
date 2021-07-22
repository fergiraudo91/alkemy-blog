import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, startDelete, startGettingPosts } from '../../actions/posts';
import { Posts } from '../../components/Posts/Posts';
import { Container } from '../../components/UI/Container'
import { Pagination } from '../../components/UI/Pagination';
import { fetchAllPosts } from '../../helpers/fetch';

export const HomeScreen = () => {

    const dispatch = useDispatch();
    const { posts, loading, currentPage } = useSelector(state => state.posts)
    
    const [currentPosts, setcurrentPosts] = useState([]);

    useEffect(() => {

        const starIndextPost = (currentPage - 1) * 10;
        const finalIndexPost = starIndextPost + 10;
        
        setcurrentPosts(posts.slice(starIndextPost, finalIndexPost));

    }, [posts, currentPage]);

    //Get current posts

    const paginate = (pageNumber) => {dispatch(setCurrentPage(pageNumber))};

    const onDelete = async (id) => {
        dispatch(startDelete(id));
    }

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
