   import firebase from 'firebase/app'; 
   import 'firebase/firestore';

    const firebaseConfig = {
        apiKey: "AIzaSyDFu7wII6Reoj8CDbryoadIRR9YpJRsGQU",
        authDomain: "burger-queen-e2837.firebaseapp.com",
        databaseURL: "https://burger-queen-e2837.firebaseio.com",
        projectId: "burger-queen-e2837",
        storageBucket: "burger-queen-e2837.appspot.com",
        messagingSenderId: "633316136467",
        appId: "1:633316136467:web:c178da27d83882e8ddd1e6",
        measurementId: "G-PV2M0L0L2B"
    };

    firebase.initializeApp(firebaseConfig);

    export default firebase;