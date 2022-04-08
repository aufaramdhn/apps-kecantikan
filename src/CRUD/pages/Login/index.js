import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import FirebaseUtil from '../../utils/FirebaseUtil';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [create, setCreate] = useState(false);

  const signIn = () => {
    FirebaseUtil.signIn(email, password).catch(e => {
      console.log(e);
      alert('Email/Password is wrong');
    });
  };
  const signUp = () => {
    FirebaseUtil.signUp(email, password).catch(e => {
      console.log(e);
      alert('Something went Wrong');
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        style={styles.textInput}
        secureTextEntry={true}
      />
      {create ? (
        <>
          <Button title="Sign Up" onPress={() => signUp()} />
          <Text style={styles.text} onPress={() => setCreate(false)}>
            Sign In
          </Text>
        </>
      ) : (
        <>
          <Button title="Sign In" onPress={() => signIn()} />
          <Text style={styles.text} onPress={() => setCreate(true)}>
            Create an account
          </Text>
        </>
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#c7c7c7',
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  text: {
    color: 'blue',
    marginTop: 20,
  },
});
