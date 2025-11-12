import React from 'react'
import { team } from '../../data/content'
import TeamCard from './TeamCard'

const AboutTeam = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.12),_transparent_45%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">Leadership</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">The core partners behind every sprint</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">
            Multidisciplinary strategists, storytellers, and growth scientists partnering with your teams to build,
            experiment, and scale momentum.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutTeam

