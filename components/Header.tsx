"use client";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col gap-1 items-center">
      <h1 className="sr-only">The best way to memorize</h1>

      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center text-[#404040]">
        "Le moyen le plus rapide de mémoriser ? Facile : faites-le juste avant
        l'examen !"{" "}
      </p>
      <p className="text-[#787878]">avec</p>
      <Link href="/login">
        <h1 className="animate-gradient bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-[4rem] font-black">
          FLASHMIND
        </h1>
      </Link>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
