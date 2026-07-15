import { useState } from 'react';
import PasswordGate from './components/PasswordGate';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Lessons from './components/Lessons';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [unlocked, setUnlocked] = useState(false);

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div className="min-h-screen bg-cream font-manrope">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Lessons />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
