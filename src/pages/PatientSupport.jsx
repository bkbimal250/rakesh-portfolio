import React from 'react'
import SectionTitle from '../components/common/SectionTitle'

const PatientSupport = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionTitle title="Patient Support Program" subtitle="Connecting every step of your health journey" />
      <div className="mt-8 rounded-xl border border-neutral-700/30 bg-neutral-900/40 p-6">
        <div className="h-48 w-full rounded-lg border border-dashed border-neutral-600/50" />
        <p className="mt-4 text-sm text-neutral-300">
          Comprehensive resources that bridge the gaps in patient care—appointments, reports, reminders, and wellness programs in one connected experience.
        </p>
      </div>
    </section>
  )
}

export default PatientSupport


