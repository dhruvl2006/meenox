import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I get a Referral Code?",
    answer:
      "You can get a referral code by connecting your wallet and visiting the referral section.",
  },
  {
    question: "Do I get rewarded in tokens or ETH when I refer buyers?",
    answer:
      "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
  },
  {
    question: "How do I get a Referral Code?",
    answer:
      "Connect your wallet and visit the referral section to generate your unique code.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 px-4" id="faq">
      <div className="max-w-3xl mx-auto bg-secondary/50 p-8 rounded-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          FA<span className="text-primary">Qs</span>
        </h2>
        <div className="rounded-lg p-6">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
