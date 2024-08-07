import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });
export default function DownloadCV() {
  return (
    <a
      href="https://drive.google.com/file/d/1BmDvDtGIxgwTiWlmJh0G5Keb-toEvBeq/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-fit space-x-1 rounded-3xl bg-titleText px-5 py-1 align-middle hover:scale-110 hover:bg-titleText/80 hover:transition-transform"
    >
      <div className={`${roboto.className} font-bold text-black sm:text-2xl`}>
        Descargar CV
      </div>
      <ArrowDownTrayIcon className="size-6 text-black sm:size-8" />
    </a>
  );
}
