import React, { useEffect } from "react";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";

import { jsonService } from "../../services/jsonService";
import { getPost } from "../../store/jsonSlice";

import postDetailsStyle from "./postDetailsStyle.module.scss";
const Post = ({ postData, commentsData }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost({ post: postData, comments: commentsData }));
  }, []);
  const { post, comments } = useSelector((state) => state["jsonData"]);

  return (
    <div className={postDetailsStyle.wrap}>
      <Link href={"/posts"}>Back</Link>
      <>
        {post !== null && (
          <div className={postDetailsStyle.post}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )}

        <div className={postDetailsStyle.comments}>
          <h3>Comments</h3>
          {comments.map((value) => (
            <div key={value.id}>
              <h4>{value.name}</h4>
              <p>{value.body}</p>
              <p>{value.email}</p>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
  commentsData: PropTypes.array,
};

// eslint-disable-next-line require-jsdoc
export async function getServerSideProps(ctx) {
  const responseData = await jsonService.getPost(ctx.query.id);
  const postData = await responseData.data;
  const response = await jsonService.getComments(ctx.query.id);
  const commentsData = await response.data;
  return { props: { commentsData, postData } };
}

export default Post;
