import React from 'react'
import Header from '../components/common/Header'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-slate-100">
      <div className="orb left-1/2 top-[-120px] h-72 w-72 bg-sky-500/40" />
      <div className="orb left-[-120px] top-1/3 h-60 w-60 bg-emerald-500/40" />
      <div className="orb right-[-140px] top-1/4 h-64 w-64 bg-indigo-500/40" />

      <Header />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout

