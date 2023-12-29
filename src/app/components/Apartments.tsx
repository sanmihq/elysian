import Villa from "../../../public/assets/villa-bg.webp";
import Oak from "../../../public/assets/oak-bg.webp";
import Oakville from "../../../public/assets/oakville-bg.webp";
import Maple from "../../../public/assets/maple.webp";
import Image from "next/image";

export default function Apartments() {
  return (
    <section className="px-10 py-12 md:px-16">
      <div className="w-[98%] mx-auto">
        <h2 className="text-3xl font-medium mb-10">
          Live in the <br />
          Future
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/5 flex flex-col gap-8">
            <div className="h-[70%]">
              <Image
                src={Villa}
                alt="villa"
                objectFit="cover"
                objectPosition="center"
                className="w-full h-full"
              />
            </div>
            <div className="bg-gold p-10  h-[30%]">
              <h3 className="text-3xl font-medium">
                Comfort <br /> is a choice
              </h3>
              <p className="text-sm mt-2">and we offer one of those</p>
            </div>
          </div>
          <div className="w-full md:w-3/5 flex flex-col gap-8">
            <div className="flex md:flex-row gap-8">
              <div className="w-1/2 md:w-2/5 h-[250px] md:h-[380px]">
                <Image
                  src={Oak}
                  alt="oak"
                  objectFit="cover"
                  objectPosition="center"
                  className="w-full h-full"
                />
              </div>
              <div className="w-1/2 md:w-3/5 h-[250px] md:h-[380px]">
                <Image
                  src={Oakville}
                  alt="oakville"
                  objectFit="cover"
                  objectPosition="center"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="w-full">
              <Image
                src={Maple}
                alt="maple"
                objectFit="cover"
                objectPosition="center"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
