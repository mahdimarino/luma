import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";

const BlogItem = ({ data }) => {
    return (
        <div className="blog">
            <div className="thumbnail">
                <img src={process.env.PUBLIC_URL + data.image} alt="Blog Image" />
            </div>
            <div className="info">
               
                <h3 className="title text-center">{data.title}</h3>
                
            </div>
        </div>
    )
}

BlogItem.propTypes = {
    data: PropTypes.object
};

export default BlogItem
