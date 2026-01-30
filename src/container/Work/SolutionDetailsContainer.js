import PropTypes from "prop-types";
import React from 'react';
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import ContactFrom from "../../components/ContactFrom/ContactFrom";
import ContactInformationTwo from "../ContactInformation/ContactInformationTwo";
import ContactInformationthree from "../ContactInformation/ContactInformationThree";
import ContactInformationThree from "../ContactInformation/ContactInformationThree";


const SolutionDetailsContainer = ({ data }) => {
    const cate = data.categories.map((value, i) => {
        return (
            <span className="d-inline" key={i}>{value}{i !== data.categories.length - 1 && " , "}</span>
        )
    })
    return (
        <div className="section section-padding">
             <SectionTitle
                    title="Customizable Campaigns to Meet Your Lead Generation Needs"
                    subTitle=""
                />
            <div className="container">

                <div className="row align-items-center">

                    <div className="col-xl-5 col-lg-6 col-12" data-aos="fade-up">
                        <div className="skill-with-video-content">
                            <div className="section-title-two mb-8">
                                <span className="sub-title">{data.title}</span>
                                <h3 className="title">{data.itemlisttitle}</h3>
                            </div>
                            <p>{data.excerpt}</p>
                            <ul className="agency-list">
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text">{data.itemlist1}</div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text">{data.itemlist2}</div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text">{data.itemlist3}</div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text">{data.itemlist4}</div>
                                </li>
                               

                            </ul>
                            <Link to={process.env.PUBLIC_URL + "/"} className="btn btn-primary btn-hover-secondary"> Get started for free</Link>
                        </div>
                    </div>

                    <div className="offset-xl-1 col-xl-6 col-lg-6 col-12">
                        <div className="video-popup-area">
                            <div className="skill-video">
                                <img className="image" src={process.env.PUBLIC_URL + "/images/video/skill-video.jpg"} alt="video popup" />

                            </div>

                            <div className="shape shape-1 scene">
                                <span data-depth="1">
                                    <img src={process.env.PUBLIC_URL + "/images/shape-animation/video-shape-1.png"} alt="" />
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="container">


                <div className="row">
                    <div className="col-lg-12">
                        <div className="custom-column-thumbnail mt-lg-14 mt-1 text-center" data-aos="fade-up">
                            <img className="w-50 " src={`${process.env.PUBLIC_URL}${data.largeImage}`} alt="Agency" />
                        </div>
                    </div>
                </div>

              

                <div className="row mt-lg-20 mt-12 mb-12">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="digital-marketing" data-aos="fade-up">
                            <h3 className="heading heading-h3">Content Syndication for B2B Tech Marketing and Sales Teams</h3>
                        </div>
                        <Link to={process.env.PUBLIC_URL + "/"} className="btn btn-primary btn-hover-secondary mt-8"> Get started for free</Link>
                    </div>
                    <div className="col-lg-5 col-md-12 col-12 offset-lg-1 mb-12 ">
                        <div className="digital-marketing mt-lg-0 mt-6" data-aos="fade-up">
                            <div className="inner">
                            <ul className="agency-list">
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text">Marketing qualified leads for your nurture pipeline</div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text">Digital and/or telemarketing outreach customizations</div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text">BANT criteria campaign leads</div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text">Profiling campaigns for deeper lead insights</div>
                                </li>
                                <li className="item">
                                    <div className="icon">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="text">Generate registrations for your live or digital events</div>
                                </li>

                            </ul>

                            </div>
                        </div>
                    </div>
                </div>
               {/*  <div className="row pt--100 pb--80">

                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="work-left work-details" data-aos="fade-up">
                            <div className="portfolio-main-info">
                                <h2 className="title">About the <br /> project</h2>
                                <div className="work-details-list mt-12">

                                    <div className="details-list">
                                        <label>Date</label>
                                        <span>{data.date}</span>
                                    </div>

                                    <div className="details-list">
                                        <label>Client</label>
                                        <span>{data.client}</span>
                                    </div>



                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 offset-lg-1 col-12">
                        <div className="work-left work-details mt-6">
                            <div className="work-main-info">
                                <div className="work-content">
                                    <h6 className="title" data-aos="fade-up">aloooooooooooo</h6>

                                    <div className="desc mt-8">
                                        {data.body.map((value, i) => {
                                            return (
                                                <div key={i} className="content mb-5" data-aos="fade-up" dangerouslySetInnerHTML={{ __html: value }} />
                                            )
                                        })}

                                          <div className="work-btn">
                        <Link className="btn btn-primary btn-hover-secondary" to={process.env.PUBLIC_URL + data.btn.link}>{data.btn.text}</Link>
                    </div> 

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
      

               {/*  <div className="custom-layout-gallery mt-lg-20 mt-12">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="thumbnail" data-aos="fade-up">
                                <img className="w-100" src={`${process.env.PUBLIC_URL}/${data.gallery.imageOne}`} alt="Agency" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mt-lg-0 mt-md-0 mt-10">
                            <div className="thumbnail" data-aos="fade-up">
                                <img className="w-100" src={`${process.env.PUBLIC_URL}/${data.gallery.imageTwo}`} alt="Agency" />
                            </div>
                        </div>

                        <div className="col-lg-12 my-6">
                            <div className="thumbnail" data-aos="fade-up">
                                <img className="w-100" src={`${process.env.PUBLIC_URL}/${data.gallery.imageThree}`} alt="Agency" />
                            </div>
                        </div>
                    </div>
                </div> */}


            </div>
            <ContactInformationThree className="mt-12"/>
        </div>
    )
}

SolutionDetailsContainer.propTypes = {
    data: PropTypes.object
};

export default SolutionDetailsContainer;
