import firebase from 'firebase';


  // Your web app's Firebase configuration
const FirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAUzZtux-uUMrmD-Kr47-uF1L_1DiLkSkE",
    authDomain: "laundry-website-260916.firebaseapp.com",
    databaseURL: "https://laundry-website-260916.firebaseio.com",
    projectId: "laundry-website-260916",
    storageBucket: "laundry-website-260916.appspot.com",
    messagingSenderId: "160559486651",
    appId: "1:160559486651:web:87ea150d2f873ba9e17b9e",
    measurementId: "G-M1Q100FK9Z"
});
// Initialize Firebase

let db = FirebaseApp.firestore();

export { db };