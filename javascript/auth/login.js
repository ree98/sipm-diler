var auth = {};

(function () {

    var firebase = app_firebase;

    function logIn() {
        var email = document.getElementById("auth-email").value;
        var password = document.getElementById("auth-password").value;

        if (email != "" && password != "") {
            var result = firebase.auth().signInWithEmailAndPassword(email, password);

            result.catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);

                window.alert("Message : " + errorMessage);
            })

        } else {
            window.alert("Form is incomplete. Please fill out all fields.");
        }
    }
    auth.logIn = logIn;

    function logOut() {
        firebase.auth().signOut();
    }
    auth.logOut = logOut;

})()