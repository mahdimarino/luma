import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import IntroSlider from '../container/IntroSlider/IntroSlider';
import HomeAbout from '../components/About/HomeAbout.jsx';
import ServiceIconBox from '../container/service/ServiceIconBox';
import HomeSuccess from '../components/Success/HomeSuccess';
import HomeAboutTwo from '../components/About/HomeAboutTwo.jsx';
import Portfolio from '../container/Portfolio/Portfolio';
import HomeBlog from '../container/BlogGrid/HomeBlog';
import Newsletter from '../container/Newsletter/Newsletter';
import ContactInformation from '../container/ContactInformation/ContactInformation';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import CallToAction from '../container/CallToAction/CallToAction';
import BrandContainer from '../container/Brand/BrandContainer.js';



const HomeOne = () => {
    return (
        <React.Fragment>
            <SEO title="Luma Demand" />
            <Header />
            <IntroSlider />
            <HomeAbout />
            <ServiceIconBox classOption="bg-color-1" />
            <HomeAboutTwo />
          
            {/* <HomeBlog /> */}
            <CallToAction />
            <ContactInformation />
            <BrandContainer classOption="section-padding" />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default HomeOne;



