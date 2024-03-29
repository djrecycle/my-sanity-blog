import Link from "next/link";
import React from "react";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className=" dark:bg-red-800">
        <Link className=" text-red-300 hover:text-red-100" href="/">
          <h1 className="text-2xl flex justify-center items-center font-bold   p-2">
            My Blog
          </h1>
        </Link>
      </div>
      <div>{props.renderDefault(props)}</div>
    </div>
  );
};

export default StudioNavbar;
