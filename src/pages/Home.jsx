import { Link } from 'react-router-dom'
import { Home, Building2, Sparkles, Package, Star } from 'lucide-react'
import cleanImg from '../assets/clean.jpg'
import FadeIn from '../components/FadeIn'
import heroBg from '../assets/back.jpg'

const reviews = [
  {
    name: 'Sarah M.',
    type: 'Residential Client',
    text: 'Luma transformed my home. I came back to find every room spotless — things I had forgotten were even dirty were gleaming. I will not use anyone else.',
  },
  {
    name: 'James T.',
    type: 'Office Manager',
    text: 'Our office has never looked this good. Luma is consistent, professional, and the team is always respectful of our space. Worth every penny.',
  },
  {
    name: 'Maria L.',
    type: 'Move-Out Client',
    text: 'I was stressed about my move-out clean and Luma completely delivered. Got my full deposit back and the landlord actually complimented how clean it was.',
  },
  {
    name: 'David R.',
    type: 'Restaurant Owner',
    text: 'Running a restaurant means cleanliness is everything. Luma understands that. They show up, get it done, and my kitchen passes every inspection without a second thought.',
  },
]

const services = [
  {
    Icon: Home,
    title: 'Residential',
    desc: 'We bring hotel-level cleanliness to your home. Every room, every surface, every detail — done right.',
  },
  {
    Icon: Building2,
    title: 'Commercial',
    desc: 'A spotless workplace reflects a sharp business. We keep your space looking its best, every single day.',
  },
  {
    Icon: Sparkles,
    title: 'Deep Clean',
    desc: 'When your space needs more than the basics, our deep clean goes further — no corner left behind.',
  },
  {
    Icon: Package,
    title: 'Move In / Move Out',
    desc: "Moving is stressful enough. Let Luma handle the clean so your transition is one less thing to worry about.",
  },
]


export default function HomePage() {
  return (
    <main className="page-wrapper">
      {/* Hero */}
      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-inner">
<h1>Brilliant Cleaning.<br />Brighter Spaces.</h1>
<p>
            Luma delivers spotless results for homes, offices, and businesses across Ohio. Reliable, thorough, and built around your schedule.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">Get In Touch</Link>
            <Link to="/services" className="btn-outline">View Services</Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="section-inner">
          <FadeIn><div className="section-header">
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">Every Space Deserves to Shine</h2>
            <p className="section-subtitle">
              From your home to your business — Luma has a cleaning solution tailored to exactly what you need.
            </p>
          </div></FadeIn>
          <FadeIn delay={150}>
          <div className="services-grid">
            {services.map(({ Icon, title, desc }) => (
              <div className="service-card" key={title}>
                <div className="service-icon">
                  <Icon size={26} color="var(--blue)" strokeWidth={1.75} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link to="/services" className="service-link">Learn more →</Link>
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Us */}
      <section className="section section-alt">
        <div className="section-inner">
          <FadeIn><div className="why-split">
            <div className="why-image-wrap">
              <img src={cleanImg} alt="Luma Cleaning Company" className="why-image" />
            </div>
            <div className="why-content">
              <p className="section-label">Why Choose Luma</p>
              <h2 className="section-title">The Luma Standard</h2>
              <p className="why-body">
                Luma was built on one belief: every space deserves to shine. Over 7 years, we've
                served hundreds of clients across Ohio and surrounding areas
                — earning our reputation through consistency, care, and results that speak for themselves.
              </p>
              <p className="why-body">
                When you book with Luma, you're not just hiring a cleaning crew. You're getting a
                reliable partner who shows up on time, pays attention to the details others miss, and
                doesn't leave until your space looks exactly the way it should.
              </p>
              <Link to="/contact" className="btn-primary why-cta">Get a Free Quote</Link>
            </div>
          </div></FadeIn>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="section-inner">
          <FadeIn><div className="section-header">
            <p className="section-label">Client Reviews</p>
            <h2 className="section-title">Trusted by Hundreds Across Ohio</h2>
            <p className="section-subtitle">
              Real results, real clients. Here's what people are saying about Luma.
            </p>
          </div></FadeIn>
          <FadeIn delay={150}><div className="reviews-grid">
            {reviews.map(r => (
              <div className="review-card" key={r.name}>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} color="#f59e0b" fill="#f59e0b" strokeWidth={0} />
                  ))}
                </div>
                <p className="review-text">"{r.text}"</p>
                <div className="review-author">
                  <div className="review-avatar">{r.name[0]}</div>
                  <div>
                    <div className="review-name">{r.name}</div>
                    <div className="review-type">{r.type}</div>
                  </div>
                </div>
              </div>
            ))}
          </div></FadeIn>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="section-inner">
          <h2>Ready to Let Your Space Shine?</h2>
          <p>Book with Luma today and experience the difference a truly clean space makes.</p>
          <Link to="/contact" className="btn-primary">Get a Free Quote</Link>
        </div>
      </section>
    </main>
  )
}
