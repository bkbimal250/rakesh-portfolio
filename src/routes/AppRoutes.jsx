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
import NewsDetail from '../pages/insights/NewsDetail';
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
import SolutionDetail from '../pages/solutions/SolutionDetail';
import IndustryDetail from '../pages/industries/IndustryDetail';
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
        <Route path="/solutions/:slug" element={<MainLayout><SolutionDetail /></MainLayout>} />
        <Route path="/industries" element={<MainLayout><Industries /></MainLayout>} />
        <Route path="/industries/:slug" element={<MainLayout><IndustryDetail /></MainLayout>} />
        <Route path="/work" element={<MainLayout><Work /></MainLayout>} />
        <Route path="/work/portfolio" element={<MainLayout><WorkPortfolio /></MainLayout>} />
        <Route path="/work/clients" element={<MainLayout><WorkClients /></MainLayout>} />
        <Route path="/work/case-studies" element={<MainLayout><WorkCaseStudies /></MainLayout>} />
        <Route path="/insights" element={<MainLayout><Insights /></MainLayout>} />
        <Route path="/insights/news" element={<MainLayout><News /></MainLayout>} />
        <Route path="/insights/news/:id" element={<MainLayout><NewsDetail /></MainLayout>} />
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

