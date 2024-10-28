interface GridLaoutProps {
  children: React.ReactNode;
}

export function GridLayout({ children }: GridLayoutProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
  );
}
