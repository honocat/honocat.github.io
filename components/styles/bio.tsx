interface BioProps {
  children: React.ReactNode;
}

export function BioSection({ children }: BioProps): JSX.Element {
  return <div className="flex items-baseline mb-4">{children}</div>;
}

export function BioYear({ children }: BioProps): JSX.Element {
  return <div className="font-bold mr-4 w-fit">{children}</div>;
}
