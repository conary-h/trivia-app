import { Wrapper } from './Card.styles';

type CardProps = {
  children?: JSX.Element;
  style?: React.CSSProperties;
};

export default function Card({ children, style }: CardProps) {
  return <Wrapper style={style}>{children}</Wrapper>;
}
