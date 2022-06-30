import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

import { jsonService } from "../../services/jsonService";
import { getPosts } from "../../store/jsonSlice";
import Posts from "../../component/Posts/Posts";
import Menu from "../../component/Menu/Menu";
const Index = ({ postsData }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts(postsData));
  }, []);
  return (
    <div>
      <Menu />
      <Posts />
    </div>
  );
};
Index.propTypes = {
  postsData: PropTypes.array,
};

// eslint-disable-next-line require-jsdoc
export async function getServerSideProps() {
  const response = await jsonService.getPosts();
  const postsData = await response.data;
  return { props: { postsData } };
}
export default Index;
