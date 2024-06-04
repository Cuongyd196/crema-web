// ForJWT Auth
import {getUserFromJwtAuth} from '@crema/helpers/AuthHelper';
import {
  useJWTAuth,
  useJWTAuthActions,
} from '@crema/services/auth/jwt-auth/JWTAuthProvider';

/* eslint-disable prettier/prettier */
let userDefault = {
  "id": 1,
  "uid": "9JrdIPmjxgfW3cu4XxyooUBdr733",
  "displayName": "Guest",
  "email": "crema.demo@gmail.com",
  "photoURL": "/assets/images/avatar/A11.jpg",
  "role": [
      "user",
      "admin"
  ]
}
export const useAuthUser = () => {
  const { user, isAuthenticated, isLoading } = useJWTAuth();
  return {
    isLoading,
    isAuthenticated : true,
    user: userDefault,
  };
};

export const useAuthMethod = () => {
  const { signInUser, signUpUser, logout } = useJWTAuthActions();

  return {
    signInUser,
    logout,
    signUpUser,
  };
};
//For Firebase Auth

// import {getUserFromFirebase} from '@crema/helpers/AuthHelper';
// import {
//   useFirebase,
//   useFirebaseActions,
// } from '@crema/services/auth/firebase/FirebaseAuthProvider';

/* eslint-disable prettier/prettier */



// export const useAuthUser = () => {

//   const {user, isAuthenticated, isLoading} = useFirebase();
//   let userDefault = {
//     "id": 1,
//     "uid": "9JrdIPmjxgfW3cu4XxyooUBdr733",
//     "displayName": "Guest",
//     "email": "crema.demo@gmail.com",
//     "photoURL": "/assets/images/avatar/A11.jpg",
//     "role": [
//         "user",
//         "admin"
//     ]
//   }
//   return {
//     isLoading,
//     isAuthenticated : true,
//     user: userDefault,
//   };
// };

// export const useAuthMethod = () => {
//   const {
//     logInWithEmailAndPassword,
//     registerUserWithEmailAndPassword,
//     logInWithPopup,
//     logout,
//   } = useFirebaseActions();

//   return {
//     logInWithEmailAndPassword,
//     registerUserWithEmailAndPassword,
//     logInWithPopup,
//     logout,
//   };
// };
/*
// For AWS Auth
import {getUserFromAWS} from '@crema/helpers';
import {
  useAwsCognito,
  useAwsCognitoActions,
} from '@crema/services/auth/AWSAuthProvider';

export const useAuthUser = () => {
  const {auth, user, isAuthenticated, isLoading} = useAwsCognito();
  return {
    auth,
    isLoading,
    isAuthenticated,
    user: getUserFromAWS(user),
  };
};

export const useAuthMethod = () => {
  const {
    signIn,
    signUpCognitoUser,
    confirmCognitoUserSignup,
    logout,
  } = useAwsCognitoActions();

  return {
    signIn,
    signUpCognitoUser,
    confirmCognitoUserSignup,
    logout,
  };
};*/
/*

//For Auth0
import { useAuth0 } from "@auth0/auth0-react";
import { useMemo } from "react";
import { getUserFromAuth0 } from "./helper/AuthHelper";

export const useAuthUser = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return {
    isLoading,
    isAuthenticated,
    user: useMemo(() => getUserFromAuth0(user), []),
  };
};

export const useAuthMethod = () => {
  const { loginWithRedirect, logout } = useAuth0();
  return { loginWithRedirect, logout };
};
*/
