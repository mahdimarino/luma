import PropTypes from "prop-types";
import React from 'react';
import IconBoxData2 from '../../data/iconBox/icon-box2.json';
import IconBox from '../../components/IconBox/IconBox.jsx';
import SectionTitle from '../../components/SectionTitles/SectionTitle';

const Servicenurture = ({ classOption }) => {
    return (
        <div className={`section section-padding-t90-b100 ${classOption}`}>
            <div className="container">

                <SectionTitle
                    title="Nurture prospects with the following marketing services"
                    subTitle="Strengthen your relationship with your prospects and turn them into clients."
                />

                <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">

                    {IconBoxData2 && IconBoxData2.slice(8, 12).map((single, key) => {
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

Servicenurture.propTypes = {
    classOption: PropTypes.string
  };
  Servicenurture.defaultProps = {
    classOption: "section section-padding-t90-b100"
};

export default Servicenurture;
