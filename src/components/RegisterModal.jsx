import React, { useState, useEffect } from 'react'
import { X, User, Mail, Phone, Building2, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react'

const steps = ['Personal', 'Company', 'Done']

const RegisterModal = ({ onClose }) => {
  const [step, setStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    company: '', role: '', message: ''
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const validate = () => {
    const errs = {}
    if (step === 0) {
      if (!form.name.trim())  errs.name  = 'Full name is required'
      if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email required'
      if (!form.phone.trim()) errs.phone = 'Phone number is required'
    }
    if (step === 1) {
      if (!form.company.trim()) errs.company = 'Company name is required'
      if (!form.role.trim())    errs.role    = 'Your role is required'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const next = () => {
    if (!validate()) return
    if (step < 1) { setStep(s => s + 1); return }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setStep(2)
    }, 1600)
  }

  const change = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setErrors(er => ({ ...er, [e.target.name]: '' }))
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(15,23,42,0.55)', backdropFilter: 'blur(6px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
        style={{ animation: 'fadeUp 0.35s ease forwards' }}
      >
        <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #4361ee 0%, #f72585 100%)' }} />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all duration-200 cursor-pointer"
          aria-label="Close modal"
        >
          <X size={16} />
        </button>

        <div className="p-8">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-base">D</span>
              </div>
              <span className="font-display font-semibold text-slate-800">DesignCo</span>
            </div>
            {!submitted ? (
              <>
                <h2 className="font-display text-2xl font-bold text-slate-900 mt-4">Get Started Free</h2>
                <p className="text-slate-500 text-sm mt-1">Join 12,000+ teams already using DesignCo.</p>
              </>
            ) : (
              <h2 className="font-display text-2xl font-bold text-slate-900 mt-4">You're all set! 🎉</h2>
            )}
          </div>

          {!submitted && (
            <div className="flex items-center gap-2 mb-7">
              {steps.slice(0, 2).map((label, i) => (
                <React.Fragment key={label}>
                  <div className="flex items-center gap-1.5">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
                      i < step ? 'bg-brand-500 text-white' :
                      i === step ? 'bg-brand-500 text-white ring-4 ring-brand-100' :
                      'bg-slate-100 text-slate-400'
                    }`}>
                      {i < step ? <CheckCircle2 size={12} /> : i + 1}
                    </div>
                    <span className={`text-xs font-medium ${i === step ? 'text-brand-500' : 'text-slate-400'}`}>{label}</span>
                  </div>
                  {i < 1 && (
                    <div className={`flex-1 h-0.5 rounded-full transition-all duration-500 ${step > i ? 'bg-brand-500' : 'bg-slate-200'}`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}

          {step === 0 && (
            <div className="space-y-4" style={{ animation: 'fadeIn 0.3s ease' }}>
              <Field icon={<User size={15} />} label="Full Name" name="name" placeholder="Jacqueline Wright" value={form.name} onChange={change} error={errors.name} />
              <Field icon={<Mail size={15} />} label="Email Address" name="email" type="email" placeholder="you@company.com" value={form.email} onChange={change} error={errors.email} />
              <Field icon={<Phone size={15} />} label="Phone Number" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={change} error={errors.phone} />
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4" style={{ animation: 'fadeIn 0.3s ease' }}>
              <Field icon={<Building2 size={15} />} label="Company Name" name="company" placeholder="Acme Corp" value={form.company} onChange={change} error={errors.company} />
              <Field icon={<User size={15} />} label="Your Role" name="role" placeholder="CEO / Designer / Developer" value={form.role} onChange={change} error={errors.role} />
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Message <span className="text-slate-400 font-normal">(optional)</span></label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={change}
                  rows={3}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all duration-200 resize-none"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="text-center py-6" style={{ animation: 'fadeUp 0.4s ease' }}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} className="text-green-500" />
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-2">
                Thanks, <strong className="text-slate-900">{form.name.split(' ')[0]}</strong>! We've received your details.
              </p>
              <p className="text-slate-400 text-xs">Our team will reach out to <span className="text-brand-500 font-medium">{form.email}</span> within 24 hours.</p>
              <div className="mt-6 p-4 bg-brand-50 rounded-xl border border-brand-100">
                <p className="text-brand-600 text-xs font-medium">✦ Check your inbox for a confirmation email</p>
              </div>
              <button
                onClick={onClose}
                className="mt-6 w-full bg-brand-500 hover:bg-brand-600 text-white font-medium py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/30 active:scale-95 cursor-pointer"
              >
                Back to Site
              </button>
            </div>
          )}

          {!submitted && (
            <div className="mt-6 flex gap-3">
              {step > 0 && (
                <button
                  onClick={() => setStep(s => s - 1)}
                  className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:border-slate-300 transition-all duration-200 cursor-pointer"
                >
                  Back
                </button>
              )}
              <button
                onClick={next}
                disabled={loading}
                className="flex-1 group flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 disabled:bg-brand-400 text-white font-medium py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/30 active:scale-95 cursor-pointer"
              >
                {loading ? (
                  <><Loader2 size={16} className="animate-spin" /> Submitting...</>
                ) : step === 1 ? (
                  <><CheckCircle2 size={16} /> Submit</>
                ) : (
                  <>Continue <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" /></>
                )}
              </button>
            </div>
          )}

          {!submitted && (
            <p className="text-center text-xs text-slate-400 mt-4">
              By signing up you agree to our{' '}
              <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-brand-500 cursor-pointer hover:underline">Terms</a> &{' '}
              <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-brand-500 cursor-pointer hover:underline">Privacy Policy</a>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

const Field = ({ icon, label, name, type = 'text', placeholder, value, onChange, error }) => (
  <div>
    <label className="block text-xs font-semibold text-slate-600 mb-1.5">{label}</label>
    <div className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border transition-all duration-200 bg-white ${
      error ? 'border-red-400 ring-2 ring-red-100' : 'border-slate-200 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-500/20'
    }`}>
      <span className="text-slate-400 flex-shrink-0">{icon}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="flex-1 text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
      />
    </div>
    {error && <p className="text-xs text-red-500 mt-1 ml-1">{error}</p>}
  </div>
)

export default RegisterModal
