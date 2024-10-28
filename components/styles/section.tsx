interface SectionProps {
  children: React.ReactNode;
}

export function Section({ children }: SectionProps) {
  return <div className="mb-6">{children}</div>;
}
