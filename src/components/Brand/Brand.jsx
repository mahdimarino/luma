import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";

const Brand = ({ data }) => {
    return (
        <div id="workbrand" className="brand">
        
                <img  src={process.env.PUBLIC_URL + data.image} alt="logo image" />
           
        </div>
    )
}

Brand.propTypes = {
    data: PropTypes.object
}



export default Brand;
