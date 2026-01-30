import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";

const SolutionItem = ({ data }) => {
    return (
        <div className="work">
            <div className="thumbnail">
                <Link className="image" to={process.env.PUBLIC_URL + `/solution-details/${data.id}`}><img src={process.env.PUBLIC_URL + data.image} alt="work" /></Link>
            </div>
            <div className="info">
                <h3 className="title"><Link to={process.env.PUBLIC_URL + `/solution-details/${data.id}`}>{data.title}</Link></h3>
                <p className="desc">{data.excerpt}</p>
                <Link className="text-dark" to={process.env.PUBLIC_URL + `/solution-details/${data.id}`}>More Details</Link>
            </div>
        </div>
    )
}

SolutionItem.propTypes = {
    data: PropTypes.object
};

export default SolutionItem;
