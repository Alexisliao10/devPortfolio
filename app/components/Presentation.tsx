import DownloadCV from "app/ui/DownloadCV";
import Image from "next/image";

export default function Presentation() {
  return (
    <>
      <section className="my-8 flex grid-cols-2 grid-rows-[50px_1fr] flex-col sm:mt-20 sm:grid sm:h-[500px]">
        <p className="mt-2 sm:text-3xl">¡Hola! Me llamo</p>
        <Image
          className="col-start-2 row-start-2 my-4 place-self-center self-center rounded-full sm:size-52"
          src={"/images/AlexisProfilePic.jpeg"}
          alt="foto de perfil de Alexis"
          width={150}
          height={150}
        />
        <div className="flex flex-col items-center self-center sm:col-start-1 sm:row-start-2 sm:place-self-center">
          <h1 className="text-2xl font-bold text-titleText sm:text-5xl">
            Alexis Liao
          </h1>
          <p className="mb-7 sm:mt-6 sm:text-2xl">Desarrollador Front-End</p>
          <DownloadCV />
        </div>
      </section>
      <section id="aboutme">
        <h2 className="rounded-2xl text-xl font-medium text-titleText sm:w-fit sm:bg-secondaryColor sm:px-8 sm:py-3 sm:text-2xl">
          Perfil
        </h2>
        <p className="mt-3 rounded-2xl sm:bg-secondaryColor sm:px-8 sm:py-6 sm:text-lg">
          {
            "Soy un entusiasta del desarrollo front-end con un fuerte deseo de crecimiento. Busco oportunidades para unirme a un equipo profesional y estoy emocionado por colaborar en proyectos desafiantes y contribuir al éxito del equipo con mi dedicación y pasión por la tecnología."
          }
        </p>
        <h3 className="mb-4 mt-14 text-titleText sm:px-8 sm:text-xl">
          Objectivos:
        </h3>
        <ul className="space-y-5 sm:px-8">
          <li className="ml-5 list-disc sm:text-lg">
            Colaborar con un equipo diverso y dinámico para ampliar mi
            perspectiva y mejorar mis habilidades de trabajo en equipo.
          </li>
          <li className="ml-5 list-disc sm:text-lg">
            Aprender del desarrollo back-end y covertirme en un Full-Stack
            Developer.
          </li>
          <li className="ml-5 list-disc sm:text-lg">
            Explorar nuevas tecnologías y metodologías para mantenerme
            actualizado y competitivo en el campo del desarrollo de software.
          </li>
        </ul>
      </section>
    </>
  );
}
