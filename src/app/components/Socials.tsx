import facebook from "../../../public/assets/facebook-icon.svg";
import twitter from "../../../public/assets/twitter-icon.svg";
import linkedin from "../../../public/assets/linkedIn-icon.svg";
import instagram from "../../../public/assets/instagram-icon.svg";
import Image from "next/image";

const socials = [facebook, twitter, linkedin, instagram];

export default function Socials() {
  return (
    <div>
      <ul className="flex items-center gap-2">
        {socials.map((social, index) => (
          <li key={index}>
            <Image src={social} alt={social} className="h-10 w-10 pointer" />
          </li>
        ))}
      </ul>
    </div>
  );
}
