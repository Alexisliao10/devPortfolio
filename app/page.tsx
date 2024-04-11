import Contact from "@/components/Contact";
import Knowledge from "@/components/Knowledge";
import Presentation from "@/components/Presentation";
import Projects from "@/components/Projects";

export default function Home(): JSX.Element {
  return (
    <main className="px-6">
      <Presentation />
      <Projects />
      {/* <Knowledge /> */}
      {/* <Contact /> */}
    </main>
  );
}
