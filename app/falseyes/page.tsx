// app/falseyes/page.tsx

import Image from "next/image";
import Logo from "../../public/logo-loopcutter-white-transparent.png"; // du benennst das Bild gleich so

export default function FalseYes() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <Image
        src={Logo}
        alt="LoopCutter Logo"
        width={400}
        height={400}
        className="mb-8 opacity-90"
        priority
      />
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider uppercase text-center">
        The False Yes
      </h1>
      <p className="mt-6 text-xl md:text-2xl text-center max-w-xl leading-relaxed text-gray-300">
        When was the last time you said yes… but meant no?
      </p>
      <p className="mt-12 text-base text-gray-500 hover:text-white transition">
        →{" "}
        <a
          href="https://discord.gg/hxcUm4YHHT"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Join the Pioneer Hub
        </a>
      </p>
    </main>
  );
}

