import PropTypes from "prop-types";
import React from 'react';
import IconBoxData2 from '../../data/iconBox/icon-box2.json';
import IconBox from '../../components/IconBox/IconBox.jsx';
import SectionTitle from '../../components/SectionTitles/SectionTitle';

const Servicegroundwork = ({ classOption }) => {
    return (
        <div className={`section section-padding-t90-b100 ${classOption}`}>
            <div className="container">

                <SectionTitle
                    title="We enhance your sales funnel from top to bottom"
                    subTitle="Leverage data and technology to drive better business decisions and improve results by strengthening your business’s pillars."
                />

                <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">

                    {IconBoxData2 && IconBoxData2.slice(0, 4).map((single, key) => {
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

Servicegroundwork.propTypes = {
    classOption: PropTypes.string
  };
  Servicegroundwork.defaultProps = {
    classOption: "section section-padding-t90-b100"
};

export default Servicegroundwork;
