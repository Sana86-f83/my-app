import { Inter } from "next/font/google";
import Link from "next/link";



// For google font
const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const navItems = [
    {
      name: "Works",
      link: "#",
    },

    {
      name: "Blog",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    },
  ];

  return (
    <ul
      className={`${inter.className} m-[66px] space-x-6 flex items-center justify-end h-[24px] font-medium text-[20px]`}
    >

      {navItems.map((item, i) => (
        <li key={i}>
          <Link href={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
    // </div>
  );
};

export default Navbar;
