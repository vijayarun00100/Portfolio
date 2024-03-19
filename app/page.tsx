import Nav from "@/components/nav";
import Intro from "@/components/intro";
import About from "@/components/about";
import Experience from "@/components/experience";
import Project from "@/components/projects";
import Contact from "@/components/contact";
import Honors from "@/components/honors"
export default function Home() {
  return (
    <div className="overflow-hidden">
      <Nav />
      <Intro />
      <About />
      <section id="experience">
        <Experience />
      </section>
      <section id="explore">
        <Project />
      </section>
      <Honors />
      <Contact />
    </div>
  );
}
