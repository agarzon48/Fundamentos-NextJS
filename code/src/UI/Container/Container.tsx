import { ContainerProps } from "./Container.types";

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`max-w-4xl mx-auto py-4 ${className}`}>{children}</div>
  );
};
