import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/heatrow-logo.svg";
import Link from "next/link";

function getCurrentYear() {
  const currentYear = new Date().getFullYear();
  return currentYear;
}

const year = getCurrentYear();

export default function Consultation() {
  return (
    <footer className="bg-black p-12 md:p-16">
      <div className="max-w-[100rem] mx-auto">
        <h2>Book Consultation</h2>
        <form className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-between text-white">
          <div className="flex flex-col gap-4 sm:w-2/5">
            <input
              type="text"
              placeholder="enter your name"
              className="bg-transparent text-xs border border-default p-3 outline-none"
            />
            <input
              type="email"
              placeholder="enter your email"
              className="bg-transparent text-xs border border-default p-3 outline-none"
            />
            <input
              type="text"
              placeholder="enter your telephone"
              className="bg-transparent text-xs border border-default p-3 outline-none"
            />
          </div>
          <div className="flex flex-col gap-4 sm:gap-0 sm:justify-between sm:w-[55%]">
            <input
              type="text"
              placeholder="write something"
              className="bg-transparent text-xs border border-default p-3 pb-[4.5rem] outline-none"
            />
            <button
              type="button"
              className="uppercase bg-gold inline-block text-xs w-fit p-3 text-black font-normal"
            >
              Send message
            </button>
          </div>
        </form>

        <div className="mt-20">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div>
              <Image
                src={Logo}
                alt="Elysian"
                priority
                width={100}
                height={100}
              />
              <div className="flex flex-col gap-3 mt-6 text-default text-sm">
                <Link href="tel:+2348146560674">+234 814 656 0674</Link>
                <Link href="tel:+2348163658455">+234 816 365 8455</Link>
                <Link href="mailto:elysian@gmail.com">elysian@gmail.com</Link>
                <p className="mt-2">© Copyright {year}, Elysian Estate.</p>
              </div>
            </div>

            <div> 
              <p className="text-default text-sm">
                1st Floor, Mujjab El Yakub Building, Danladi Street,
                <br />
                Central Business District Abuja. FCT Nigeria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
