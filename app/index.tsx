import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StyledInput from '../components/styled-input';
import StyledButton from '../components/styled-button';
import { router } from 'expo-router';
import { Heading } from '@/components/ui/heading';
import { Button, ButtonText } from '@/components/ui/button';

export default function Login() {

  const handleLogin = () => {
    router.replace('home')
  }

  return (
    <View style={styles.container}>
      {/* <Text>Login</Text> */}

      <Heading size='3xl'>Login</Heading>

      <StyledInput
        placeholder='Digite seu login'
        onChangeText={(texto) => console.log(texto)}
      />
      <StyledInput
        placeholder='Digite sua senha'
        onChangeText={(texto) => console.log(texto)}
      />
      {/* <StyledButton
        text='Entrar'
        onClick={handleLogin}
        color='blue'
      /> */}

      <Button onPress={handleLogin} size="lg" variant="solid" >
        <ButtonText>Entrar</ButtonText>
      </Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
