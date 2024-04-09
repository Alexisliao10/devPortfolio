import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Knowledge from "@/components/Knowledge";
import Presentation from "@/components/Presentation";
import Projects from "@/components/Projects";

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <Projects />
        <Knowledge />
        <Contact />
      </main>
      <footer>Portafolio Alexis Liao 2024</footer>
    </>
  );
}
