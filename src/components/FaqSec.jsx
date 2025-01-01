'use client'
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FaqSec = () => {
  const faqs = [
    {
      question: '“I’m already overwhelmed with so muchinformation. I don’t think I can handle more.',
      answer: 'We provide web design, UI/UX, frontend development, and backend solutions.',
    },
    {
      question: 'This sounds expensive. I don’t know if I can afford it.',
      answer: 'Wegetit—budgeting for therapies and resources is tough. That’s why we offer flexible payment plans to make Awetism Insights accessible. We also have sponsorship opportunities for families whoqualify. Think of it as an investment in clarity and confidence, helping you save time and effort by focusing on what really works.',
    },
    {
      question: 'I don’t think I’m ready to commit for a year.',
      answer: 'Yes, we offer maintenance and support services post-completion.',
    },
  ];

  return (
    <div className="faq-section sec">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center sec-head mb-4">Frequently Asked <span>Questions</span></h2>
                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-9 col-12">
                            <Accordion className='acc'>
                                {faqs.map((faq, index) => (
                                <Accordion.Item eventKey={index.toString()} key={index}>
                                    <Accordion.Header>{faq.question}</Accordion.Header>
                                    <Accordion.Body>{faq.answer}</Accordion.Body>
                                </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default FaqSec;
