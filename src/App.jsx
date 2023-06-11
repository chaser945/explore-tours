import About from "./components/About"
import Aside from "./components/Aside"
import Featured from "./components/Featured"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"

const App = () => {
  return (
    <div>
      <Navbar />
      <Aside />
      <Hero />
      <About />
      <Services />
      <Featured />
      <Footer />
    </div>
  )
}
export default App
