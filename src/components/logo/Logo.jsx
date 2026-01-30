import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import batata from "../../assets/images/batata.png";


const Logo = () => {
    return (
        <div className="header-logo">
            <Link to="/">
                <img className="dark-logo" src={batata} alt="Agency Logo" />
            </Link>
        </div>
    );
};

export default Logo;
