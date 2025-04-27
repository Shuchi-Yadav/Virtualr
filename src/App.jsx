import React from 'react'
import Navbar from './components/Navbar';
import HeroSecttion from './components/HeroSecttion';
import FeatureSection from './components/FeatureSection';
import Accelerate from './components/Accelerate';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
        <Navbar />
        <div className="max-w-7xl mx-auto pt-20 px-6">
             <HeroSecttion />
             <FeatureSection />
             <Accelerate />
             <Pricing />
             <Testimonial />
             <Footer />
        </div>
    </div>
  )
}

export default App
