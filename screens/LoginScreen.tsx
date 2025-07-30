import { TextInput, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { loginUser } from '../services/authService'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


// Define the navigation props for type safety
type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

// Add navigation prop here
const LoginScreen = ({ navigation }: { navigation: LoginScreenNavigationProp }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //  Implement the login function correctly
  const handleLogin = async () => {
    if (email === '' || password === '') {
        Alert.alert("Login Error", "Please enter both email and password.");
        return;
    }
    try {
        const userCredential = await loginUser(email, password);
        console.log("User logged in successfully!", userCredential.user.uid);
    } catch (error) {
        console.error("Login failed:", error);
        Alert.alert("Login Error", "The email or password you entered is incorrect. Please try again.");
    }
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

        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        

        {/* The navigation link to the Register screen */}
        <TouchableOpacity style={{marginTop: 20}} onPress={() => navigation.navigate('Register')}>
            <Text style={{textAlign: 'center', color: 'blue', textDecorationLine: 'underline'}}>
                Don't have an account? Register
            </Text>
        </TouchableOpacity>

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