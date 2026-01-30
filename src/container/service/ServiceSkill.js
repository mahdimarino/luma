import {useState, useEffect, useRef} from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';
import { Link } from "react-router-dom";


const ServiceSkill = () => {
    const [scale] = useState(1.04);
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        })
        
        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className="section section-padding-top skill-section-padding-bottom bg-primary-blue" data-bg-color="#f8faff">
            <div className="container">
                <div className="row">

                <div className="col-xl-5 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-content-area">
                            <SectionTitleTwo 
                                subTitle="Innovative &amp; cutting-edge technology"
                                title="We use latest technologies that are proven and practical"
                            />

                            <p>Empowering businesses, Luma Demand connects organizations of all sizes with their ideal audience at the right moment and place. Elevate your market presence, captivate your audience, and be the standout topic with our unique lead generation and marketing services.</p>

                            <Link className="btn btn-primary btn-hover-secondary mt-xl-12 mt-lg-8 mt-md-6 mt-4" to={process.env.PUBLIC_URL + "/contact"}>Get Started</Link>
                        </div>
                    </div>

                    <div className="offset-xl-1 col-xl-6 col-lg-6 order-lg-2 order-1" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-image-area right-0 skill-image-area">
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "/images/skill/skill-1.jpg"} alt="" />
                                </Tilt>
                            </div>
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "/images/faq/faq-2.jpg"} alt="" />
                                </Tilt>
                            </div>
                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                <span data-depth="1"><img src={process.env.PUBLIC_URL + "/images/shape-animation/video-shape-1.png"} alt="" /></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ServiceSkill;
