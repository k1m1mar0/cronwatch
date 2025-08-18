import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../lib/firebase';

// Create an instance of the provider ONLY for Google
const provider = new GoogleAuthProvider();

// This function renders the login button and attaches the click event
export function renderLogin(container) {
    // Insert the HTML for just one button into the container
    container.innerHTML = `<button id="login-google">Sign in with Google</button>`;
    
    // Find that button
    const loginButton = container.querySelector('#login-google');

    // On click, trigger the Firebase popup sign-in flow
    loginButton.onclick = () => {
        signInWithPopup(auth, provider).catch(error => {
            // If the user closes the popup or an error occurs, log it to the console
            console.error("Authentication Error:", error);
        });
    };
}