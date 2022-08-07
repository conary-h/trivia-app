import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from './Toggle.styles';

type ToggleProps = {
  toggleTheme: () => void;
  defaultChecked?: boolean;
};

const Toggle = ({ toggleTheme, defaultChecked }: ToggleProps) => {
  return (
    <CheckBoxWrapper>
      <CheckBox
        id="checkbox"
        type="checkbox"
        onClick={toggleTheme}
        defaultChecked={defaultChecked}
      />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
};

export default Toggle;
