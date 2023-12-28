import Image from "next/image";
import React from "react";
import Quote from "../../../public/assets/quoute-icon.svg";

type Testimonial = {
  name: string;
  testimony: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Mr & Mrs Bamidele",
    testimony:
      "I love the fact that there is a linking road in Mabushi opposite blue Cabana which is really amazing. I love the road network and the structure is impressive.",
  },
  {
    name: "Ojo Daniel",
    testimony:
      "So far so good, services really fantastic and the area is fantastic. The quality of work is fantastic and I look forward to a more beneficial relationship. Cosgrove equals fantastic for me.",
  },
  {
    name: "Mr & Mrs Joesph",
    testimony:
      "Not bad I visited your site and was a bit confused about the villa and detached spacing but thanks to the officer in charge I got clarification. I am actually an ambassador for Cosgrove because I believe in the brand.",
  },
  {
    name: "Mr & Mrs Danladi",
    testimony:
      "I love the fact that there is a linking road in Mabushi opposite blue Cabana which is really amazing. I love the road network and the structure is impressive.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-faded px-12 sm:px-16 py-20">
      <div className="flex flex-col gap-10 sm:flex-row items-center max-w-[100rem] mx-auto">
        <div className="w-full sm:w-[30%] text-start sm:text-center">
          <h2 className="font-semibold text-2xl lg:text-3xl">
            What Others <br />
            are saying
          </h2>
        </div>
        <div className="sm:flex-1 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col gap-4 items-start">
              <Image
                src={Quote}
                alt="quote icon"
                height={35}
                width={35}
                priority
              />
              <p className="text-xs lg:text-sm text-default">
                {testimonial.testimony}
              </p>
              <h4 className="text-xs lg:text-sm font-semibold">
                {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
