import * as firebase from 'firebase';

 // Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAxtA-rO_Xjpyx24dWlTb6gCJFPyBNN90o",
  authDomain: "contact-app-8fb1d.firebaseapp.com",
  databaseURL: "https://contact-app-8fb1d.firebaseio.com",
  projectId: "contact-app-8fb1d",
  storageBucket: "contact-app-8fb1d.appspot.com",
  messagingSenderId: "415372902520",
  appId: "1:415372902520:web:d1f989a1bbab5f54bc2d8d"
};

  // Initialize Firebase
  let fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref()