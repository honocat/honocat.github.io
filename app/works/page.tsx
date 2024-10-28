import { Metadata } from "next";

import Works from "@/components/works";

import { Layout } from "@/components/styles/article";
import { Container } from "@/components/styles/container";
import { Heading } from "@/components/styles/heading";

export const metadata: Metadata = {
  title: "Works - Keisuke Nakano",
  description: "Works",
};

export default function WorksPage(): JSX.Element {
  return (
    <Layout>
      <Container>
        <Heading variant="h2">Works</Heading>
        <div className="my-4">
          <Works />
        </div>
      </Container>
    </Layout>
  );
}
