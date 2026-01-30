import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import WorkContainer from '../container/Work/WorkContainer';
import GlobalDataContainer from '../container/Work/GlobalDataContainer';
import CallToAction from '../container/CallToAction/CallToAction';
import AboutFive from '../container/About/AboutFive';
import BrandContainer from '../container/Brand/BrandContainer';
import Faq from '../container/Faq/Faq';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import GlobalNumberData from '../container/Funfact/GlobalNumberaData.js';
import ServiceSkills from '../container/service/ServiceSkill.js';
import ServiceIconBox from '../container/service/ServiceIconBox.js';
import ServiceIconBoxTwo from '../container/service/ServiceIconBoxTwo.js';
import GlobalInfoData from '../container/service/GlobalInfoData.js';


const GlobalData = () => {
    return (
        <React.Fragment>
            <SEO title="Distinct Audience" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg-two.jpg"
                title="Generate Leads with Our 1st Party Audience"
                content="Home"
                contentTwo="Data Audience"
            />
           
            <GlobalDataContainer />
            <GlobalNumberData />
            <GlobalInfoData />
          
           
           
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default GlobalData;