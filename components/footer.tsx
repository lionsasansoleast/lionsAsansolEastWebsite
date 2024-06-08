import Logo from "../app/icons/logo";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center items-center text-blue-600 lg:justify-start">
              <Logo className="w-24 h-24" />
              <div>
                <h6 className="font-bold text-xl">Lions Asansol East</h6>
                <span className="text-sm text-gray-500">Eye Hospital</span>
              </div>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              We are a community service organization dedicated to serving the
              community and helping those in need.
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#about"
              >
                {" "}
                About{" "}
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#services"
              >
                {" "}
                Services{" "}
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#appointment"
              >
                {" "}
                Book Appointment
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; {currentYear} Lions Asansol East. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
