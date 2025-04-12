
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const VpnFAQ: React.FC = () => {
  const faqItems = [
    {
      question: "How does the VPN work?",
      answer: "Our VPN creates a secure connection between your device and our servers, encrypting your internet traffic. This allows you to bypass regional restrictions and protect your privacy while making WhatsApp calls."
    },
    {
      question: "Is this VPN secure?",
      answer: "Yes! We use military-grade encryption to protect your data. Your online activity is kept private and we don't keep any logs of your browsing history."
    },
    {
      question: "Will this work for WhatsApp calls in UAE?",
      answer: "Yes, our VPN is specifically optimized to work with WhatsApp calls in restricted regions. Once connected, you should be able to make and receive calls normally through WhatsApp."
    },
    {
      question: "How do I install this as an app?",
      answer: "On mobile devices, you can click the 'Add to Home Screen' button in your browser menu. On desktop, you can use the installation prompt that appears in your browser."
    },
    {
      question: "How fast is the VPN connection?",
      answer: "We provide high-speed servers optimized for video and voice calls. The actual speed depends on your original internet connection, but we minimize speed loss through our optimized network."
    }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto mt-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default VpnFAQ;
