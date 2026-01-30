import {useState, useEffect, useRef} from "react";
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import AccordionWrap from '../../components/Accordion/AccordionWrap.jsx';
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';

const Faq = () => {
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
        <div className="faq-section section section-padding-top bg-primary-blue">
            <div className="container">
                <div className="row row-cols-lg-2 row-cols-1 mb-n6">
                    <div className="col mb-6" data-aos="fade-up">
                        <div className="faq-content">
                            <SectionTitleTwo 
                                subTitle="Build a Distinct Career with us!"
                                title="Unleash Your Potential: Build a Distinct and Rewarding Career Journey with Us!"
                            />

<p>At Luma Demand, our philosophy revolves around the profound belief that every individual brings a unique set of skills and perspectives to the table. It is our unwavering mission to not only recognize but also unlock the untapped potential residing within each member of our team. We understand that diversity is a catalyst for innovation, and we actively foster an inclusive environment where every voice is heard, valued, and embraced. <br/><br/>
We embrace the concept of mutual growth, firmly believing that your personal and professional development directly contributes to the overall success and prosperity of our collective journey. Your aspirations and achievements become integral components in the tapestry of our organizational success. At Luma Demand, we are not just a workplace; we are a community dedicated to nurturing the aspirations of our team members.
</p>

                            
                        </div>
                    </div>

                    <div className="col mb-6 ps-xl-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-image-area faq-image-area">
                            <div className="about-image right-n50">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "/images/faq/faq-2.jpg"} alt="" />
                                </Tilt>
                            </div>
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "/images/faq/faq-1.jpg"} alt="" />
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

export default Faq;
