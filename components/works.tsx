import Work from "@/components/work";
import { works } from "@/data/works";

import { GridLayout } from "@/components/styles/grid-style";

interface WorkType {
  name: string;
  src: string;
  href: string;
  description: string;
}

export default function Works(): JSX.Element {
  return (
    <GridLayout>
      {works.map(
        (work: WorkType, index: number): JSX.Element => (
          <Work key={index} name={work.name} src={work.src} href={work.href}>
            {work.description}
          </Work>
        ),
      )}
    </GridLayout>
  );
}
