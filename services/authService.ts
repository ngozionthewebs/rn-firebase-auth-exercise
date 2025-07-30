import { auth } from '../firebase'; // Import the Firebase auth instance we just configured
import { 
    createUserWithEmailAndPassword, //  registration function
    signInWithEmailAndPassword, 
    signOut 
} from 'firebase/auth';

// Function to create a new user
export const registerUser = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User created successfully!", userCredential.user);
        return userCredential;
    } catch (error) {
        // check if the error is an actual Error object before accessing its message.
        if (error instanceof Error) {
            console.error("Error creating user:", error.message);
            return { error: error.message };
        }
        // Handle other potential error types
        console.error("An unknown error occurred during registration:", error);
        return { error: 'An unknown error occurred.' };
    }
}

// Function to log in a user
// add types here.
export const loginUser = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
}

// Function to sign a user out
export const logoutUser = () => {
    return signOut(auth);
}