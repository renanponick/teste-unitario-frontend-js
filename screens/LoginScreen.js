import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <Input
        label="Email"
        placeholder="Digite seu email"
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        label="Senha"
        placeholder="Digite sua senha"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Entrar" onPress={() => console.log('Entrar')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default LoginScreen;
