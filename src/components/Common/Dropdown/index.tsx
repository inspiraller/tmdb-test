import React, { FC } from 'react';
import { Dropdown as SemanticDropdown, DropdownProps } from 'semantic-ui-react';

export type ThandleDropdownChange = (
  event: React.SyntheticEvent<HTMLElement, Event>,
  data: DropdownProps
) => void;

export type TOptions = Array<{
  key: string;
  value: string;
  text: string;
}>;

export interface Props {
  name: string;
  label: string;
  defaultValue: any;
  handleChange: ThandleDropdownChange;
  disabled?: boolean;
  Options: TOptions;
  style?: {
    [key: string]: string;
  };
  dataTestid: string;
}

const Dropdown: FC<Props> = ({
  name,
  label,
  defaultValue,
  Options,
  handleChange,
  disabled,
  style,
  dataTestid
}) => {
  // div only becavuse dataTestId does not exist on semanticDropdown
  return (
    <div data-testid={dataTestid}>
      <SemanticDropdown
        name={name}
        placeholder={label}
        fluid
        search
        selection
        options={Options}
        defaultValue={defaultValue || undefined}
        onChange={handleChange}
        disabled={disabled}
        multiple
        compact
        style={style}
      />
    </div>
  );
};

export default Dropdown;
