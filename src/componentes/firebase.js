// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBV1iAJ8Y-j_XnUEdahE1OeW_aQEKTFI3s',
    authDomain: 'fb-bdreact4-45fcc.firebaseapp.com',
    projectId: 'fb-bdreact4-45fcc',
    storageBucket: "fb-bdreact4-45fcc.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
