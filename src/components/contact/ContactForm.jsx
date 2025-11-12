import React, { useState } from 'react'
import axios from 'axios'
import { contactChannels } from '../../data/content'

const initialState = {
  name: '',
  email: '',
  company: '',
  budget: '',
  message: '',
}

const ContactForm = () => {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

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
    <form
      className="glass gradient-border rounded-3xl border border-white/10 p-10"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="h-12 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-slate-100 outline-none transition focus:border-sky-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="h-12 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-slate-100 outline-none transition focus:border-sky-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            className="h-12 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-slate-100 outline-none transition focus:border-sky-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400" htmlFor="budget">
            Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="h-12 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-slate-100 outline-none transition focus:border-sky-400"
          >
            <option value="">Select a range</option>
            <option value="25k-50k">$25k – $50k</option>
            <option value="50k-100k">$50k – $100k</option>
            <option value="100k-plus">$100k+</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400" htmlFor="message">
          Project Overview
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100 outline-none transition focus:border-sky-400"
        />
      </div>

      <button
        type="submit"
        disabled={status.loading}
        className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/40 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status.loading ? 'Sending...' : 'Send Request'}
      </button>

      {(status.success || status.error) && (
        <p className="mt-4 text-sm text-slate-300">
          {status.success || (
            <span>
              {status.error}{' '}
              <a className="text-sky-300" href={`mailto:${contactChannels[1].value}`}>
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

