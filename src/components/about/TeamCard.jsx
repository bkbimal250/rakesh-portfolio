import React from 'react'
import { motion as Motion } from 'framer-motion'

const TeamCard = ({ member, index }) => {
  return (
    <Motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="glass gradient-border flex h-full flex-col justify-between rounded-3xl border border-white/10 p-8"
    >
      <div>
        <div
          className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${member.accent} text-xl font-semibold text-slate-900`}
        >
          {member.initials}
        </div>
        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-400">{member.role}</p>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">{member.bio}</p>
      </div>
      <div className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">LinkedIn · Portfolio</div>
    </Motion.article>
  )
}

export default TeamCard

