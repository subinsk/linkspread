import { app } from './firebaseClient'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);
auth.languageCode = 'it';

const provider = new GoogleAuthProvider();

async function register(name, email, password) {

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, " ", errorMessage)
        });
}

async function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, " ", errorMessage)
        });
}

async function loginWithGoogle() {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            alert("Token: ", token, "User: ", user);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, " ", errorMessage)
            // The email of the user's account used.
            const email = error.email;
            alert("Email ", email, " has been used")
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            alert(credential)
        });
}

async function logout() {

}

async function onAuthenticationStateChanged() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            alert(uid)
        } else {
            alert('User is signed out')
        }
    });
}

async function getUser() {

}
async function getSession() {

}

function setAuthCookie(req, res) {

}

export const AuthService = {
    register,
    login,
    loginWithGoogle,
    logout,
    getUser,
    getSession,
    setAuthCookie,
    onAuthenticationStateChanged
}
