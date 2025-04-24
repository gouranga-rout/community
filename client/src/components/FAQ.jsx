import React, { useState } from 'react';

const FAQ = () => {
  // Set the initial active index to 0 (the first question)
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "RichIND & Team Aaryan kya hai?",
      answer:
        "RichIND ak Ed-Tech platform hai, jo hume learning ke saath saath part time earnings ka opportunity deta hai, and Team Aaryan ak community hai jisme aapko step by step guide kiya jata hai.",
    },
    {
      question: "Kya mujhe invest karna padega?",
      answer:
        "Aaj ke time mai kuch bhi muft mai nhi milta, Agar aap humare saath Affiliate bnkar pesa kamana chahte ho to ak chota sa investment chahiye, jo ki ₹260 se suru hota hai.",
    },
    {
      question: "Esme kya kaam karna hota hai?",
      answer:
        "Agar aapko kuch chije pasand aaye to aap aapne friends ko batate ho, usi tarah agar aap chahte ho ki aapki friends bhi aapke jese earnings kre to unko es platform ke bareme batana hota hai.",
    },
    {
      question: "Mai kese earnings kar sakta hun?",
      answer:
        "Team Aaryan ke saath join hone ke baad aapko step by step guide kiya jayega kese aap aapne jese logo ko dhund sakte ho, jo log aapke tarah earnings karna chahte hai.",
    },
    {
      question: "Bank mai pesa aayega na?",
      answer:
        "Aap jis package ko refer kroge uske hisab se aapko commission mil jayega, wo bhi direct tumare bank account mai.",
    },
  ];

  return (
    <div className="accordion-container">
      <div className="accordion-heading">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
      </div>

      {faqs.map((faq, index) => (
        <div
          className={`accordion ${activeIndex === index ? 'active' : ''}`}
          key={index}
        >
          <div
            className="question"
            onClick={() => toggleAccordion(index)}
            style={{ cursor: 'pointer' }}
          >
            <h4>&nbsp;{faq.question}</h4>
            <i
              className={`icon fa-solid ${
                activeIndex === index ? 'fa-caret-up active' : 'fa-caret-down'
              }`}
            ></i>
          </div>
          <div className={`answer ${activeIndex === index ? 'active' : ''}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

