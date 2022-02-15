import { app } from './firebaseClient'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);
auth.languageCode = 'it';

const provider = new GoogleAuthProvider();

async function register(name, email, password) {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential;
                console.log(user)
                resolve(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                reject(error)
            });
    })
}

async function login(email, password) {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential;
                console.log(user)
                resolve(user);
            })
            .catch((error) => {
                reject(error)
            });
    })
}

async function loginWithGoogle() {
    return new Promise((resolve, reject) => {
        signInWithPopup(auth, provider)
            .then((res) => {
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // const user = result.user;
                // console.log("Token: ", token, "User: ", user);
                resolve(res);
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // console.log(errorCode, " ", errorMessage)
                // The email of the user's account used.
                // const email = error.email;
                // console.log("Email ", email, " has been used")
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // console.log(credential)
                reject(error)
            })
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
