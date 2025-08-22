import React, { useState } from "react";

const faqs = [
  {
    question: "What is BUYit?",
    answer:
      "BUYit is an online shopping platform that offers a wide range of products at affordable prices with a seamless shopping experience.",
  },
  {
    question: "How can I create an account?",
    answer:
      "Click on the Sign-up button in the navbar, fill in your details, and verify your email to create an account.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit/debit cards, UPI, net banking, and digital wallets for your convenience.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer hassle-free refunds on eligible products within 7 days of purchase. Terms and conditions apply.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6" id="faqs">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Frequently Asked <span className="text-indigo-600">Questions</span>
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border hover:shadow-md transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <span className="text-gray-800 font-medium">{faq.question}</span>
                <span className="text-indigo-600 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
