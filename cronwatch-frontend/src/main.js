import './assets/style.css';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './lib/firebase';
import { renderLogin } from './components/Login.js';
import { renderUserProfile } from './components/UserProfile.js';

const appContainer = document.querySelector('#app');

onAuthStateChanged(auth, user => {
    appContainer.innerHTML = '';

    if (user) {
        renderUserProfile(appContainer, user);
    } else {
        renderLogin(appContainer);
    }
});