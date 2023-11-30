import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center p-24 bg-black overflow-hidden">
      <div>
        <div className="flex flex-col items-center w-screen md:flex-row">
          <div className="md:w-1/2">
            <Image
              src={"/hero.png"}
              width={430}
              height={430}
              alt="Nada Logo"
              className="w-full"
            />
          </div>
          <div className="w-1/2">
            <div className="text-white text-xl font-bold md:text-8xl">
              Introducing
            </div>
            <Image src={"nada.svg"} width={640} height={480} alt="Nada Logo" />
            <div className="text-gray-500 text-left font-light text-lg md:text-2xl">
              Beyond Future
            </div>
            <div className="bg-orange-500 h-1 w-20 md:w-60"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
