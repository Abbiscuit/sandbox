import admin from './firebase-admin';

const firestore = admin.firestore();

export const getAllFeedback = async siteId => {
  const snapshot = await firestore
    .collection('feedback')
    .where('siteId', '==', siteId)
    .get();

  const feedback = [];

  snapshot.forEach(doc => {
    feedback.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return feedback;
};
