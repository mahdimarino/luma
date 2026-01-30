import React from 'react'
import { useParams } from "react-router-dom";
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import BlogClassicData from '../data/blog/BlogClassic3.json';
import BlogDetailsContainer from '../container/BlogGrid/BlogDetailsContainer';
import CallToAction from '../container/CallToAction/CallToAction';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import PrivacyPolicyContainer from '../container/BlogGrid/PrivacyPolicyContainer.js';

const PrivacyPolicy = () => {
    let { id } = useParams();
    const blogId = parseInt(id, 10)
    const data = BlogClassicData.filter(blog => blog.id === blogId);
    return (
        <React.Fragment>
            <SEO title="Privacy Policy" />
            <Header />
           
            <PrivacyPolicyContainer data={data[0]} />
            
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default PrivacyPolicy