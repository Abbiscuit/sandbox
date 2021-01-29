import firebase from './firebase';

const firestore = firebase.firestore();

export const createUser = async (uid, data) => {
  const usersRef = firestore.collection('users').doc(uid);
  const user = await usersRef.set({ uid, ...data }, { merge: true });

  return user;
};

export const createSite = async data => {
  const siteRef = firestore.collection('sites');
  const site = await siteRef.add(data);
  return site;
};
