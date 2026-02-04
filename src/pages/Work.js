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
import BlogClassicContainer from '../container/BlogGrid/BlogClassicContainer.js';
import BlogCategoryContainer from '../container/BlogGrid/BlogCategoryContainer.js';
import PageBlog from '../container/BlogGrid/PageBlog.js';


const Work = () => {
    return (
        <React.Fragment>
            <SEO title="Work" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg-two.jpg"
                title="Unleash your potential with Luma Demand!"
                content="Home"
                contentTwo="Careers"
            />
            <WorkContainer />
            
           
            <Faq />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Work;