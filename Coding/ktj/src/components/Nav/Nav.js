import React from "react";
import { Link } from "react-router-dom";

const Nav = props => (
    <div className="links">
        <Link className="high" to="#">
        Home
        </Link>
        <Link className="high" to="#">
        About
        </Link>
        <Link className="high" to="#">
        Contact
        </Link>
    </div>
);

export default Nav;