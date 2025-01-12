import NavBar from "@/components/frontpage/navigation/NavBar";
import Some from "@/components/frontpage/footer/Some";
import Image from "next/image";

export default function kontakt() {
  return (
    <main>
      <nav>
        <NavBar />
      </nav>
      <header>
        <h1 className="text-center text-3xl mt-2 mb-2">Kontakt</h1>
      </header>

      <div className="flex flex-col justify-between items-center md:flex-row-reverse md:justify-around ">
        <div className="max-w-42 w-80 md:w-[24rem] md:h-[14rem] md:border">
          <Image
            className="mb-4 w-full md:w-[24rem]"
            layout="contain"
            width={500}
            height={100}
            src={"/four_5.jpeg"}
            alt="billede af 2 kunder og four amigos butik"
          />
        </div>
        <Some className="flex flex-col justify-between " />
      </div>
      <section className="flex flex-col justify-between items-center md:flex-row md:justify-around mt-4">
        <div className="flex flex-col items-center mt-10 mb-10 md:items-start">
          <h3 className="font-bold md:text-lg"> Åbningstider </h3>
          <p>Tirsdag - Søndag</p>
          <p>16:00 - 20:30(køkken)</p>
          <p>Mandag</p>
          <p>Lukket</p>
        </div>
        <div className="flex flex-col items-center text-center mb-8 md:w-1/4 ">
          <h2 className="text-xl m-auto mb-4 md:text-3xl">
            Ingen bordbooking - Først til tacos
          </h2>
          <p className="font-bold text-base md:text-lg">
            Ønsker Du at Booke Privat Arrangement?
          </p>
          <p className=" text-sm">
            Du har muligheden for at booke hele vores restaurant med plads til
            16 personer. Kontakt for mere information herom.
          </p>
        </div>

        <div className="flex flex-col justify-between items-center">
          <div className="flex mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              strokelinecap="round"
              strokelinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <h3>Mejlgade 46B 8000 Aarhus C</h3>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2221.8583756801813!2d10.210260977255183!3d56.15955326058835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c3fa703ab61af%3A0xde8c7b068bd1b2fe!2sFour%20Amigos!5e0!3m2!1sda!2sdk!4v1701769543892!5m2!1sda!2sdk"
            width="300"
            height="200"
            style={{
              border: 0,
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
