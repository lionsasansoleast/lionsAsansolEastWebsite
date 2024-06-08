const Appointment = () => {
  return (
    <section className="py-24 bg-gray-50" id="appointment">
      <h2 className="text-center text-4xl font-bold tracking-tight text-gray-600 sm:text-5xl">
        Book your appointment
      </h2>
      <p className="text-lg text-center mt-2 font-light">
        "Alone we can do so little; together we can do so much." - Lions Club
      </p>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center mt-8">
        <div className="w-[600px] max-w-full mx-auto">
          <form className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
