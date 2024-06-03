const testimonials = [
  {
    name: "Rama Devi",
    review:
      "I had a great experience at Lions eye hospital Asansol. The staff was very friendly and helpful. The doctors were very professional and knowledgeable. I would highly recommend this hospital to anyone looking for eye care services.",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  },
  {
    name: "Ramesh Kumar",
    review:
      "Amazing service and great staff. The doctors are very knowledgeable and professional. I would highly recommend this hospital to anyone looking for eye care services.",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  },
  {
    name: "Sita Devi",
    review:
      "I had a great experience at Lions eye hospital Asansol. The staff was very friendly and helpful. The doctors were very professional and knowledgeable. I would highly recommend this hospital to anyone looking for eye care services.",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  },
  {
    name: "Rajesh Kumar",
    review:
      "Amazing service and great staff. The doctors are very knowledgeable and professional. I would highly recommend this hospital to anyone looking for eye care services.",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  },
  {
    name: "Sushma Devi",
    review:
      "I had a great experience at Lions eye hospital Asansol. The staff was very friendly and helpful. The doctors were very professional and knowledgeable. I would highly recommend this hospital to anyone looking for eye care services.",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  },
  {
    name: "Rajesh Kumar",
    review:
      "Amazing service and great staff. The doctors are very knowledgeable and professional. I would highly recommend this hospital to anyone looking for eye care services.",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
  },
  
];

const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-600 sm:text-5xl">
          What our patients say...
        </h2>

        <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src={testimonial.image}
                    className="size-14 rounded-full object-cover"
                  />

                  <div>
                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      {testimonial.name}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">{testimonial.review}</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
