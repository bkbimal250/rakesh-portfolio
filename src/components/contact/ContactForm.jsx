import React, { useState } from 'react'
import axios from 'axios'
import { contactChannels, services } from '../../data/content'
import { designServices, digitalMarketing, technologyServices } from '../../data/siteCatalog'
import useTheme from '../../hooks/useTheme'

const initialState = {
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
}

const ContactForm = () => {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState({ loading: false, success: null, error: null })
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const labelColor = isLight ? 'text-[#BF4B00]' : 'text-slate-400'
  const inputBg = isLight ? 'bg-white text-[#1A1A1A]' : 'bg-white/5 text-slate-100'
  const inputBorder = isLight ? 'border-[#FF6F00]/25 focus:border-[#FF6F00]' : 'border-white/10 focus:border-sky-400'
  const selectBg = isLight ? 'bg-white text-[#1A1A1A]' : 'bg-white/5 text-slate-100'
  const textareaBg = inputBg
  const textareaBorder = inputBorder
  const buttonClass = isLight
    ? 'bg-gradient-to-r from-[#FF6F00] via-[#FF8F1F] to-[#F4A300] text-white shadow-lg shadow-[#FF6F00]/30'
    : 'bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 text-slate-900 shadow-lg shadow-sky-500/40'
  const statusText = isLight ? 'text-[#4A4A4A]' : 'text-slate-300'
  const statusLink = isLight ? 'text-[#FF6F00]' : 'text-sky-300'

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ loading: true, success: null, error: null })

    try {
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT
      if (endpoint) {
        await axios.post(endpoint, form)
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800))
      }
      setStatus({ loading: false, success: 'Thanks! We will reach out within 24 hours.', error: null })
      setForm(initialState)
    } catch (error) {
      setStatus({
        loading: false,
        success: null,
        error: 'Unable to send your message right now. Please email us directly.',
      })
      console.error('Contact form submission error', error)
    }
  }

  return (
    <form className={`glass gradient-border rounded-3xl p-10 ${isLight ? 'border-[#FF6F00]/25' : 'border-white/10'}`} onSubmit={handleSubmit} autoComplete="off">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={`text-xs font-semibold uppercase tracking-[0.3em] ${labelColor}`} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className={`h-12 rounded-full border px-4 text-sm outline-none transition ${inputBg} ${inputBorder}`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={`text-xs font-semibold uppercase tracking-[0.3em] ${labelColor}`} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className={`h-12 rounded-full border px-4 text-sm outline-none transition ${inputBg} ${inputBorder}`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={`text-xs font-semibold uppercase tracking-[0.3em] ${labelColor}`} htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            className={`h-12 rounded-full border px-4 text-sm outline-none transition ${inputBg} ${inputBorder}`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={`text-xs font-semibold uppercase tracking-[0.3em] ${labelColor}`} htmlFor="service">
            Service
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`h-12 rounded-full border px-4 text-sm outline-none transition ${selectBg} ${inputBorder}`}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.name} value={service.name}>
                {service.name}
              </option>
            ))}
            {designServices.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            {digitalMarketing.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            {technologyServices.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Consulting">Consulting</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <label className={`text-xs font-semibold uppercase tracking-[0.3em] ${labelColor}`} htmlFor="message">
          Project Overview
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          className={`rounded-3xl border p-4 text-sm outline-none transition ${textareaBg} ${textareaBorder}`}
        />
      </div>

      <button
        type="submit"
        disabled={status.loading}
        className={`mt-8 inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 ${buttonClass}`}
      >
        {status.loading ? 'Sending...' : 'Send Request'}
      </button>

      {(status.success || status.error) && (
        <p className={`mt-4 text-sm ${statusText}`}>
          {status.success || (
            <span>
              {status.error}{' '}
              <a className={statusLink} href={`mailto:${contactChannels[1].value}`}>
                {contactChannels[1].value}
              </a>
            </span>
          )}
        </p>
      )}
    </form>
  )
}

export default ContactForm

