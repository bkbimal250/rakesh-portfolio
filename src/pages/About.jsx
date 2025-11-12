import React from 'react';
import AboutHero from '../components/about/AboutHero';
import FeaturesSection from '../components/about/FeaturesSection';
import AboutTeam from '../components/about/AboutTeam';
import AboutStats from '../components/about/AboutStats';
import ResumeOverview from '../components/about/ResumeOverview';
import ExperienceSection from '../components/about/ExperienceSection';
import EducationCertifications from '../components/about/EducationCertifications';
import SkillsLanguages from '../components/about/SkillsLanguages';
import CTASection from '../components/home/CTASection';

const About = () => {
  return (
    <>
      <AboutHero />
      <ResumeOverview />
      <ExperienceSection />
      <FeaturesSection />
      <AboutTeam />
      <EducationCertifications />
      <SkillsLanguages />
      <AboutStats />
      <CTASection />
    </>
  );
};

export default About;

