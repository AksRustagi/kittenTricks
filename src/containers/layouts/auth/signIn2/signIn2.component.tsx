import React from 'react';
import { View } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  SignInForm2,
  SignInForm2Type,
} from '@src/components/auth';
import {
  AvoidKeyboard,
  Button,
  Text,
} from '@src/components/common';

interface ComponentProps {
  onSignInPress: (formValue: SignInForm2Type) => void;
  onSignUpPress: () => void;
  onForgotPasswordPress: () => void;
}

export type SignIn2Props = ThemedComponentProps & ComponentProps;

interface State {
  formValue: SignInForm2Type | undefined;
}

class SignIn2Component extends React.Component<SignIn2Props> {

  public state: State = {
    formValue: undefined,
  };

  private onSignInButtonPress = () => {
    this.props.onSignInPress(this.state.formValue);
  };

  private onSignUpButtonPress = () => {
    this.props.onSignUpPress();
  };

  private onForgotPasswordButtonPress = () => {
    this.props.onForgotPasswordPress();
  };

  private onFormValueChange = (formValue: SignInForm2Type) => {
    this.setState({ formValue });
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <AvoidKeyboard>
        <View style={themedStyle.container}>
          <View style={themedStyle.headerContainer}>
            <Text style={themedStyle.helloLabel}>Hello</Text>
            <Text style={themedStyle.signInLabel}>Sign in to your account</Text>
          </View>
          <SignInForm2
            style={themedStyle.formContainer}
            onForgotPasswordPress={this.onForgotPasswordButtonPress}
            onFormValueChange={this.onFormValueChange}
          />
          <Button
            style={themedStyle.signInButton}
            size='giant'
            disabled={!this.state.formValue}
            onPress={this.onSignInButtonPress}>
            Sign In
          </Button>
          <Button
            style={themedStyle.signUpButton}
            appearance='ghost'
            activeOpacity={0.75}
            onPress={this.onSignUpButtonPress}>
            Don't have an account? Create
          </Button>
        </View>
      </AvoidKeyboard>
    );
  }
}

export const SignIn2 = withStyles(SignIn2Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: ['color-white'],
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,
    backgroundColor: theme['color-primary-500'],
  },
  formContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 16,
  },
  helloLabel: {
    fontFamily: 'raleway-extra-bold',
    fontSize: 60,
    lineHeight: 72,
  },
  signInLabel: {
    fontFamily: 'opensans-semibold',
    fontSize: 15,
    lineHeight: 24,
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
    fontFamily: 'opensans-extrabold',
    textTransform: 'uppercase',
  },
  signUpButton: {
    marginVertical: 24,
    fontFamily: 'opensans-semibold',
    color: theme['color-basic-600'],
  },
}));
