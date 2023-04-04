import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../screens/LoginScreen';

describe('LoginScreen', () => {
  test('renders email and password fields', () => {
    const { getByLabelText } = render(<LoginScreen />);
    const emailField = getByLabelText('Email');
    const passwordField = getByLabelText('Senha');

    expect(emailField).toBeDefined();
    expect(passwordField).toBeDefined();
  });

  test('calls onSubmit with email and password when login button is pressed', () => {
    const handleSubmit = jest.fn();
    const { getByLabelText, getByText } = render(
      <LoginScreen onSubmit={handleSubmit} />
    );
    const emailField = getByLabelText('Email');
    const passwordField = getByLabelText('Senha');
    const loginButton = getByText('Entrar');

    fireEvent.changeText(emailField, 'johndoe@example.com');
    fireEvent.changeText(passwordField, 'password123');
    fireEvent.press(loginButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'johndoe@example.com',
      password: 'password123',
    });
  });
});
