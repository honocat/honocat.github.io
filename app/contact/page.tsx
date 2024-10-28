import { Metadata } from "next";

import ContactForm from "@/components/contact-form";

import { Layout } from "@/components/styles/article";
import { Container } from "@/components/styles/container";
import { Heading } from "@/components/styles/heading";

export const metadata: Metadata = {
  title: "Contact - Keisuke Nakano",
  description: "",
};

export default function ContactPage(): JSX.Element {
  return (
    <Layout>
      <Container>
        <Heading variant="h2">Contact</Heading>
        <div className="my-4">
          <ContactForm />
        </div>
      </Container>
    </Layout>
  );
}
