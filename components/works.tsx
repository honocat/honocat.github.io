import Work from "@/components/work";
import { works } from "@/data/works";

import { GridLayout } from "@/components/styles/grid-style";

export default function Works(): JSX.Element {
  return (
    <GridLayout>
      {works.map((work, index) => (
        <Work key={index} name={work.name} src={work.src} href={work.href}>
          {work.description}
        </Work>
      ))}
    </GridLayout>
  );
}
