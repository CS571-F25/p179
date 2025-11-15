import { Link } from 'react-router'

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/">Your Name</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cv">CV</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
          <li><Link to="/ai-usage">AI Usage</Link></li>
        </ul>
      </nav>
    </header>
  )
}

