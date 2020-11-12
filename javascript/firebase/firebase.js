var app_firebase = {};

(function () {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyCwtvG8qQ1VPK-t6Yz8vnAHZINP9uPogP8",
        authDomain: "my-awesome-project-9477c.firebaseapp.com",
        databaseURL: "https://my-awesome-project-9477c.firebaseio.com",
        projectId: "my-awesome-project-9477c",
        storageBucket: "my-awesome-project-9477c.appspot.com",
        messagingSenderId: "728190908845",
        appId: "1:728190908845:web:d15c0fa0720e863ed10924",
        measurementId: "G-JYPTL83PP1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    app_firebase = firebase;

})()