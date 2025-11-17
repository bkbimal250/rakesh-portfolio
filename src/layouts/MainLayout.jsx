import React from 'react'
import Header from '../components/common/Header'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import FloatingContactButton from '../components/common/FloatingContactButton'
import BackToTopButton from '../components/common/BackToTopButton'

const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-neutral-100">
      <div className="orb left-1/2 top-[-120px] h-72 w-72 bg-primary-500/40" />
      <div className="orb left-[-120px] top-1/3 h-60 w-60 bg-accent-500/40" />
      <div className="orb right-[-140px] top-1/4 h-64 w-64 bg-secondary-500/40" />

      <Header />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
      <FloatingContactButton />
      <BackToTopButton />
    </div>
  )
}

export default MainLayout

