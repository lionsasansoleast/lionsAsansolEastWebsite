import Link from "next/link";
import Logo from "../app/icons/logo";

const navItems = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Book Appointment",
    href: "#appointment",
  },
];

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-10 py-2">
      <div className="container flex h-16 max-w-screen-xl justify-between items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block" href="/">
          <div className="flex gap-2 items-center">
            <Logo className="w-16 h-16" />
            <div className="flex flex-col">
              <h6 className="font-bold text-lg text-blue-600">Lions Asansol East</h6>
              <span className="text-sm text-gray-500">Eye Hospital</span>
            </div>
          </div>
        </Link>

        <div className="flex items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    className="text-gray-400 hover:text-blue-700"
                    href={item.href}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
