import {useEffect, useRef} from "react";
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import {Link} from "react-router-dom";
import Parallax from 'parallax-js';

const CallToAction = () => {
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        })
        
        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className="section section-bg-image section-padding-t110-b120 newsletter-section overlay-two" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/newsletter.jpg)`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 m-auto">
                        <div className="cta-content text-center">
                            <SectionTitle
    titleOption="color-light text-center mb-0"
    title="Power Your Growth with Dedicated Lead Fulfillment"
    subTitle="Luma Demand delivers high-quality, verified leads directly to vendors and publishers. As your third-party fulfillment partner, we provide a reliable pipeline of targeted demand so you can focus on conversion and revenue growth."
/>
                            <Link to={process.env.PUBLIC_URL + "/contact"} className="btn btn-primary btn-hover-secondary mt-6" data-aos="fade-up" data-aos-delay="300">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape shape-1" id="scene" ref={sceneEl}>
                <span data-depth="1">
                    <img src={process.env.PUBLIC_URL + '/images/shape-animation/newsletter-shape.png'} alt="" />
                </span>
            </div>
        </div>
    )
}

export default CallToAction;
