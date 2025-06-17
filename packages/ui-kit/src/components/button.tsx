export interface ButtonProps {
  buttonText: string;
  backgroundColor: string;
  onClick: () => void;
  color: string;
}

const Button = ({
  buttonText,
  backgroundColor,
  onClick,
  color,
}: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor, padding: "10px", cursor: "pointer", color }}
    >
      {buttonText}
    </div>
  );
};

export default Button;
