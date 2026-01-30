import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import WorkContainer from '../container/Work/WorkContainer';
import CallToAction from '../container/CallToAction/CallToAction';
import AboutFive from '../container/About/AboutFive';
import BrandContainer from '../container/Brand/BrandContainer';
import Faq from '../container/Faq/Faq';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import SolutionsContainer from '../container/Work/SolutionsContainer.js';
import HomeAboutTwo from '../components/About/HomeAboutTwo.jsx';


const Solutions = () => {
    return (
        <React.Fragment>
            <SEO title="Distinct Solutions" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg-two.jpg"
                title="Unleash your potential with Luma Demand!"
                content="Home"
                contentTwo="Solutions"
            />
           
            <SolutionsContainer/>
            <HomeAboutTwo />
           {/*  <Faq /> */}
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Solutions;