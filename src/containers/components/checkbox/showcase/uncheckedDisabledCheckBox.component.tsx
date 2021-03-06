import React from 'react';
import {
  CheckBox,
  CheckBoxProps,
} from '@kitten/ui';

interface CheckBoxShowcaseComponentState {
  checked: boolean;
}

class CheckBoxShowcaseComponent extends React.Component<CheckBoxProps, CheckBoxShowcaseComponentState> {

  static defaultProps: CheckBoxProps = {
    checked: true,
  };

  public state: CheckBoxShowcaseComponentState = {
    checked: this.props.checked,
  };

  private onChange = (checked: boolean) => {
    this.setState({ checked });
  };

  public render(): React.ReactElement<CheckBoxProps> {
    return (
      <CheckBox
        {...this.props}
        checked={this.state.checked}
        onChange={this.onChange}
      />
    );
  }
}

export const UncheckedDisabledCheckBox = (props?: CheckBoxProps): React.ReactElement<CheckBoxProps> => {
  return (
    <CheckBoxShowcaseComponent
      checked={false}
      disabled={true}
      {...props}
    />
  );
};
