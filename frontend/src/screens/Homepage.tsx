import Navbar from "../components/Navbar"
import Hero from '../components/Hero'
import CountDown from '../components/CountDown'
import Gallery from "../components/Gallery"
import Details from "../components/Details"
import Venue from '../components/Venue'
import Gift from '../components/Gift'
import RSVP from '../components/RSVP'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CountDown />
      <Gallery />
      <Details />
      <section id='venue'>
        <Venue />
      </section>
      <section id='gift-registry'>
        <Gift />
      </section>
      <section id="rsvp">
        <RSVP />
      </section>
      <Footer />
    </div>
  )
}

export default Homepage
