import { Link } from 'react-router-dom'
import { Home, Building2, Sparkles, Package, Briefcase, Utensils } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import resImg from '../assets/res.jpg'
import comImg from '../assets/com.jpg'
import deepImg from '../assets/deep.jpg'
import moveImg from '../assets/move.jpg'
import foodImg from '../assets/food.jpg'
import ofImg from '../assets/of.jpg'

const services = [
  {
    Icon: Home,
    image: resImg,
    title: 'Residential Cleaning',
    desc: 'Your home should feel like a sanctuary. Luma covers every room, every corner, and every surface — leaving your space fresh, bright, and genuinely clean.',
    includes: [
      'Kitchen deep clean (counters, appliances, sink)',
      'Bathroom scrubbing and sanitizing',
      'Vacuuming and mopping all floors',
      'Dusting surfaces, blinds, and fans',
      'Bedroom tidying and linen change (on request)',
      'Trash removal throughout',
    ],
  },
  {
    Icon: Building2,
    image: comImg,
    title: 'Commercial Cleaning',
    desc: 'A clean business makes a strong impression. Luma offers flexible scheduling — including after-hours — so your space stays spotless without interrupting your operations.',
    includes: [
      'Common areas, lobbies, and hallways',
      'Restroom deep cleaning and restocking',
      'Workstation and desk sanitizing',
      'Break rooms and kitchen areas',
      'Window sill and glass cleaning',
      'Trash collection and liner replacement',
    ],
  },
  {
    Icon: Sparkles,
    image: deepImg,
    title: 'Deep Clean',
    desc: 'When a regular clean isn\'t enough, Luma\'s deep clean goes all the way — built-up grime, hard-to-reach areas, and every surface that\'s been overlooked. Perfect for first-time bookings or seasonal resets.',
    includes: [
      'Inside oven, fridge, and microwave',
      'Grout scrubbing in bathrooms and kitchens',
      'Baseboards, door frames, and light switches',
      'Window tracks and sill deep clean',
      'Behind and under furniture and appliances',
      'Full sanitization of high-touch surfaces',
    ],
  },
  {
    Icon: Package,
    image: moveImg,
    title: 'Move In / Move Out',
    desc: "Moving is already stressful — your clean shouldn't be. Whether you're leaving a place or settling into a new one, Luma handles every inch so you can focus on the move itself.",
    includes: [
      'Interior cabinet and drawer cleaning',
      'Appliance deep clean inside and out',
      'Baseboards, trim, and windowsills wiped',
      'Walls spot-cleaned where needed',
      'All floors scrubbed and polished',
      'Final walkthrough to ensure nothing is missed',
    ],
  },
  {
    Icon: Briefcase,
    image: ofImg,
    title: 'Office Cleaning',
    desc: 'A clean office is a productive one. Luma keeps your workspace tidy, sanitized, and ready for your team every day — on a schedule that fits your business, not ours.',
    includes: [
      'Desk and workstation sanitizing',
      'Conference rooms cleaned and reset',
      'Restrooms deep cleaned and restocked',
      'Kitchen and break room cleaning',
      'Lobbies and reception areas polished',
      'Trash and recycling removal',
    ],
  },
  {
    Icon: Utensils,
    image: foodImg,
    title: 'Restaurant Cleaning',
    desc: 'Food-service spaces demand a higher standard of clean. Luma keeps your kitchen, dining area, and prep surfaces spotless, health-code compliant, and guest-ready every time you open your doors.',
    includes: [
      'Commercial kitchen degreasing and sanitizing',
      'Hood, vent, and exhaust cleaning',
      'Dining area deep clean and floor scrubbing',
      'Food prep surface disinfection',
      'Restroom cleaning and restocking',
      'Trash and grease removal',
    ],
  },
]

export default function Services() {
  return (
    <main className="page-wrapper">
      <section className="page-hero">
        <h1>What Luma Offers</h1>
        <p>Six specialized services covering every space — residential, commercial, and everything in between.</p>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="services-full-grid">
            {services.map(({ Icon, image, title, desc, includes }, i) => (
              <FadeIn key={title} delay={i * 100}>
              <div className="service-card-full">
                {image
                  ? <img src={image} alt={title} className="service-card-img" />
                  : <div className="service-icon" style={{ width: 56, height: 56, marginBottom: 4 }}>
                      <Icon size={28} color="var(--blue)" strokeWidth={1.75} />
                    </div>
                }
                <h2>{title}</h2>
                <p>{desc}</p>
                <div className="service-includes">
                  <h4>What's Included</h4>
                  <ul>
                    {includes.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="section-inner">
          <h2>Not Sure Where to Start?</h2>
          <p>Reach out and Luma will help you find the right service for your space and budget.</p>
          <Link to="/contact" className="btn-primary">Talk to Us</Link>
        </div>
      </section>
    </main>
  )
}
