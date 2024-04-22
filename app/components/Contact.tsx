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
      <h2 className="text-xl text-titleText sm:mb-8 sm:text-2xl">Contacto</h2>
      <div className="flex w-fit flex-wrap gap-2 rounded-2xl bg-white px-3 py-1">
        <img src={"/icons/email.svg"} alt="Email icon" width={18} height={18} />
        <span
          onClick={copyText}
          className="tooltip-container font-bold text-black hover:cursor-pointer sm:text-lg"
          tabIndex={0}
        >
          Alexisliao10@gmail.com
          <span className="tooltip hidden sm:block">
            click para copiar email
          </span>
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
          className="font-bold text-linkColor sm:text-lg"
          rel="noopener noreferrer"
          target="_blank"
        >
          alexisliao10
        </a>
      </div>
    </div>
  );
}
