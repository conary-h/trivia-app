import { ButtonWrapper } from './Button.styles';

type ButtonProps = {
  color?: string;
  text: string;
  bg?: string;
  onClick: () => void;
};

export default function Button({ color, text, bg, onClick }: ButtonProps) {
  return (
    <ButtonWrapper onClick={onClick} color={color} bg={bg} role="button">
      {text}
    </ButtonWrapper>
  );
}
