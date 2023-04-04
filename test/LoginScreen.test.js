import React from 'react';
import { render } from '@testing-library/react-native';
import LoginScreen from '../screens/LoginScreen';

describe('LoginScreen', () => {
  test('renders email and password fields', () => {
    const { getByTestId } = render(<LoginScreen />);
    const emailField = getByTestId('Email');
    const passwordField = getByTestId('Senha');

    expect(emailField).toBeDefined();
    expect(passwordField).toBeDefined();
  });
});
