import PropTypes from "prop-types";
import React from 'react';
import IconBoxData2 from '../../data/iconBox/icon-box2.json';
import IconBox from '../../components/IconBox/IconBox.jsx';
import SectionTitle from '../../components/SectionTitles/SectionTitle';

const Servicegenerate = ({ classOption }) => {
    return (
        <div className={`section section-padding-t90-b100 ${classOption}`}>
            <div className="container">

                <SectionTitle
                    title="We enhance your sales funnel from top to bottom"
                    subTitle="Augment your sales funnel with qualified leads that have a higher conversion rate."
                />

                <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">

                    {IconBoxData2 && IconBoxData2.slice(4, 8).map((single, key) => {
                            return(
                                <div key={key} className="col mb-6" data-aos="fade-up">
                                    <IconBox classOption="box-border" data={single} key={key} />
                                </div>
                            ); 
                    })}

                </div>
                

            </div>
            
        </div>
    )
}

Servicegenerate.propTypes = {
    classOption: PropTypes.string
  };
  Servicegenerate.defaultProps = {
    classOption: "section section-padding-t90-b100"
};

export default Servicegenerate;
