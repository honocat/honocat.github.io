import { Heading } from "@/components/styles/heading";
import {
  SkillSection,
  GridLayout,
  Skill,
} from "@/components/styles/skill-section";

import { FaJava, FaPython, FaGolang, FaGitAlt } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiFlask,
  SiGithub,
  SiAwslambda,
  SiAmazonapigateway,
  SiHeroku,
  SiPostgresql,
  SiR,
  SiRust,
  SiSwift,
  SiTypescript,
  SiLazyvim,
  SiApple,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export function FavTeches(): JSX.Element {
  return (
    <SkillSection>
      <Heading variant="skillset-title">Favorite Teches</Heading>
      <GridLayout>
        <Skill name="TypeScript">
          <SiTypescript size={40} className="mx-auto" />
        </Skill>
        <Skill name="Python">
          <FaPython size={40} className="mx-auto" />
        </Skill>
        <Skill name="Next.js">
          <SiNextdotjs size={40} className="mx-auto" />
        </Skill>
        <Skill name="Flask">
          <SiFlask size={40} className="mx-auto" />
        </Skill>
        <Skill name="R lang">
          <SiR size={40} className="mx-auto" />
        </Skill>
      </GridLayout>
    </SkillSection>
  );
}

export function MyToolkit(): JSX.Element {
  return (
    <SkillSection>
      <Heading variant="skillset-title">My Toolkit</Heading>
      <GridLayout>
        <Skill name="Git">
          <FaGitAlt size={40} className="mx-auto" />
        </Skill>
        <Skill name="GitHub">
          <SiGithub size={40} className="mx-auto" />
        </Skill>
        <Skill name="VSCode">
          <VscVscode size={40} className="mx-auto" />
        </Skill>
        <Skill name="LazyVim">
          <SiLazyvim size={40} className="mx-auto" />
        </Skill>
        <Skill name="MacOS">
          <SiApple size={40} className="mx-auto" />
        </Skill>
      </GridLayout>
    </SkillSection>
  );
}

export function WhatIKnow(): JSX.Element {
  return (
    <SkillSection>
      <Heading variant="skillset-title">What I Know</Heading>
      <GridLayout>
        <Skill name="Java">
          <FaJava size={40} className="mx-auto" />
        </Skill>
        <Skill name="Lambda">
          <SiAwslambda size={40} className="mx-auto" />
        </Skill>
        <Skill name="API Gateway">
          <SiAmazonapigateway size={40} className="mx-auto" />
        </Skill>
        <Skill name="Heroku">
          <SiHeroku size={40} className="mx-auto" />
        </Skill>
      </GridLayout>
    </SkillSection>
  );
}

export function WannaLearn(): JSX.Element {
  return (
    <SkillSection>
      <Heading variant="skillset-title">What I Wanna Learn</Heading>
      <GridLayout>
        <Skill name="Go lang">
          <FaGolang size={40} className="mx-auto" />
        </Skill>
        <Skill name="Rust">
          <SiRust size={40} className="mx-auto" />
        </Skill>
        <Skill name="Swift">
          <SiSwift size={40} className="mx-auto" />
        </Skill>
        <Skill name="Postgres">
          <SiPostgresql size={40} className="mx-auto" />
        </Skill>
      </GridLayout>
    </SkillSection>
  );
}
