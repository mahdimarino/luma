import {useEffect,  Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import NavScrollTop from './components/NavScrollTop';
import Policies from "./pages/Policies";



const Home = lazy(() => import("./pages/Home"));
const HomeTwo = lazy(() => import("./pages/HomeTwo"));
const HomeThree = lazy(() => import("./pages/HomeThree"));
const About = lazy(() => import("./pages/About"));
const Service = lazy(() => import("./pages/Service"));
const Work = lazy(() => import("./pages/Work"));
const WorkDetails = lazy(() => import("./pages/WorkDetails"));
const BlogGrid = lazy(() => import("./pages/BlogGrid"));
const BlogClassic = lazy(() => import("./pages/BlogClassic"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const SolutionDetails = lazy(() => import("./pages/SolutionDetails"));
const BlogCategories = lazy(() => import("./pages/BlogCategories"));
const BlogTag = lazy(() => import("./pages/BlogTag"));
const Contact = lazy(() => import("./pages/Contact"));
const Generate = lazy(() => import("./pages/Generate"));
const Nurture = lazy(() => import("./pages/Nurture"));
const GlobalData = lazy(()=> import("./pages/GlobalData"))
const Solutions = lazy(()=> import("./pages/Solutions"))




function App() {
  useEffect(() => {
    AOS.init({
        offset: 80,
        duration: 1000,
        once: true,
        easing: 'ease',
    });
    AOS.refresh();
    
  }, [])
  return (
      <Router >
        <NavScrollTop>
          <Suspense fallback={<div />}>
                <Routes >
                  <Route path={`${process.env.PUBLIC_URL + "/"}`} element={<Home/>}/>
                  <Route path={`${process.env.PUBLIC_URL + "/home"}`} element={<Home/>}/>
                  <Route path={`${process.env.PUBLIC_URL + "/home-two"}`} element={<HomeTwo/>}/>
                  <Route path={`${process.env.PUBLIC_URL + "/home-three"}`} element={<HomeThree/>}/>
                  <Route path={`${process.env.PUBLIC_URL + "/about"}`} element={<About/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/service"}`} element={<Service/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/work"}`} element={<Work/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/work-details/:id"}`} element={<WorkDetails/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/blog-grid"}`} element={<BlogGrid/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/blog-classic"}`} element={<BlogClassic/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/tag/:slug"}`} element={<BlogTag/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/category/:slug"}`} element={<BlogCategories/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/blog-details/:id"}`}element={<BlogDetails/>} />
            <Route path={`${process.env.PUBLIC_URL + "/privacy-policy/:id"}`} element={<PrivacyPolicy />} />
                  <Route path={`${process.env.PUBLIC_URL + "/solution-details/:id"}`}element={<SolutionDetails/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/contact"}`} element={<Contact/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/generate"}`} element={<Generate/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/nurture"}`} element={<Nurture/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/globaldata"}`} element={<GlobalData/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/solutions"}`} element={<Solutions/>} />
            <Route path={`${process.env.PUBLIC_URL + "/policies"}`} element={<Policies />} />
                </Routes>
            </Suspense>
        </NavScrollTop>
      </Router>
  );
}

export default App;