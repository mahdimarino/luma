import React from 'react'
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="site-main-menu">
            <ul>
                
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/home"}><span className="menu-text text-dark">Home</span></NavLink>
                </li>
               
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/Solutions"}><span className="menu-text text-dark">Solutions</span></NavLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                    <li><NavLink to={process.env.PUBLIC_URL + "/solution-details/1"}><span className="menu-text text-dark">Marketing Qualified Leads</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/solution-details/2"}><span className="menu-text text-dark">Highly Qualified Leads</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/solution-details/3"}><span className="menu-text text-dark">Account Based Marketing</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/solution-details/4"}><span className="menu-text text-dark">Highly Qualified Leads</span></NavLink></li>
                    </ul>
                </li>
               
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/service"}><span className="menu-text text-dark">Services</span></NavLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                    <li><NavLink to={process.env.PUBLIC_URL + "/service"}><span className="menu-text text-dark">Groundwork</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/generate"}><span className="menu-text text-dark">Generate</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/nurture"}><span className="menu-text text-dark">Nurture</span></NavLink></li>
                    </ul>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/about"}><span className="menu-text text-dark">About Us</span></NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/work"}><span className="menu-text text-dark">Careers</span></NavLink>
                </li>
              
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/globaldata"}><span className="menu-text text-dark">Audience Data</span></NavLink>
                </li>
            
             
                
               
            </ul>
        </nav>
    )
}

export default NavBar
