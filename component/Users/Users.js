import React from "react";
import { useSelector } from "react-redux";

import Link from "next/link";

import userStyle from "./userStyle.module.scss";

const Users = () => {
  const { users } = useSelector((state) => state["jsonData"]);
  return (
    <div className={userStyle.wrap}>
      {users.map((value) => (
        <div key={value.id}>
          <p>
            {value.name} {value.userName}
          </p>
          <p>{value.email}</p>
          <Link href={"/user/[id]"} as={`/user/${value.id}`}>
            Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
