export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="page-title-large">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">
          Software Developer | Creative Problem Solver | Lifelong Learner
        </p>
        <p className="hero-description">
          This is a placeholder for your personal introduction. 
          Add your bio, interests, and what makes you unique here.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="/cv" className="btn btn-secondary">View CV</a>
        </div>
      </div>
    </section>
  )
}

