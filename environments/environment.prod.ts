export const environment = {
  production: true,


  apiKey: "AIzaSyDaBsLM3Lo_Y-XFuJg4PerKhnskr9C6erk",
  authDomain: "project-23b43.firebaseapp.com",
  projectId: "project-23b43",
  storageBucket: "project-23b43.appspot.com",
  messagingSenderId: "324191553647",
  appId: "1:324191553647:web:5eeae990259246443c259a"
};

// import { initializeApp } from '@angular/fire/app';
// import { getFirestore } from 'firebase/firestore';
// import { config } from 'rxjs';
// const app = initializeApp(config);
// export const db = getFirestore(app);
// Import the environment file
// Import the necessary modules
import { initializeApp } from '@angular/fire/app';
import { getFirestore } from 'firebase/firestore';
import { environment } from '../environments/environment';

// Initialize the Firebase app using the configuration from the environment file
const app = initializeApp(environment.firebaseConfig);

// Initialize Firestore with the Firebase app
export const db = getFirestore(app);