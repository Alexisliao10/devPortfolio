import Presentation from "@/components/Presentation";
import Projects from "@/components/Projects";
import Knowledge from "@/components/Knowledge";
import Contact from "@/components/Contact";

export default function Home(): JSX.Element {
  return (
    <main className="m-[0_auto] max-w-6xl px-6">
      <Presentation />
      <Projects />
      <Knowledge />
      <Contact />
    </main>
  );
}
