import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React from 'react'

// 1. Import the logout function from your service
import { logoutUser } from '../services/authService';

const ProfileScreen = () => {

    // 2. Implement the handleLogout function
    const handleLogout = async () => {
        try {
            await logoutUser();
            console.log("User signed out successfully!");
            // The navigation to the Login screen will be handled in the next exercise.
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    }

    return (
        <SafeAreaView>
            <View style={{padding:20}}>
                {/* Your original styling is kept */}
                <Text>Profile</Text>

                {/* Your original placeholders are kept */}
                <Text>Email here</Text>
                <Text>Username here</Text>

                {/* Your original green button now calls the new function */}
                <Button 
                    title="Sign Out"
                    color="green"
                    onPress={handleLogout} />
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen