import React from "react";
import { useSelector } from "react-redux";

import Link from "next/link";

import postStyle from "./postStyle.module.scss";
const Posts = () => {
  const { posts } = useSelector((state) => state["jsonData"]);
  return (
    <div className={postStyle.wrap}>
      {posts.map((value) => (
        <div key={value.id}>
          <h2>{value.title}</h2>
          <p>{value.body}</p>
          <Link href={"/post/[id]"} as={`/post/${value.id}`}>
            Show comments
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
