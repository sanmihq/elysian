import Image from "next/image";
import heatrow from "../../../public/assets/heatrow-logo.svg";
import Link from "next/link";

type Menu = {
  index: number;
  name: string;
  url: string;
};

const menu: Menu[] = [
  {
    index: 1,
    name: "Features",
    url: "#features",
  },
  {
    index: 2,
    name: "Services",
    url: "#services",
  },
  {
    index: 3,
    name: "Feedbacks",
    url: "#feedbacks",
  },
];

export default function Header() {
  return (
    <div>
      <nav className="flex items-center justify-between">
        <Image src={heatrow} alt="elysian" priority className="w-24 lg:w-32" />
        <ul className="hidden xl:flex items-center gap-4">
          {menu.map((menuItem) => (
            <li key={menuItem.index} className="text-sm">
              <Link href={menuItem.url}>{menuItem.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
