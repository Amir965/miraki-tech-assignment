import Cta from "@/components/CTA/Cta";
import About from "@/components/about/About";
import Featured from "@/components/featured/Featured";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/projects/Projects";
import CreativeTeam from "@/components/team/CreativeTeam";
import Text from "@/components/text/Text";

export default function Home() {
  return (
  
    <main className="">
      <Navbar />
      <About />
      <Featured/>
      <Projects/>
      <CreativeTeam />
      <Text/>
      {/* <Cta/> */}
      <Footer/>
    </main>
  );
}
