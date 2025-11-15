import Header from './Header'
import Hero from './Hero'
import Projects from './Projects'
import Footer from './Footer'

export default function Home() {
  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
