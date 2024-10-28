interface BoxProps {
  className?: string;
  children: string | React.ReactNode;
}

const defaultStyle = [
  "bg-gray-50",
  "bg-opacity-50",
  "dark:bg-opacity-10",
  "backdrop-blur-lg",
  "rounded-lg",
  "p-4",
  "mb-6",
];

export function Box({ className, children }: BoxProps): JSX.Element {
  return (
    <div className={`${defaultStyle.join(" ")} ${className || ""}`}>
      {children}
    </div>
  );
}
