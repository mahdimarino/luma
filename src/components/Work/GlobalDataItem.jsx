import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";

const GlobalDataItem = ({ data }) => {
    return (
        <div  className="work">
            <div className="thumbnail">
                <div className="image" ><img  src={process.env.PUBLIC_URL + data.image} alt="work" /></div>
            </div>
            <div className="info">
                <h3 className="title">{data.title}</h3>
               
            </div>
        </div>
    )
}

GlobalDataItem.propTypes = {
    data: PropTypes.object
};

export default GlobalDataItem;
