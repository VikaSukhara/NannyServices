// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC-HBwbescihYI5NvU8_YlboROfa1d1VMY',
  authDomain: 'nanniesservice-dd6c2.firebaseapp.com',
  databaseURL: 'https://nanniesservice-dd6c2-default-rtdb.firebaseio.com',
  projectId: 'nanniesservice-dd6c2',
  storageBucket: 'nanniesservice-dd6c2.appspot.com',
  messagingSenderId: '232195733290',
  appId: '1:232195733290:web:e6003b4f196656cf361053',
  measurementId: 'G-B1F4NV12KX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const database = getDatabase(app);

const dbRef = ref(getDatabase());

export { database , dbRef};
