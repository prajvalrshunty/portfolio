import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '' // Spam protection bot trap
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message with at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Spam honeypot trap
    if (formData.honeypot) {
      console.warn('Bot submission blocked');
      return;
    }

    if (!validate()) return;
    if (status === 'sending') return;

    setStatus('sending');
    setErrorMessage('');

    // Check if EmailJS keys are configured in environment
    if (!serviceId || !templateId || !publicKey) {
      // Meaningful instruction when environment keys are yet to be configured
      setTimeout(() => {
        setStatus('error');
        setErrorMessage(
          'EmailJS environment variables (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY) are not configured yet. Please configure them in your .env file or contact directly at ' +
          personalInfo.contact.email
        );
      }, 700);
      return;
    }

    try {
      const templateParams = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        to_email: personalInfo.contact.email
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200 || response.text === 'OK') {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#3B82F6', '#60A5FA', '#93C5FD', '#FFFFFF']
        });
      } else {
        throw new Error(`Email service responded with status ${response.status}`);
      }
    } catch (err) {
      console.error('EmailJS submission error:', err);
      setStatus('error');
      setErrorMessage(
        err?.text || err?.message || 'Failed to dispatch message. Please try again or reach out directly via email.'
      );
    }
  };

  return (
    <div className="relative rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/90 dark:bg-zinc-950/70 p-7 sm:p-10 backdrop-blur-md shadow-sm dark:shadow-xl">
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Spam protection trap - hidden from normal users */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-2 font-medium"
            >
              Full Name <span className="text-blue-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Jane Doe"
              disabled={status === 'sending'}
              className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 text-sm focus:outline-none transition-all duration-200 ${
                errors.name
                  ? 'border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                  : 'border-zinc-200 dark:border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
              }`}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-500 dark:text-red-400 font-mono flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-2 font-medium"
            >
              Email Address <span className="text-blue-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. jane@company.com"
              disabled={status === 'sending'}
              className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 text-sm focus:outline-none transition-all duration-200 ${
                errors.email
                  ? 'border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                  : 'border-zinc-200 dark:border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-500 dark:text-red-400 font-mono flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-xs font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-2 font-medium"
          >
            Subject <span className="text-blue-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Internship Inquiry / Technical Collaboration"
            disabled={status === 'sending'}
            className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 text-sm focus:outline-none transition-all duration-200 ${
              errors.subject
                ? 'border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                : 'border-zinc-200 dark:border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            }`}
          />
          {errors.subject && (
            <p className="mt-1.5 text-xs text-red-500 dark:text-red-400 font-mono flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-2 font-medium"
          >
            Message <span className="text-blue-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your role, project, or opportunity..."
            disabled={status === 'sending'}
            className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 text-sm focus:outline-none transition-all duration-200 resize-none ${
              errors.message
                ? 'border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                : 'border-zinc-200 dark:border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            }`}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-red-500 dark:text-red-400 font-mono flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.message}
            </p>
          )}
        </div>

        {/* Status Feedback Banners */}
        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono flex items-start gap-3"
            >
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Message delivered successfully!</p>
                <p className="text-emerald-700 dark:text-emerald-300/80 mt-0.5">
                  Thank you for reaching out. I have received your email and will respond promptly.
                </p>
              </div>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-mono flex items-start gap-3"
            >
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Unable to transmit message</p>
                <p className="text-red-700 dark:text-red-300/80 mt-0.5 leading-relaxed">{errorMessage}</p>
                <a
                  href={`mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(
                    formData.subject || 'Direct Inquiry'
                  )}&body=${encodeURIComponent(formData.message)}`}
                  className="inline-block mt-2 underline text-red-600 dark:text-white font-bold hover:text-red-800 dark:hover:text-blue-300"
                >
                  Click here to email directly via your mail client &rarr;
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-800 disabled:text-zinc-500 text-white font-mono font-semibold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {status === 'sending' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>DISPATCHING MESSAGE...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                <span>SEND MESSAGE</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
