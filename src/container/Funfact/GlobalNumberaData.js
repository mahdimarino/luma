import React from 'react';
import CounterUpData from '../../data/counter/golobaldatanumbers.json';
import CounterUpItem from '../../components/CounterUp/CounterUpItem.jsx';

const GlobalNumberaData = () => {
    return (
        <div className="section section-padding-t90 section-padding-bottom bg-primary-blue">
            <div className="container">
                <div className="section-title text-center">
                    <h2 className="title fz-50 mb-5">Job Functions</h2><br></br>
                </div>
                <div className="row">
                    <div className="col-lg-12 mx-auto">
                        <div className="row row-cols-lg-6 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">

                        {CounterUpData && CounterUpData.map((single, key) => {
                            return(
                                <div key={key} className="col mb-6" data-aos="fade-up" data-aos-delay="300">
                                    <CounterUpItem data={single} key={key} />
                                </div>
                            ); 
                        })}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlobalNumberaData;
