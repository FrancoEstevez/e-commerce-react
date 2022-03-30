import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA__P6cXx64mHH5nBNWk-b5pWmtjXwmKiA",
  authDomain: "carshop-cd664.firebaseapp.com",
  projectId: "carshop-cd664",
  storageBucket: "carshop-cd664.appspot.com",
  messagingSenderId: "317525702049",
  appId: "1:317525702049:web:1b65551486a230392987e0"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}
