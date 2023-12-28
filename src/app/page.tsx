import Image from "next/image";
import Header from "./components/Header";
import heroImage from "../../public/assets/header-bg.webp";
import Socials from "./components/Socials";
import Features from "./components/Features";
import Apartments from "./components/Apartments";
import Testimonials from "./components/Testimonials";
import Consultation from "./components/Consultation";

export default function Home() {
  return (
    <main>
      <section className="md:h-screen flex flex-col md:flex-row">
        <div className="w-full lg:w-1/2 p-8 md:p-16">
          <Header />
          <div className="mt-32 w-full lg:w-[80%] mx-auto">
            <p className="text-lg lg:text-2xl text-default lg:w-full md:w-1/2">
              elegantly designed 3 bedroom apartments
            </p>
            <h1 className="text-7xl lg:text-8xl font-medium my-10 leading-normal">
              Maple
            </h1>
            <Socials />
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <Image
            src={heroImage}
            alt="hero image"
            className="w-full h-full"
            objectFit="cover"
            priority
          />

          <div className="hidden lg:block absolute bg-white top-[60%] -left-[10%] p-3 shadow-custom">
            <h2 className="bg-gold px-8 py-12 text-3xl font-semibold">444</h2>
            <p className="text-xs font-bold text-default text-center py-10 px-6">
              TOTAL UNITS
            </p>
          </div>
        </div>
      </section>

      <div id="#features">
        <Features />
      </div>

      <div id="#services">
        <Apartments />
      </div>

      <div id="#feedbacks">
        <Testimonials />
      </div>

      <div>
        <Consultation />
      </div>
    </main>
  );
}
