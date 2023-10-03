export interface ButtonProps {
  type?: "button" | "reset" | "submit" | undefined;
  text: string;
  url?: string;
  className?: string;
  onClick?: () => void;
}
