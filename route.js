import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"; // used to handle email/password-based authentication
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from "@/app/firebase";


const authOptions = {
    // Configure one or more authentication providers
    pages: { // configure the paths of authentication-related pages.
        signIn: '/signin'
    },
    providers: [ // configure authentication providers
        CredentialsProvider({
            name: 'Credentials', // identifies the authentication provider
            credentials: {}, // specifies the types of credentials (empty since it relies on the user to provide the email and password)
            async authorize(credentials){ // called when user attempts to sign in
                // used to authenticate the user with Firebase
                return await signInWithEmailAndPassword(auth, (credentials).email || '', (credentials).password || '')
                    .then(userCredential => {
                        if (userCredential.user) {
                            return userCredential.user;
                        }
                        return null;
                    })
                    .catch(error => (console.log(error)))
            }
        })
    ],
}
// creates an authentication handler
const handler = NextAuth(authOptions);
// exports the authentication handler
export { handler as GET, handler as POST }