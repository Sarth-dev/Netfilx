'use client';
import { useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';

const faqs = [
  { question: 'What is Netflix?', answer: 'Netflix is a streaming service that offers movies, TV shows, and documentaries.' },
  { question: 'How much does Netflix cost?', answer: 'Plans start at ₹149 per month. Cancel anytime.' },
  { question: 'Where can I watch?', answer: 'You can watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.' },
  { question: 'How do I cancel?', answer: 'Cancel your subscription anytime through your account settings.' },
  { question: 'What can I watch on Netflix?', answer: 'A wide variety of award-winning TV shows, movies, anime, documentaries, and more.' },
  { question: 'Is Netflix good for kids?', answer: 'Netflix includes a dedicated Kids experience with parental controls.' },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white px-6 py-16">
      <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
      <div className="space-y-3 max-w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#2d2d2d]">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center text-left px-6 py-5 font-medium text-lg hover:bg-[#414141] transition"
            >
              {faq.question}
              <Plus
                className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-300">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
