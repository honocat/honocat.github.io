interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps): JSX.Element {
  return (
    <div className="container max-w-xl mx-auto p-4 text-gray-800 dark:text-gray-300">
      {children}
    </div>
  );
}
