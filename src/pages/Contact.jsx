import { useState } from 'react'
import { Phone, MessageSquare, Mail, ClipboardList, CalendarCheck, Sparkles, ThumbsUp, ChevronDown } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const contactMethods = [
  {
    Icon: Phone,
    label: 'Call Us',
    value: '216-727-8438',
    desc: 'Give us a call anytime during business hours. We love hearing from you.',
    btnLabel: 'Call Now',
    href: 'tel:+12167278438',
  },
  {
    Icon: MessageSquare,
    label: 'Text Us',
    value: '216-727-8438',
    desc: "Prefer to text? Send us a message and we'll get back to you quickly.",
    btnLabel: 'Send a Text',
    href: 'sms:+12167278438',
  },
  {
    Icon: Mail,
    label: 'Email Us',
    value: 'lumaclean216@gmail.com',
    desc: 'Drop us an email for quotes, questions, or scheduling.',
    btnLabel: 'Send Email',
    href: 'mailto:lumaclean216@gmail.com',
  },
]

const steps = [
  {
    Icon: Phone,
    step: '01',
    title: 'Get in Touch',
    desc: "Call, text, or email Luma with details about your space. We'll respond quickly and get the conversation going.",
  },
  {
    Icon: CalendarCheck,
    step: '02',
    title: 'Pick Your Time',
    desc: "We work around your schedule. Choose a date and time that suits you — no complicated booking process.",
  },
  {
    Icon: Sparkles,
    step: '03',
    title: 'Luma Shows Up',
    desc: "Our team arrives on time, fully equipped, and ready to work. Sit back — we handle everything.",
  },
  {
    Icon: ThumbsUp,
    step: '04',
    title: 'Love Your Space',
    desc: "Walk into a brilliantly clean space and enjoy the difference. We're not satisfied until you are.",
  },
]

const faqs = [
  {
    q: 'How do I get a quote from Luma?',
    a: "Just call, text, or email us with a few details — your space size, number of rooms, and the type of clean you need. We'll send you a fair, upfront quote with no hidden fees.",
  },
  {
    q: 'Do I need to be home during the cleaning?',
    a: "Not at all. Most Luma clients provide access and carry on with their day. We are fully insured and background-checked, so your space is in trusted hands whether you're there or not.",
  },
  {
    q: 'What products does Luma use?',
    a: 'We use professional-grade, eco-friendly products that are safe for kids, pets, and the environment — without cutting corners on results.',
  },
  {
    q: 'How far in advance should I book?',
    a: "We recommend reaching out at least 48 hours ahead, but we always do our best to fit in last-minute requests. Give us a call and we'll make it work.",
  },
  {
    q: 'Does Luma offer recurring cleaning plans?',
    a: 'Absolutely. We offer weekly, bi-weekly, and monthly plans at preferred rates. A regular Luma schedule means your space is always ready — no effort on your end.',
  },
  {
    q: "What if I'm not happy with the results?",
    a: "Luma stands behind every clean. If something wasn't up to standard, let us know within 24 hours and we'll come back to make it right — no extra charge, no questions asked.",
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <ChevronDown size={18} strokeWidth={2} className="faq-chevron" />
      </button>
      {open && <p className="faq-answer">{a}</p>}
    </div>
  )
}

export default function Contact() {
  return (
    <main className="page-wrapper">
      <section className="page-hero">
        <h1>Let's Get Started</h1>
        <p>Reach out to Luma and we'll get your space sparkling. Call, text, or email — whatever works best for you.</p>
      </section>

      {/* Online Booking */}
      <section className="section">
        <div className="section-inner">
          <div className="contact-intro">
            <h2>Book Online</h2>
            <p>Pick a time that works for you and we'll take it from there.</p>
          </div>
          <FadeIn><div className="booking-embed">
            <iframe
              src="https://cal.com/luma-cleaning"
              title="Book with Luma Cleaning Company"
              loading="lazy"
            />
          </div></FadeIn>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="contact-intro">
            <h2>Prefer to Reach Out Directly?</h2>
            <p>Call, text, or email Luma and we'll get back to you fast.</p>
          </div>

          <FadeIn><div className="contact-cards">
            {contactMethods.map(({ Icon, label, value, desc, btnLabel, href }) => (
              <div className="contact-card" key={label}>
                <div className="contact-card-icon">
                  <Icon size={30} color="var(--blue)" strokeWidth={1.75} />
                </div>
                <h3>{label}</h3>
                <div className="contact-card-value">{value}</div>
                <p className="contact-card-desc">{desc}</p>
                <a href={href} className="contact-card-btn">{btnLabel}</a>
              </div>
            ))}
          </div></FadeIn>

        </div>
      </section>

      {/* Business Hours Banner */}
      <section className="hours-banner">
        <p className="hours-banner-label">Business Hours</p>
<div className="hours-banner-cols">
          <div className="hours-banner-col">
            <span className="hours-banner-day">Monday – Friday</span>
            <span className="hours-banner-time">8:00 AM – 6:00 PM</span>
          </div>
          <div className="hours-banner-divider" />
          <div className="hours-banner-col">
            <span className="hours-banner-day">Saturday</span>
            <span className="hours-banner-time">9:00 AM – 4:00 PM</span>
          </div>
          <div className="hours-banner-divider" />
          <div className="hours-banner-col">
            <span className="hours-banner-day">Sunday</span>
            <span className="hours-banner-time">By Appointment</span>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-label">How It Works</p>
            <h2 className="section-title">Simple from Start to Shine</h2>
            <p className="section-subtitle">
              Getting started with Luma is easy. Here's what to expect from your first call to a brilliantly clean space.
            </p>
          </div>
          <FadeIn delay={150}><div className="steps-grid">
            {steps.map(({ Icon, step, title, desc }) => (
              <div className="step-card" key={step}>
                <div className="step-number">{step}</div>
                <div className="step-icon">
                  <Icon size={24} color="var(--blue)" strokeWidth={1.75} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div></FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Questions About Luma</h2>
            <p className="section-subtitle">
              Everything you need to know before booking. Still have questions? Just give us a call.
            </p>
          </div>
          <FadeIn><div className="faq-list">
            {faqs.map(({ q, a }) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div></FadeIn>
        </div>
      </section>
    </main>
  )
}
