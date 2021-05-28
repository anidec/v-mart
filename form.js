

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
