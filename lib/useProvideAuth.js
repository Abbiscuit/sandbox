import firebase from '../lib/firebase';
import { useEffect, useState } from 'react';
import { createUser } from './db';

/* Custom Hooks */
export default function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const formatUser = user => {
    return {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      provider: user.providerData[0].providerId,
      photoURL: user.photoURL,
    };
  };

  const handleUser = async rawUser => {
    if (rawUser) {
      const user = formatUser(rawUser);
      setLoading(false);
      setUser(user);
      await createUser(user.uid, user);

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
