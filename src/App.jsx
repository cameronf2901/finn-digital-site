import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import WhatIDo from './components/WhatIDo.jsx';
import Work from './components/Work.jsx';
import Pricing from './components/Pricing.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <WhatIDo />
        <Work />
        <Pricing />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;