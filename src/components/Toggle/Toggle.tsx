import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from './Toggle.styles';

type ToggleProps = {
  toggleTheme: () => void;
  checked?: boolean;
};

const Toggle = ({ toggleTheme, checked }: ToggleProps) => {
  return (
    <CheckBoxWrapper>
      <CheckBox id="checkbox" type="checkbox" onClick={toggleTheme} checked={checked} />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
};

export default Toggle;
