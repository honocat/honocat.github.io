interface SkillSectionProps {
  children: React.ReactNode;
}

export function SkillSection({ children }: SkillSectionProps): JSX.Element {
  return <div className="space-y-3 mb-4 w-5/6 mx-auto">{children}</div>;
}

export function GridLayout({ children }: SkillSectionProps): JSX.Element {
  return <div className="flex space-x-5 justify-center">{children}</div>;
}

interface SkillProps {
  name: string;
  children: React.ReactNode;
}

export function Skill({ name, children }: SkillProps): JSX.Element {
  return (
    <div>
      {children}
      <div className="text-center">{name}</div>
    </div>
  );
}
