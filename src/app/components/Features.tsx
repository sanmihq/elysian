import Face from "../../../public/assets/faces-icon.svg";
import Eye from "../../../public/assets/eye-icon.svg";
import ANPR from "../../../public/assets/anpr-icon.svg";
import Smart from "../../../public/assets/smart-icon.svg";
import Network from "../../../public/assets/wifi-icon.svg";
import Door from "../../../public/assets/door-icon.svg";
import Image from "next/image";

type Features = {
  image: any;
  title: string;
  text: string;
};

const features: Features[] = [
  {
    image: Face,
    title: "Familiar Faces",
    text: "Our facial recognition system cross-references faces attempting to gain access into the Heatrow Estate with the register database of residents. We value your safety so no one gets in unless you say so.",
  },
  {
    image: Eye,
    title: "Eye in the Sky",
    text: "Our infrared (IR) outdoor bullet cameras are immune to whatever or lighting, and come in different resolutions and lenses. Sit back anywhere in the world and record everything going on in and around your home with crisp clear audio.",
  },
  {
    image: ANPR,
    title: "ANPR",
    text: "Our Automatic Number Plate Recognition system scans every plate trying to gain access into the Heatrow estate and cross references with our database of registered plates. Our advances algorithms can decode even blurry and dark images.",
  },
  {
    image: Smart,
    title: "Smart Savings",
    text: "Our Automatic Number Plate Recognition system scans every plate trying to gain access into the Heatrow estate and cross references with our database of registered plates. Our advances algorithms can decode even blurry and dark images.",
  },
  {
    image: Network,
    title: "Fibre to the Home",
    text: "Our finer-optic cables are setup around the estate to deliver lightening fast internet whenever you need it at the comfort of your home. We present to you the future of broadband.",
  },
  {
    image: Door,
    title: "The Walls Have Ears",
    text: "Lock the doors, open the windows control the lights, and much more without lifting a finger, The tongue really is powerful. Go on, Speak, your home us listening.",
  },
];

export default function Features() {
  return (
    <section className="bg-faded p-12 md:p-16">
      <div className="max-w-[100rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start gap-8">
              <Image
                src={feature.image}
                alt={feature.title}
                priority
                className={
                  feature.image === ANPR ? "w-20 h-auto" : "w-12 h-auto"
                }
              />
              <h2 className="text-2xl lg:text-3xl font-medium w-1/2">
                {feature.title}
              </h2>
              <p className="text-xs lg:text-sm text-default">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
