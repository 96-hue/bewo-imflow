import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import {
  Leistungen,
  UeberUns,
  Aufnahme,
  Qualitaet,
  Teams,
  Karriere,
  CTABlock,
  Footer,
} from './components/Sections'
import { ContactForm } from './components/ContactForm'

export function App() {
  const [active, setActive] = useState('home')

  const onNav = (id) => {
    setActive(id)
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <Header active={active} onNav={onNav} />
      <main id="home">
        <Hero onNav={onNav} />
        <Leistungen />
        <UeberUns />
        <Aufnahme />
        <Qualitaet />
        <Teams />
        <Karriere />
        <CTABlock onNav={onNav} />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
