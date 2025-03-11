import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const Accordain = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      question: 'What is Communion app?',
      answer: 'A vibrant platform for connecting diverse faiths and communities ',
    },
    {
      question: 'How does it promote social cohesion?',
      answer: 'By fostering collaboration and understanding through engaging activities',
    },
    {
      question: 'It is free to use?',
      answer: 'Absolutely! join the fun without spending a dime',
    },
    {
      question:'Can I meet new people?',
      answer:'yes! connect with like minded individuals and expand your circle'
    },
    {
      question:'What if I have more questions?',
      answer:'Reach to our support team anytime!'

    }
  ];

  return (
    <section className="bg-white ">
      <div className="container mx-auto ">
        <h2 className="text-black text-3xl font-bold">FREQUENTLY ASKED QUESTIONS (FAQS)</h2>
        <div className="mt-12">
          {faqData.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              className="mb-4 shadow-none"
              style={{ backgroundColor: 'black' }} // Always black
            >
              <AccordionSummary
                expandIcon={expanded === `panel${index}` ? <RemoveIcon style={{ color: 'black' }} /> : <AddIcon style={{ color: 'black' }} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                style={{ backgroundColor: 'white' }} // Always black
              >
                <Typography sx={{ fontSize: '1rem', color: 'black' }}>
                  {faq.question} {/* Larger font size for question */}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="p-6" style={{ backgroundColor: 'white' }}>
                <Typography sx={{ fontSize: '0.875rem', color: 'black' }}>
                  {faq.answer} {/* Smaller font size for answer */}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordain;
