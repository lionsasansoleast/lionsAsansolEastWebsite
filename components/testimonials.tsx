const testimonials = [
  {
    name: 'Mrinal Kanti',
    location: 'Asansol, India',
    review: 'I had my cataract surgery at this eye hospital, and the experience was exceptional. The staff was very supportive and caring. The procedure was quick and painless, and my vision has improved significantly. Highly recommend!',
  },
  {
    name: 'Prosenjit Karmakar',
    location: 'Asansol, India',
    review: 'The doctors here are very professional and knowledgeable. I went for a routine eye check-up, and they detected my early-stage glaucoma. Their timely intervention saved my eyesight. Thank you!',
  },
  {
    name: 'Payel Mazumdar',
    location: 'Asansol, India',
    review: 'The comprehensive eye exam was thorough, and the doctor explained everything in detail. I felt very comfortable and assured. The facilities are top-notch, and the staff is very friendly.',
  },
  {
    name: 'Jhulan Bauri',
    location: 'Asansol, India',
    review: 'My son had a minor eye injury, and we rushed to this hospital. The emergency care was prompt, and the doctor was very reassuring. My son recovered quickly thanks to their excellent care.',
  },
  {
    name: 'Meghna Das',
    location: 'Asansol, India',
    review: 'I was worried about my deteriorating vision, but the doctors here provided a detailed diagnosis and treatment plan. My vision has improved, and I am very grateful for their expertise.',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-blue-50">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-600 sm:text-5xl">
          What our patients say...
        </h2>

        <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div className="mb-8 sm:break-inside-avoid" key={index}>
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">

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
