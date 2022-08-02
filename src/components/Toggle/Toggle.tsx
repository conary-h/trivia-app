import { Button } from './Toggle.styles';

type ToggleProps = {
  toggleTheme: string | (() => void);
};

const Toggle = ({ toggleTheme }: ToggleProps) => {
  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};

export default Toggle;
