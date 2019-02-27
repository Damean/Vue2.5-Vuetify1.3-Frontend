import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCh9x98Gipua6VUQjv59yQvzlbC9VjhbhA",
  authDomain: "ninja-vuetify-test.firebaseapp.com",
  databaseURL: "https://ninja-vuetify-test.firebaseio.com",
  projectId: "ninja-vuetify-test",
  storageBucket: "ninja-vuetify-test.appspot.com",
  messagingSenderId: "389113890186"
};
firebase.initializeApp(config);
const db = firebase.firestore();

export default db;