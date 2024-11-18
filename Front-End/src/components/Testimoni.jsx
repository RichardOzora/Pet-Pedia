import { useState } from "react";
import user1 from "../assets/frontend_assets/user-1.jpg";
import user2 from "../assets/frontend_assets/user-2.jpg";
import user3 from "../assets/frontend_assets/user-3.jpg";

const testimonials = [
  {
    header: "The best pet purchase I've ever made!",
    text: `I bought my furry friend through this site, and it was such a smooth and easy process! The variety of pets and clear profiles made it simple to choose the perfect companion.`,
    author: "Roshen Lynn",
    location: "Bandung, Indonesia",
    photo: user1,
  },
  {
    header: "A life-changing experience for my family",
    text: `I never imagined finding a pet so quickly and easily. The site's search options let us filter by breed, age, and size. Our new puppy is everything we hoped for.`,
    author: "Sarah Miles",
    location: "Surabaya, Indonesia",
    photo: user2,
  },
  {
    header: "A trustworthy platform for pet adoption",
    text: `The adoption process was seamless, and the customer support was always available to help with any questions. I feel confident knowing that all pets are verified and cared for.`,
    author: "Dennis Gomes",
    location: "Jakarta, Indonesia",
    photo: user3,
  },
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-lg text-gray-500">Not sure yet?</h2>
        <h3 className="text-3xl font-bold mt-2">
        Thousands of pet lovers have found their perfect companion!
        </h3>
      </div>

      <div className="relative max-w-4xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex flex-col items-center text-center p-8"
            >
              <h5 className="text-xl font-semibold mb-4">
                {testimonial.header}
              </h5>
              <blockquote className="text-gray-600 italic mb-6">
                {testimonial.text}
              </blockquote>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h6 className="font-bold">{testimonial.author}</h6>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 text-gray-600 hover:bg-gray-100"
        >
          &larr;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 text-gray-600 hover:bg-gray-100"
        >
          &rarr;
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-indigo-600" : "bg-indigo-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
