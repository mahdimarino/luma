import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";

const WorkItemTwo = ({ data }) => {
    return (
        <div className="work">
            <div className="thumbnail">
                <div className="image" ><img  src={process.env.PUBLIC_URL + data.image} alt="work" /></div>
            </div>
            <div className="info">
                <h3 className="title">{data.title}</h3>
                <p className="desc">{data.excerpt}</p>
                
            </div>
        </div>
    )
}

WorkItemTwo.propTypes = {
    data: PropTypes.object
};

export default WorkItemTwo;
