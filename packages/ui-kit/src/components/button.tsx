import { IconButton } from "@mui/material";
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
    <IconButton
      onClick={onClick}
      style={{
        backgroundColor,
        padding: "10px",
        cursor: "pointer",
        color,
        borderRadius: "5px",
      }}
    >
      {buttonText}
    </IconButton>
  );
};

export default Button;
