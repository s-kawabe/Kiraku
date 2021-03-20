import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/functions'

import firebase from 'firebase/app'

import { firebaseConfig } from './config'

firebase.initializeApp(firebaseConfig)

// export alias
export const auth = firebase.auth()
export const storage = firebase.storage()
export const functions = firebase.functions()
