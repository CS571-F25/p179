import Header from './Header'

export default function Contact() {
  return (
    <div className="page-container">
      <Header />
      <div className="page-content-centered">
        <h1 className="page-title">Contact Me</h1>
        <p className="page-subtitle">
          Get in touch with me. I'd love to hear from you!
        </p>
        
        <div className="contact-content">
          <div className="card">
            <h2 className="subsection-title">Contact Information</h2>
            <div className="info-item">
              <strong>Email:</strong>
              <a href="mailto:your.email@example.com">your.email@example.com</a>
            </div>
            <div className="info-item">
              <strong>LinkedIn:</strong>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/yourprofile
              </a>
            </div>
            <div className="info-item">
              <strong>GitHub:</strong>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                github.com/yourusername
              </a>
            </div>
          </div>

          <form className="card">
            <h2 className="subsection-title">Send a Message</h2>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="your.email@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Your message here..."></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

