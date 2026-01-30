import PropTypes from "prop-types";
import React from 'react';
import { Link } from "react-router-dom";
import BlogDetails from '../../components/Blog/BlogDetails.jsx';
import Comment from '../../components/Comment/Comment.jsx';
import SidebarWrap from '../../components/Sidebar/SidebarWrap.jsx';
import SidebarWidget from '../../components/Sidebar/SidebarWidget.jsx';
import SidebarBanner from '../../components/Sidebar/SidebarBanner.jsx';
import SidebarTitle from '../../components/Sidebar/SidebarTitle';
import SidebarSearch from '../../components/Sidebar/SidebarSearch.jsx';
import SidebarCategories from '../../components/Sidebar/SidebarCategories.jsx';
import SidebarPost from '../../components/Sidebar/SidebarPost.jsx';
import SidebarTag from '../../components/Sidebar/SidebarTag.jsx';
import PrivacyDetails from "../../components/Blog/PrivacyDetails.jsx";

const PrivacyPolicyContainer = ({ data }) => {
    return (
        <div className="section section-padding fix">
            <div className="container">
                <div className="row mb-n10">

                    <div className="col-lg-12 col-12 order-lg-1 mb-10">
                        <div className="row row-cols-1 no-gutters">

                            <PrivacyDetails data={data} />
                            

                           


                          

                        </div>
                    </div>

                    

                </div>
            </div>
        </div>
    )
}
PrivacyPolicyContainer.propTypes = {
    data: PropTypes.object
};



export default PrivacyPolicyContainer