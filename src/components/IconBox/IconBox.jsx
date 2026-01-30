import PropTypes from "prop-types";
import React from 'react';
import ReactVivus from 'react-vivus';
import {Link} from "react-router-dom";
import { Image } from "react-bootstrap";

const IconBox = ({ data, classOption }) => {
    return (
        <div className={`icon-box text-center ${classOption}`}>
            <div className="icon ">
                <Image className="w-25 "
                    src={data.icon}
                    option={{
                        file: data.icon,
                        
                    }}
                />
            </div>
            <div className="content">
                <h3 className="title">{data.title}</h3>
                <div className="desc">
                    <p>{data.desc}</p>
                </div>
               
            </div>
        </div>
    )
}

IconBox.propTypes = {
    data: PropTypes.object,
    classOption: PropTypes.string
};

IconBox.defaultProps = {
    classOption: "icon-box text-center",
};

export default IconBox;
