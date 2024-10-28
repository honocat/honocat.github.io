import Work from "@/components/work";

import { GridLayout } from "@/components/styles/grid-style";

export default function Works(): JSX.Element {
  return (
    <GridLayout>
      <Work
        name="QPE - homepage"
        src="/images/works/yanai-lab.jpg"
        href="https://yanai-lab.github.io/"
      >
        Homepage of the laboratory for Quantitative Political Economy(QPE) I
        belong to.
      </Work>
    </GridLayout>
  );
}
