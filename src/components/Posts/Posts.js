import React from "react";
import { Link } from "react-router-dom";

export const Posts = ({ posts, loading, onDelete }) => {

  if (loading) {
    return (
      <div
        className="spinner-border loading-spinner text-light"
        style={{ width: "4rem", height: "4rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="container bg-light mb-3 ml-2 mr-2 post">
          <h6 className="text-center p-3">{post.title}</h6>
          <div className="actions">
           <Link to={`/post/${post.id}`}><i
              className="far fa-eye"
              data-toggle="tooltip"
              data-placement="bottom"
              title="See Post"
            ></i> </Link>
            <i
              className="far fa-edit"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Edit Post"
            ></i>
            <i
              className="fas fa-trash"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Delete Post"
              onClick={() => onDelete(post.id)}
            ></i>
          </div>
        </div>
      ))}
    </>
  );
};
