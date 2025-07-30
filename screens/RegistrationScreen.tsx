import { TextInput, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// 1. The import goes at the top of the file.
import { registerUser } from '../services/authService';

const RegistrationScreen = () => {
  // These state variables only exist inside the RegistrationScreen component
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 2. The register function goes INSIDE the component so it can see email and password.
  const register = () => {
    // Now it can access the state variables correctly.
    registerUser(email, password);
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>

        <TextInput
            style={styles.inputField}
            placeholder="Your Email"
            onChangeText={newText => setEmail(newText)}
            defaultValue={email}
            keyboardType="email-address"
            autoCapitalize="none"
            />

        <TextInput
            style={styles.inputField}
            placeholder="Your Password"
            onChangeText={newText => setPassword(newText)}
            defaultValue={password}
            secureTextEntry={true}
            />

        <TouchableOpacity style={styles.button} onPress={register}>
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

      </View>  
      
    </SafeAreaView>
  )
}

export default RegistrationScreen

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputField: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginTop: 15,
        paddingHorizontal: 15,
        fontSize: 16,
    },
    button: {
        backgroundColor: "black",
        borderRadius: 5,
        padding: 15,
        marginTop: 30,
        alignItems: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
})