import { signOut } from "firebase/auth";
import { auth } from '../lib/firebase';

// This function renders the user's information and the sign-out button
export function renderUserProfile(container, user) {
    container.innerHTML = `
        <div>
            <p>Signed in as: <strong>${user.email}</strong></p>
            <button id="logout">Sign Out</button>
        </div>
    `;
    
    // Find the sign-out button
    const logoutButton = container.querySelector('#logout');

    // On click, call the Firebase sign-out function
    logoutButton.onclick = () => signOut(auth);
}