import Image from "next/image";

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col gap-10">
        <Image
          src="/logo.png"
          alt="logo"
          width={300}
          height={200}
          className="object-contain pb-0"
        />
        <Image
          src="/des.png"
          alt="anime"
          width={400}
          height={400}
          className="object-contain"
        />
        <h1 className="sm:text-6xl text-4xl text-white lg:max-w-lg font-bold leading-[120%]">
          WELCOME TO THE <span className="red-gradient">THO POTTER</span>
          WIZAR WORD HOGWARTS
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        <Image src="/anime.png" alt="anime" fill className="object-contain" />
      </div>
    </header>
  );
}

export default Hero;
