export interface ButtonProps {
    buttonText: string;
    backgroundColor: string;
    onClick: () => void;
    color: string;
}
declare const Button: ({ buttonText, backgroundColor, onClick, color, }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
