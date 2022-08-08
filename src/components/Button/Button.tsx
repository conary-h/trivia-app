import { ButtonWrapper } from './Button.styles';

type ButtonProps = {
  color?: string;
  text: string;
  bg?: string;
  border?: string;
  onClick: () => void;
};

export default function Button({ color, text, bg, border, onClick }: ButtonProps) {
  return (
    <ButtonWrapper onClick={onClick} $color={color} $bg={bg} $border={border} role="button">
      {text}
    </ButtonWrapper>
  );
}
