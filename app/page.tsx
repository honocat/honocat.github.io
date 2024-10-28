import Greeting from "@/components/greeting";
import Honocat from "@/components/honocat";
import Introduction from "@/components/introduction";
import Guide from "@/components/guide";
import { FavTeches, MyToolkit } from "@/components/skills";
import Accounts from "@/components/accounts";

import { Layout } from "@/components/styles/article";
import { Container } from "@/components/styles/container";
import { Heading } from "@/components/styles/heading";
import { Section } from "@/components/styles/section";
import { BioSection, BioYear } from "@/components/styles/bio";
import { GridLayout } from "@/components/styles/grid-style";
import { ImageStyle } from "@/components/styles/image-style";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Container>
        <Greeting />
        <Honocat />

        <Section>
          <Heading variant="section-title">Profile</Heading>
          <Introduction />
          <Guide />
        </Section>

        <Section>
          <Heading variant="section-title">Bio</Heading>
          <BioSection>
            <BioYear>2025</BioYear>
            Complete the Bachelor&apos;s Program in School of Economics &
            Management at Kochi University of Technology. (高知工科大学
            経済マネジメント学群)
          </BioSection>
        </Section>

        <Section>
          <Heading variant="section-title">Skills</Heading>
          <FavTeches />
          <MyToolkit />
        </Section>

        <Section>
          <Heading variant="section-title">I love</Heading>
          <p>Music, Photography, Playing the guiter, Programming</p>
        </Section>

        <Section>
          <Heading variant="section-title">On the web</Heading>
          <div className="space-y-4">
            <Accounts />
            <GridLayout>
              <ImageStyle src="/images/KyotoCafe.JPG" />
              <ImageStyle src="/images/KyotoMuseum.JPG" />
            </GridLayout>
          </div>
        </Section>
      </Container>
    </Layout>
  );
}
