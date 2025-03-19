import Work from "@/components/work";
import { works, reactApps } from "@/data/works";

import { Heading } from "@/components/styles/heading";
import { GridLayout } from "@/components/styles/grid-style";

interface WorkType {
  name: string;
  src: string;
  href: string;
  description: string;
}

export default function Works(): JSX.Element {
  return (
    <div className="space-y-8">
      <GridLayout>
        {works.map(
          (work: WorkType, index: number): JSX.Element => (
            <Work key={index} name={work.name} src={work.src} href={work.href}>
              {work.description}
            </Work>
          )
        )}
      </GridLayout>

      <Heading variant="h2">100 React Apps</Heading>
      <GridLayout>
        {reactApps.map(
          (app: WorkType, index: number): JSX.Element => (
            <Work key={index} name={app.name} src={app.src} href={app.href}>
              {app.description}
            </Work>
          )
        )}
      </GridLayout>
    </div>
  );
}
