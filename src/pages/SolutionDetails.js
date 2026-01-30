import React from 'react';
import { useParams } from "react-router-dom";
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import Footer from '../container/Footer/Footer';

import SolutionsData from "../data/work/solutionsData.json";
import WorkDetailsContainer from '../container/Work/WorkDetailsContainer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import SolutionDetailsContainer from '../container/Work/SolutionDetailsContainer.js';



const SolutionDetails = () => {
    let {id} = useParams();
    const workId = parseInt(id, 10)
    const data = SolutionsData.filter(work => work.id === workId);
    return (
        <React.Fragment>
            <SEO title="Luma Demand" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg-two.jpg"
                title={data[0]?.title}
                content="Home"
                contentTwo="Solutions"
            />
            <SolutionDetailsContainer data={data[0]} />
            
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default SolutionDetails;