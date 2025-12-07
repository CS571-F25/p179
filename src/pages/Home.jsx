import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from './Projects'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <Hero />
        <Projects />
      </main>
      {/* <Footer /> */}
    </div>
  )
}
