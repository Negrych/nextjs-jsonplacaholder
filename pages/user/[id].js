import React, { useEffect } from "react";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";

import { jsonService } from "../../services/jsonService";
import { getUser } from "../../store/jsonSlice";

import userStyle from "./userStyle.module.scss";
const User = ({ userData }) => {
  const { user } = useSelector((state) => state["jsonData"]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(userData));
  }, [dispatch, userData]);
  return (
    <div className={userStyle.wrap}>
      <Link href={"/"}>Back</Link>
      {user !== null && (
        <div>
          <p>{user.id}</p>
          <p>
            {user.name} {user.userName}
          </p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <p>{user.company.name}</p>
          <p>{user.company.catchPhrase}</p>
          <p>{user.company.bs}</p>
          <p>{user.address.city}</p>
          <p>{user.address.street}</p>
          <p>{user.address.suite}</p>
          <p>{user.address.zipcode}</p>
        </div>
      )}
    </div>
  );
};

User.propTypes = {
  userData: PropTypes.object,
};
// eslint-disable-next-line require-jsdoc
export async function getServerSideProps(ctx) {
  const response = await jsonService.getUser(ctx.query.id);
  const userData = await response.data;
  return { props: { userData } };
}
export default User;
