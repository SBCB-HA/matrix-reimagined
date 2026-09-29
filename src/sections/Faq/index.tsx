import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { faqs } from "@/data/home";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

export function Faq() {
  return <section className="section faq"><Container><SectionHeading eyebrow="CÂU HỎI THƯỜNG GẶP" title="GIẢI ĐÁP VỀ MATRIX HOLDING" />
    <Accordion.Root type="single" collapsible defaultValue="faq-0" className="faq-list">{faqs.map((faq, i) => <Accordion.Item value={`faq-${i}`} key={faq.question} className="faq-item"><Accordion.Header><Accordion.Trigger><span>{String(i + 1).padStart(2,"0")}</span><strong>{faq.question}</strong><Plus /></Accordion.Trigger></Accordion.Header><Accordion.Content><p>{faq.answer}</p></Accordion.Content></Accordion.Item>)}</Accordion.Root>
  </Container></section>;
}