import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import EmailSignup from "@/components/EmailSignup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ValueProposition />
      <Services />
      <WhyChooseUs />
      <FAQ />
      <EmailSignup />
      <Footer />
    </main>
  );
}
