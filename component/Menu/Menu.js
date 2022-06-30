import React from "react";

import Link from "next/link";

import menuStyle from "./menuStyle.module.scss";

const Menu = () => {
  return (
    <ul className={menuStyle.wrap}>
      <li>
        {" "}
        <Link href={"/"}>Main page</Link>
      </li>
      <li>
        <Link href={"/posts"}>Post page</Link>
      </li>
    </ul>
  );
};

export default Menu;
