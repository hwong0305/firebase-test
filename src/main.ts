import { initializeApp } from 'firebase/app';
import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import './style.css';

const firebaseConfig = {
  apiKey: 'AIzaSyCoLQ1eT2hnivhHL68pKZd9K-4dOYGBycw',
  authDomain: 'herman-angular-tests.firebaseapp.com',
  projectId: 'herman-angular-tests',
  storageBucket: 'herman-angular-tests.firebasestorage.app',
  messagingSenderId: '1059826185412',
  appId: '1:1059826185412:web:ff2284c516c78ea434c591',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const googleSignInBtn = document.getElementById('signin-google');
googleSignInBtn?.addEventListener('click', () => {
  signInWithRedirect(auth, provider);
});

getRedirectResult(auth)
  .then((result) => {
    console.log('a result', result);
    // This gives you a Google Access Token. You can use it to access Google APIs.
    if (result) {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      console.log('token', token);
      console.log(result.user);
    }
  })
  .catch((error) => {
    console.error(error);
  });
