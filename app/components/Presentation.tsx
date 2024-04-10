import DownloadCV from "app/ui/DownloadCV";
import Image from "next/image";

export default function Presentation() {
  return (
    <section className="flex flex-col">
      <p className="mt-10">¡Hola! Me llamo</p>
      <Image
        className="my-4 self-center rounded-full"
        src={"/images/AlexisProfilePic.jpeg"}
        alt="foto de perfil de Alexis"
        width={150}
        height={150}
      />
      <div className="flex flex-col items-center self-end">
        <h1 className="text-xl font-bold text-titleText">Alexis Liao</h1>
        <p className="mb-7">Desarrollador Front-End</p>
        <DownloadCV />
      </div>
    </section>
  );
}
