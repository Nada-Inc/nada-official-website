import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24 bg-black">
      <div>
        <Image src={"nada.svg"} width={640} height={480} alt="Nada Logo" />
        <div className="text-gray-500 text-left font-light text-lg md:text-2xl">
          Beyond Future
        </div>
      </div>
    </main>
  );
}
