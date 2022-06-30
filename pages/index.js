import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

import { jsonService } from "../services/jsonService";
import { getUsers } from "../store/jsonSlice";
import Users from "../component/Users/Users";
import Menu from "../component/Menu/Menu";

const Index = ({ users }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers(users));
  }, []);
  return (
    <div>
      <Menu />
      <Users />
    </div>
  );
};

Index.propTypes = {
  users: PropTypes.object,
};
// eslint-disable-next-line require-jsdoc
export async function getServerSideProps() {
  const response = await jsonService.getUsers();
  const users = await response.data;
  return { props: { users } };
}

export default Index;
