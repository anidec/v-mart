

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyC7CKcTI2tGTRq5JeS78Irjc9i9iNu-cls",
    authDomain: "fir-8899f.firebaseapp.com",
    projectId: "fir-8899f",
    storageBucket: "fir-8899f.appspot.com",
    messagingSenderId: "1092791791959",
    appId: "1:1092791791959:web:f67f4c34edb7b797700e12",
    measurementId: "G-Z4YWBPEMJ2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();


function signUp() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
            window.alert("Registered Successfully");
            window.location.replace("index.html");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            window.alert(errorMessage);
        });

}


function signIn() {
    const auth = firebase.auth();
    var email = document.getElementById("emailsignin").value;
    var password = document.getElementById("passsignin").value;


    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
            window.location.replace("index.html");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            window.alert(errorMessage);
        });
}
