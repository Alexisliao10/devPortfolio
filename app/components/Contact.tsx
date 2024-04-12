"use client";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [copy, setCopy] = useState("copiar");

  const copyText = () => {
    navigator.clipboard.writeText("alexisliao10@gmail.com");
    setCopy("copiado");
  };
  return (
    <div id="contact" className="mb-28 mt-8 space-y-4">
      <h2 className="text-xl text-titleText">Contacto</h2>
      <div className="flex w-fit flex-wrap gap-2 rounded-2xl bg-white px-3 py-1">
        <img src={"/icons/email.svg"} alt="Email icon" width={18} height={18} />
        <span
          onClick={copyText}
          className="font-bold text-black hover:cursor-pointer"
        >
          Alexisliao10@gmail.com
        </span>
        <button
          className={`${copy === "copiar" ? "text-linkColor" : "text-green-500"} ml-3 sm:hidden`}
          onClick={copyText}
        >
          {copy}
        </button>
      </div>
      <div className="flex w-fit gap-2 rounded-2xl bg-white px-3 py-1 hover:cursor-pointer">
        <Image
          className="h-auto w-[20px]"
          src={"/logos/linkedin.png"}
          alt="linkedin logo"
          width={16}
          height={16}
        />
        <a
          href="https://www.linkedin.com/in/alexisliao10"
          className="text-linkColor font-bold"
          rel="noopener noreferrer"
          target="_blank"
        >
          alexisliao10
        </a>
      </div>
    </div>
  );
}
