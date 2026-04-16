import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ContactCta from "../components/sections/ContactCta";
import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";

export default function Home() {
  return (
    <div className="theme-shell theme-bg">
      <Header />
      <main>
        <Hero />
        <Stats />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}