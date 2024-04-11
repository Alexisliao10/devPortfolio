import DownloadCV from "app/ui/DownloadCV";
import Image from "next/image";

export default function Presentation() {
  return (
    <>
      <section className="my-8 flex flex-col">
        <p className="mt-10">¡Hola! Me llamo</p>
        <Image
          className="my-4 self-center rounded-full"
          src={"/images/AlexisProfilePic.jpeg"}
          alt="foto de perfil de Alexis"
          width={150}
          height={150}
        />
        <div className="flex flex-col items-center self-end">
          <h1 className="text-2xl font-bold text-titleText ">Alexis Liao</h1>
          <p className="mb-7">Desarrollador Front-End</p>
          <DownloadCV />
        </div>
      </section>
      <section id="aboutme">
        <h2 className="text-xl font-medium text-titleText">Sobre mi</h2>
        <p className="mt-3">
          "Soy un entusiasta del desarrollo front-end con un fuerte deseo de
          crecimiento. Busco oportunidades para unirme a un equipo profesional y
          estoy emocionado por colaborar en proyectos desafiantes y contribuir
          al éxito del equipo con mi dedicación y pasión por la tecnología."
        </p>
        <h3 className="mb-4 mt-14 text-titleText">Objectivos:</h3>
        <ul className="space-y-5">
          <li className="ml-5 list-disc">
            Colaborar con un equipo diverso y dinámico para ampliar mi
            perspectiva y mejorar mis habilidades de trabajo en equipo.
          </li>
          <li className="ml-5 list-disc">
            Aprender del desarrollo back-end y covertirme en un Full-Stack
            Developer.
          </li>
          <li className="ml-5 list-disc">
            Explorar nuevas tecnologías y metodologías para mantenerme
            actualizado y competitivo en el campo del desarrollo de software.
          </li>
        </ul>
      </section>
    </>
  );
}
