import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDJuSkGQMRUXlzyxcl-kOnrgK6sJyzw-Ho",
  authDomain: "tiktok-clone-ffb1a.firebaseapp.com",
  projectId: "tiktok-clone-ffb1a",
  storageBucket: "tiktok-clone-ffb1a.appspot.com",
  messagingSenderId: "332131148798",
  appId: "1:332131148798:web:5969e43121bbe690fed6af"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db