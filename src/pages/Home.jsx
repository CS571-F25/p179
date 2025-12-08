import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from './Projects'
import Footer from '../components/Footer'
import AnimatedDotsBackground from '../components/AnimatedDotsBackground'

export default function Home() {
  return (
    <div className="page-container" style={{ position: 'relative' }}>
      <AnimatedDotsBackground />
      <Header style={{ position: 'relative', zIndex: 1 }} />
      <main className="main-content" style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Projects />
      </main>
      {/* <Footer /> */}
    </div>
  )
}
