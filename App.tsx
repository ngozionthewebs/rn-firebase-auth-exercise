import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged, User } from 'firebase/auth';

// Import our screens
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import ProfileScreen from './screens/ProfileScreen';
import { auth } from './firebase'; 

// Create the navigator
const Stack = createNativeStackNavigator();

// --- Auth Stack (when not logged in) ---
function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegistrationScreen} />
    </Stack.Navigator>
  );
}

// --- App Stack (when logged in) ---
function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

// --- The Main App Component ---
export default function App() {
  const [user, setUser] = useState<User | null>(null); // To hold user auth state

  // Listen to Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the user state
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      {/* Conditionally render the correct stack based on user state */}
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}