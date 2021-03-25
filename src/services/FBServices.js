import firebase from 'firebase/app';
import "firebase/storage";
import { CONFIG } from 'Global/GlobalCreds';


firebase.initializeApp(CONFIG.firebaseConfig);


const storage = firebase.storage();



export {storage,firebase as default};