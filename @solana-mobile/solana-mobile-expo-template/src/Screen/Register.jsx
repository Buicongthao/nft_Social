import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

<<<<<<< HEAD
    
=======
    // Gửi yêu cầu đăng ký đến API
    // Ví dụ:
>>>>>>> 0f4e15ae89d451d6e7fea08619d104a692525137
    fetch('http://your-api-url/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={text => setName(text)}
        value={name}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={!showPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={text => setConfirmPassword(text)}
        value={confirmPassword}
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity onPress={toggleShowPassword}>
        <Text style={styles.showPasswordText}>{showPassword ? 'Hide' : 'Show'} Password</Text>
      </TouchableOpacity>
<<<<<<< HEAD
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
=======
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
>>>>>>> 0f4e15ae89d451d6e7fea08619d104a692525137
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  showPasswordText: {
    textAlign: 'right',
    width: '80%',
    marginBottom: 10,
  },
  loginLink: {
    marginTop: 20,
  },
  loginText: {
    color: 'blue',
  },
});

export default Register;
