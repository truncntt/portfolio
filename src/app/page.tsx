import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import MainSection from "@/components/MainSection";
import { Testimonial } from "@/components/Testimonial";
import { NavBar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <NavBar />
      <MainSection />
      <Services />
      <Projects />
      <Resume />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
