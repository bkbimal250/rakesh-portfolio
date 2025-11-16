import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Solutions from '../pages/Solutions';
import Industries from '../pages/Industries';
import Work from '../pages/Work';
import WorkPortfolio from '../pages/work/Portfolio';
import WorkClients from '../pages/work/Clients';
import WorkCaseStudies from '../pages/work/CaseStudies';
import Insights from '../pages/Insights';
import News from '../pages/insights/News';
import Blogs from '../pages/insights/Blogs';
import Consulting from '../pages/Consulting';
import Packages from '../pages/Packages';
import PatientSupport from '../pages/PatientSupport';
import VideoProduction from '../pages/VideoProduction';
import Blog from '../pages/Blog';
import BlogDetail from '../pages/BlogDetail';
import Design from '../pages/services/Design';
import DigitalMarketing from '../pages/services/DigitalMarketing';
import Technology from '../pages/services/Technology';
import Fitmate from '../pages/solutions/Fitmate';
import Cam360Studio from '../pages/solutions/Cam360Studio';
import Assessmo from '../pages/solutions/Assessmo';
import Webino from '../pages/solutions/Webino';
import VRMagic from '../pages/solutions/VRMagic';
import BizOn from '../pages/solutions/BizOn';
import Education from '../pages/industries/Education';
import InformationTechnology from '../pages/industries/InformationTechnology';
import Hospitality from '../pages/industries/Hospitality';
import Healthcare from '../pages/industries/Healthcare';
import Pharma from '../pages/industries/Pharma';
import DetailPage from '../pages/DetailPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
        <Route path="/services/design" element={<MainLayout><Design /></MainLayout>} />
        <Route path="/services/design/:slug" element={<MainLayout><DetailPage kind="services-design" heading="Design" /></MainLayout>} />
        <Route path="/services/digital-marketing" element={<MainLayout><DigitalMarketing /></MainLayout>} />
        <Route path="/services/digital-marketing/:slug" element={<MainLayout><DetailPage kind="services-digital-marketing" heading="Digital Marketing" /></MainLayout>} />
        <Route path="/services/technology" element={<MainLayout><Technology /></MainLayout>} />
        <Route path="/services/technology/:slug" element={<MainLayout><DetailPage kind="services-technology" heading="Technology" /></MainLayout>} />
        <Route path="/solutions" element={<MainLayout><Solutions /></MainLayout>} />
        <Route path="/solutions/:slug" element={<MainLayout><DetailPage kind="solutions" heading="Solution" /></MainLayout>} />
        <Route path="/solutions/fitmate" element={<MainLayout><Fitmate /></MainLayout>} />
        <Route path="/solutions/cam360-studio" element={<MainLayout><Cam360Studio /></MainLayout>} />
        <Route path="/solutions/assessmo" element={<MainLayout><Assessmo /></MainLayout>} />
        <Route path="/solutions/webino" element={<MainLayout><Webino /></MainLayout>} />
        <Route path="/solutions/vr-magic" element={<MainLayout><VRMagic /></MainLayout>} />
        <Route path="/solutions/bizon" element={<MainLayout><BizOn /></MainLayout>} />
        <Route path="/industries" element={<MainLayout><Industries /></MainLayout>} />
        <Route path="/industries/:slug" element={<MainLayout><DetailPage kind="industries" heading="Industry" /></MainLayout>} />
        <Route path="/industries/education" element={<MainLayout><Education /></MainLayout>} />
        <Route path="/industries/information-technology" element={<MainLayout><InformationTechnology /></MainLayout>} />
        <Route path="/industries/hospitality" element={<MainLayout><Hospitality /></MainLayout>} />
        <Route path="/industries/healthcare" element={<MainLayout><Healthcare /></MainLayout>} />
        <Route path="/industries/pharma" element={<MainLayout><Pharma /></MainLayout>} />
        <Route path="/work" element={<MainLayout><Work /></MainLayout>} />
        <Route path="/work/portfolio" element={<MainLayout><WorkPortfolio /></MainLayout>} />
        <Route path="/work/clients" element={<MainLayout><WorkClients /></MainLayout>} />
        <Route path="/work/case-studies" element={<MainLayout><WorkCaseStudies /></MainLayout>} />
        <Route path="/insights" element={<MainLayout><Insights /></MainLayout>} />
        <Route path="/insights/news" element={<MainLayout><News /></MainLayout>} />
        <Route path="/insights/blogs" element={<MainLayout><Blogs /></MainLayout>} />
        <Route path="/consulting" element={<MainLayout><Consulting /></MainLayout>} />
        <Route path="/packages" element={<MainLayout><Packages /></MainLayout>} />
        <Route path="/patient-support" element={<MainLayout><PatientSupport /></MainLayout>} />
        <Route path="/video-production" element={<MainLayout><VideoProduction /></MainLayout>} />
        <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
        <Route path="/blog/:id" element={<MainLayout><BlogDetail /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

