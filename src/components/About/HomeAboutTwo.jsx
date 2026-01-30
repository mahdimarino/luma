import {useState, useEffect, useRef} from "react";
import SectionTitleTwo from '../SectionTitles/SectionTitleTwo';
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

const HomeAboutTwo = () => {
    const [didViewCountUp, setDidViewCountUp] = useState(false);

    const onVisibilityChange = isVisible => {
        if (isVisible) {
        setDidViewCountUp(true);
        }
    };
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
        <div className="section section-padding-top section-padding-bottom-150">
            <div className="container">

                <div className="row">

                    <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
                        <div className="about-content-area mt-0 mb-md-10 mb-10">
                            <SectionTitleTwo 
                                subTitle="Media and digital marketing"
                                title="Powerful solutions
                                to supercharge your
                                marketing and sales funnels"
                            />

                            <div className="row mb-n6">
                                <div className="col-md-5 col-sm-6 col-12 mb-6">
                                    <div className="about-funfact">
                                        <div className="number">
                                            <VisibilitySensor
                                                onChange={onVisibilityChange}
                                                offset={{ top: 10 }}
                                                delayedCall
                                                >
                                                <CountUp end={didViewCountUp ? 2 : 0} />
                                            </VisibilitySensor>M+
                                        </div>
                                        <h6 className="text">Leads Annually</h6>
                                        <p>Attracting leads annually with effective strategies for customer engagement.</p>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-6 col-12 mb-6">
                                    <div className="about-funfact">
                                        <div className="number">
                                            <VisibilitySensor
                                                onChange={onVisibilityChange}
                                                offset={{ top: 10 }}
                                                delayedCall
                                                >
                                                <CountUp end={didViewCountUp ? 99 : 0} />
                                            </VisibilitySensor>%
                                        </div>
                                        <h6 className="text">Client Satisfaction</h6>
                                        <p>Outstanding 99% client satisfaction, a testament to our commitment and excellence.</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-image-area about-shape-animation right-0 me-0">
                            <div className="about-image js-tilt">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/about/about-1.jpg"} alt="" />
                                </Tilt>
                            </div>
                            <div className="about-image js-tilt">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/about/about-2.jpg"} alt="" />
                                </Tilt>
                            </div>
                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                <span data-depth="1"><img src={process.env.PUBLIC_URL + "images/shape-animation/video-shape-1.png"} alt="" /></span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HomeAboutTwo;
