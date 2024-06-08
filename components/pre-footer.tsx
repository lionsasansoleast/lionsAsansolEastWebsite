import Image from "next/image";

const Prefooter = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-[200px] overflow-hidden rounded-full lg:order-last lg:h-full">
            <Image
              alt="Smiling boy doing eye test"
              src={'/images/smiling-boy-eye.png'}
              className="absolute inset-0 h-full w-full object-cover"
              fill
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl text-slate-600">
              Reach out to us today
            </h2>

            <p className="mt-4 text-gray-600">
              We aim to provide the best service to our patients and the
              community. Reach out to us today to learn more about our services
              and how we can help you.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prefooter;
