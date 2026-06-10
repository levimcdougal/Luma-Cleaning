import { Link } from 'react-router-dom'
import { Phone, MessageSquare, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              Luma Cleaning Company
            </div>
            <p className="footer-tagline">
              Brilliant cleaning for homes and businesses across Ohio. Luma brings the shine so you can focus on what matters.
            </p>
            <p className="footer-areas">Ohio · Surrounding Areas</p>
          </div>

          <div className="footer-col footer-col-services">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Residential</Link></li>
              <li><Link to="/services">Commercial</Link></li>
              <li><Link to="/services">Deep Clean</Link></li>
              <li><Link to="/services">Move In / Move Out</Link></li>
              <li><Link to="/services">Office Cleaning</Link></li>
              <li><Link to="/services">Restaurant Cleaning</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>
              <Phone size={13} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              216-727-8438<br />
              <MessageSquare size={13} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              216-727-8438<br />
              <Mail size={13} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              lumacleaning@gmail.com
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {year} Luma Cleaning Company. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
