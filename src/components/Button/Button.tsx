import { ButtonWrapper } from './Button.styles';

type ButtonProps = {
  color?: string;
  text: string;
};

export default function Button({ color, text }: ButtonProps) {
  return <ButtonWrapper color={color}>{text}</ButtonWrapper>;
}
