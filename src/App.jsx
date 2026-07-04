import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProductPreview from "./components/ProductPreview.jsx";
import Benefits from "./components/Benefits.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Demo from "./components/Demo.jsx";
import About from "./components/About.jsx";
import FutureFeatures from "./components/FutureFeatures.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";
import CTA from "./components/CTA.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ProductPreview />
        <Benefits />
        <HowItWorks />
        <Demo />
        <About />
        <FutureFeatures />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
