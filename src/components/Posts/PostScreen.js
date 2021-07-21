import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "../UI/Container";

export const PostScreen = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts/";

  useEffect(() => {
    const getPost = async () => {
      const resp = await fetch(`${url}${id}`);
      const data = await resp.json();
      setPost(data);
    };
    getPost();
  }, [id]);
  return (
    <div
      className={`bg-dark row align-items-center container-component main-form flex-column vh-100`}
    >
      <main className="bg-light w-75 mt-5 rounded mb-5 main-post py-5">
        <header className="title-post text-center mt-2 mb-3">
          <h1>{post.title}</h1>
        </header>
        <section className="mx-5 text-justify">
          <p>{post.body}</p>
        </section>
        <footer>
          <Link className="btn btn-dark mr-4 mt-3" to="/">
            Return <i class="fas fa-undo-alt"></i>
          </Link>
        </footer>
      </main>
    </div>
  );
};
