import Image from "next/image";

const About = () => {
  return (
    <section className="bg-blue-50" id="about">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-[200px] overflow-hidden rounded-full lg:order-last lg:h-full">
            <Image
              alt="Smiling boy doing eye test"
              src={"/images/smiling-boy-eye.png"}
              className="inset-0 w-full h-full object-contain"
              width={200}
              height={200}
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl text-slate-600">
              About Us
            </h2>

            <div className="mt-4 space-y-4 text-gray-600">
              <p>
                Established in the year 2006, Lions Asansol East Eye Hospital is a
                community service organization dedicated to serving the
                community and helping those in need.
              </p>
              <p>
                We provide a range of eye care services to patients of all ages,
                from routine eye exams to advanced surgical procedures. Our team
                of experienced ophthalmologists and staff are committed to
                providing the best care possible to our patients.{" "}
              </p>
              <p>
                We are proud to be a part of the Lions Clubs International
                network, a global organization that serves the community through
                various service projects. Our hospital is equipped with
                state-of-the-art facilities and technology to ensure that our
                patients receive the highest quality care. We are committed to
                making eye care accessible to all members of the community,
                regardless of their ability to pay. We offer a range of
                services, including eye exams, cataract surgery, glaucoma
                treatment, and more. Our mission is to provide compassionate
                care to our patients and help them maintain healthy vision for
                life. We invite you to learn more about our hospital and the
                services we offer.{" "}
              </p>
          
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
