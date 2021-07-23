import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { startAddNewPost, startUpdatePost } from "../../actions/posts";
import * as Yup from 'yup';

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length < 5) {
    errors.title = 'Must be more than 5 characters at least';
  }

  if (!values.body) {
    errors.body = 'Required';
  } else if (values.body.length < 10) {
    errors.body = 'Must be 10 characters at least';
  }

  return errors;
};

export const EditPost = ({history}) => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const dispatch = useDispatch();
  const params = useParams();
  const id = Object.keys(params).length > 0 ? +params.id : 0;
  const { posts } = useSelector((state) => state.posts);
  const post = posts.find((el) => el.id === id) || false;

  const formik = useFormik({
    initialValues: {
      title: `${post ? post.title : ""}`,
      body: `${post ? post.body : ""}`,
    },
    validate,
    onSubmit: async (values) => {
      if (!post) {
        const resp = await fetch(
          `${url}?userId=1&title=${values.title}&body=${values.body}}`
        );
        if (resp.ok) {
          dispatch(startAddNewPost(values, 1));
        }
      } else {
        console.log("Hello");
        dispatch(startUpdatePost(values, 1, id));
      }
    },
  });
  return (
    <div
      className={`bg-dark row align-items-center container-component justify-content-center main-form flex-column vh-100`}
    >
      <div className="login-form w-50 post-form">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              className="form-control"
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            {formik.errors.title ? <div className="error">{formik.errors.title}</div> : null}
          </div>

          <div className="form-group">
            <label htmlFor="body">Message</label>
            <textarea
              className="form-control"
              id="body"
              name="body"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.body}
            />
            {formik.errors.body ? <div className="error">{formik.errors.body}</div> : null}
          </div>

          <button className="btn btn-light" type="submit">
            {post ? "Edit Post" : "Add new Post"}
          </button>
        </form>
      </div>
    </div>
  );
};
