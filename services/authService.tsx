// TODO: Create Firebase Auth Functions
import { auth } from '../firebase'; // Import the Firebase auth instance
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'; // Import

export const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
  // Function to log in a user
  // This function will use Firebase Authentication to log in a user
  // You can use Firebase's signInWithEmailAndPassword or signInWithPopup methods
}