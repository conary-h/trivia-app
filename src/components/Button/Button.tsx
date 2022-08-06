import { ButtonWrapper } from './Button.styles';

type ButtonProps = {
  color?: string;
  text: string;
  bg?: string;
};

export default function Button({ color, text, bg }: ButtonProps) {
  return (
    <ButtonWrapper color={color} bg={bg} role="button">
      {text}
    </ButtonWrapper>
  );
}
