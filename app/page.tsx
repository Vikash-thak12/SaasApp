import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import PricePage from "@/components/PricePage";
import ProductPage from "@/components/ProductPage";
import Testimonial from "@/components/Testimonial";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductPage />
      <PricePage />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  );
}
