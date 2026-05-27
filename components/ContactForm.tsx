'use client';

import { useState } from 'react';
import { Send, CheckCircle, Upload } from 'lucide-react';

const services = [
  'Groundworks & Construction',
  'Resin Bound Surfacing',
  'Tarmac & Asphalt',
  'Paving & Patios',
  'Drainage Solutions',
  'Haulage & Plant Hire',
  'Commercial Project',
  'Other',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    details: '',
  });

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.firstName.trim()) errs.firstName = 'First name is required';
    if (!form.lastName.trim()) errs.lastName = 'Last name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      errs.email = 'Valid email is required';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    if (!form.service) errs.service = 'Please select a service';
    if (!form.details.trim()) errs.details = 'Please describe your project';
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const [serverError, setServerError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setServerError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSubmitted(true);
    } catch {
      setServerError('Something went wrong. Please call us directly on +44 7624 229993.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
        <div className="w-16 h-16 rounded-full bg-[#43D5E9]/10 border border-[#43D5E9]/30 flex items-center justify-center">
          <CheckCircle size={32} className="text-[#43D5E9]" />
        </div>
        <h3 className="font-heading font-bold text-2xl text-[#111111] uppercase">
          Message Sent!
        </h3>
        <p className="font-body text-[#6B7280] max-w-sm">
          Thank you for reaching out. We&apos;ll get back to you shortly to arrange your free
          site survey.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="font-body text-xs font-semibold text-[#111111] uppercase tracking-wide">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="John"
            className={`px-4 py-3 rounded-xl border font-body text-sm text-[#111111] bg-white outline-none transition-all duration-200 focus:border-[#43D5E9] focus:ring-2 focus:ring-[#43D5E9]/20 ${errors.firstName ? 'border-red-400' : 'border-[#111111]/15'}`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs font-body">{errors.firstName}</p>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-body text-xs font-semibold text-[#111111] uppercase tracking-wide">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Doe"
            className={`px-4 py-3 rounded-xl border font-body text-sm text-[#111111] bg-white outline-none transition-all duration-200 focus:border-[#43D5E9] focus:ring-2 focus:ring-[#43D5E9]/20 ${errors.lastName ? 'border-red-400' : 'border-[#111111]/15'}`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs font-body">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="font-body text-xs font-semibold text-[#111111] uppercase tracking-wide">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={`px-4 py-3 rounded-xl border font-body text-sm text-[#111111] bg-white outline-none transition-all duration-200 focus:border-[#43D5E9] focus:ring-2 focus:ring-[#43D5E9]/20 ${errors.email ? 'border-red-400' : 'border-[#111111]/15'}`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs font-body">{errors.email}</p>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-body text-xs font-semibold text-[#111111] uppercase tracking-wide">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+44 7624 000000"
            className={`px-4 py-3 rounded-xl border font-body text-sm text-[#111111] bg-white outline-none transition-all duration-200 focus:border-[#43D5E9] focus:ring-2 focus:ring-[#43D5E9]/20 ${errors.phone ? 'border-red-400' : 'border-[#111111]/15'}`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs font-body">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-body text-xs font-semibold text-[#111111] uppercase tracking-wide">
          Service Required *
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className={`px-4 py-3 rounded-xl border font-body text-sm text-[#111111] bg-white outline-none transition-all duration-200 focus:border-[#43D5E9] focus:ring-2 focus:ring-[#43D5E9]/20 ${errors.service ? 'border-red-400' : 'border-[#111111]/15'}`}
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="text-red-500 text-xs font-body">{errors.service}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-body text-xs font-semibold text-[#111111] uppercase tracking-wide">
          Project Details *
        </label>
        <textarea
          name="details"
          value={form.details}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your project, location, size, and any specific requirements..."
          className={`px-4 py-3 rounded-xl border font-body text-sm text-[#111111] bg-white outline-none transition-all duration-200 focus:border-[#43D5E9] focus:ring-2 focus:ring-[#43D5E9]/20 resize-none ${errors.details ? 'border-red-400' : 'border-[#111111]/15'}`}
        />
        {errors.details && (
          <p className="text-red-500 text-xs font-body">{errors.details}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-body text-xs font-semibold text-[#111111] uppercase tracking-wide">
          Upload Photos / Plans
        </label>
        <label className="flex items-center gap-3 px-4 py-3 rounded-xl border border-dashed border-[#111111]/15 bg-[#F7F7F7] cursor-pointer hover:border-[#43D5E9]/40 hover:bg-[#43D5E9]/5 transition-all duration-200">
          <Upload size={16} className="text-[#6B7280]" />
          <span className="font-body text-sm text-[#6B7280]">
            Click to upload or drag & drop files here
          </span>
          <input type="file" multiple accept="image/*,.pdf" className="hidden" />
        </label>
      </div>

      {serverError && (
        <p className="text-red-500 text-sm font-body text-center">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2 px-8 py-4 bg-[#43D5E9] text-black font-body font-semibold rounded-xl transition-all duration-300 hover:bg-[#7EF3FF] hover:shadow-cyan disabled:opacity-60 disabled:cursor-not-allowed text-sm"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Request Free Quote
          </>
        )}
      </button>
    </form>
  );
}
