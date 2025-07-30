import { TextInput, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   TODO: Login Function
  const login = () => {
    loginUser(email, password);
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput
            style={styles.inputField}
            placeholder="Your Email"
            onChangeText={newText => setEmail(newText)}
            defaultValue={email}
            />

        <TextInput
            style={styles.inputField}
            placeholder="Your Password"
            onChangeText={newText => setPassword(newText)}
            defaultValue={password}
            secureTextEntry={true}
            />

        <TouchableOpacity style={styles.button} onPress={login}>
            <Text style={styles.buttonText}>Login Button</Text>
        </TouchableOpacity>

        {/* TODO: Add Register Navigation */}

      </View>  
      
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    title: {
        fontSize: 30
    },
    inputField: {
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 15,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: "black",
        textAlign: 'center',
        padding: 10,
        marginTop: 30
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    }
})