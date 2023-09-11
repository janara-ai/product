import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
export const Navigation = () => {
  const loggedIn = localStorage.getItem("loggedIn");
  return (
    <Nav>
      <NavItem>
        <NavLink>
          <Link to="/">Home</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <Link to="/products">Products</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <Link to="/instructions">Instructions</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <Link to="/login">Login</Link>
        </NavLink>
      </NavItem>
    </Nav>
  );
};
