import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyBk2y9SH4uWM59yfyQWnhpgTrRIydgvB2Y',
	authDomain: 'crwn-clothing-8119d.firebaseapp.com',
	projectId: 'crwn-clothing-8119d',
	storageBucket: 'crwn-clothing-8119d.appspot.com',
	messagingSenderId: '63032606406',
	appId: '1:63032606406:web:2db1d661701d7be3b821c7'
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
	prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)