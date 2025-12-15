import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../../assets/user.png";
import { AuthContext } from "../../provider/Authprovider";

const Navbar = () => {
  const { user } = use(AuthContext);
  return (
    <div className="flex justify-between  items-center mt-6">
      <div>{user && user.email}</div>
      <div className="flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex">
        <img src={userIcon} alt="" />
        <Link to="/auth/login" className="btn btn-primary mx-10">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
