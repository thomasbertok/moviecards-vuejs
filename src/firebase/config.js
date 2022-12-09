import firebase from 'firebase/app'
import 'firebase/auth'
import { firebaseConfig } from '../config/firebase.config'

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
export { auth }