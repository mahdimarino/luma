import React from 'react';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import SolutionsData from '../../data/work/solutionsData.json';
import WorkItemTwo from '../../components/Work/WorkItemTwo.jsx';
import SolutionItem from '../../components/Work/SolutionItem.jsx';

const SolutionsContainer = () => {
    return (
        <div className="section section-padding-t90-b100">
            <div className="container">

                <SectionTitle
                    headingOption="title fz-32"
                    title="Better Leads for Your Marketing Funnel"
                />

                <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 mb-n6">

                    {SolutionsData && SolutionsData.map((single, key) => {
                            return(
                                <div key={key} className="col mb-6" data-aos="fade-up" data-aos-delay="300">
                                    <SolutionItem classOption="box-border" data={single} key={key} />
                                </div>
                            ); 
                    })}
                    
                </div>

            </div>
        </div>
    )
}

export default SolutionsContainer;
