firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.

        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";

        var user = firebase.auth().currentUser;

        if (user != null) {

            var email_id = user.email;
            document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

        }

    } else {
        // No user is signed in.

        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";

    }
});



function signup() {
    // New user signup here.
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);


    });

}




function login() {

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);
    });

}


// Google Signin start from here

// These samples are intended for Web so this import would normally be
// done in HTML however using modules here is more convenient for
// ensuring sample correctness offline.
import firebase from "firebase/app";
import "firebase/auth";

// ==========================================================================================
// Docs: Snippets in this file are "general purpose" and are used on more than one docs page
// ==========================================================================================

function makeGoogleCredential(googleUser) {
    // [START auth_make_google_credential]
    var credential = firebase.auth.GoogleAuthProvider.credential(
        googleUser.getAuthResponse() .599190618944 - r2oe136vcdqk1mck23ob4kmsi27dm2m3.apps.googleusercontent.com);
    // [END auth_make_google_credential]
}

function makeFacebookCredential(response) {
    // [START auth_make_facebook_credential]
    var credential = firebase.auth.FacebookAuthProvider.credential(
        response.authResponse.accessToken);
    // [END auth_make_facebook_credential]
}

function makeEmailCredential(email, password) {
    // [START auth_make_email_credential]
    var credential = firebase.auth.EmailAuthProvider.credential(email, password);
    // [END auth_make_email_credential]
}

function signOut() {
    // [START auth_sign_out]
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
    // [END auth_sign_out]
}

function authStateListener() {
    // [START auth_state_listener]
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
    // [END auth_state_listener]
}

function setLanguageCode() {
    // [START auth_set_language_code]
    firebase.auth().languageCode = 'it';
    // To apply the default browser preference instead of explicitly setting it.
    // firebase.auth().useDeviceLanguage();
    // [END auth_set_language_code]
}

function authWithCredential(credential) {
    // [START auth_signin_credential]
    // Sign in with the credential from the user.
    firebase.auth()
        .signInWithCredential(credential)
        .then((result) => {
            // Signed in 
            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // ...
        });
    // [END auth_signin_credential]
}

function signInRedirect(provider) {
    // [START auth_signin_redirect]
    firebase.auth().signInWithRedirect(provider);
    // [END auth_signin_redirect]
}

function logout() {
    firebase.auth().signOut();
}