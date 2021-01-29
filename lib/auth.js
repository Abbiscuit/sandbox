import firebase from './firebase';
import { createContext, useContext, useEffect, useState } from 'react';

const authContext = createContext();

export default function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

/* Shorthand context */
export const useAuth = () => {
  return useContext(authContext);
};

/* Custom Hooks */
function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleUser = async rawUser => {
    if (rawUser) {
      const user = formatUser(rawUser);
      setLoading(false);
      setUser(user);
      return user;
    } else {
      setLoading(false);
      setUser(false);
      return false;
    }
  };

  const signinWithGoogle = async () => {
    setLoading(true);
    const resp = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
    const user = resp.user;
    await handleUser(user);
    return user;
  };

  const signout = async () => {
    await firebase.auth().signOut();
    await handleUser(false);
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    signinWithGoogle,
    signout,
  };
}

const formatUser = user => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  };
};
