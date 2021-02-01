import admin from './firebase-admin';

/* Feedback */
export const getAllFeedback = async siteId => {
  try {
    const snapshot = await admin
      .firestore()
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

    return { feedback };
  } catch (error) {
    return { error };
  }
};

// export const getFeedback = async siteId => {
//   const snapshot = await admin
//     .firestore()
//     .collection('feedback')
//     .where('siteId', '==', siteId)
//     .get();

//   const feedback = [];

//   snapshot.forEach(doc => {
//     if (!doc.exists) {
//       console.log('No such data');
//     }

//     feedback.push({
//       id: doc.id,
//       ...doc.data(),
//     });
//   });

//   return { feedback };
// };

/* Sites */
export const getAllSites = async () => {
  try {
    const snapshot = await admin.firestore().collection('sites').get();

    const sites = [];

    snapshot.forEach(doc => {
      sites.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return {
      sites,
    };
  } catch (error) {
    return {
      error,
    };
  }
};

export const getSite = async siteId => {
  const doc = await admin.firestore().collection('sites').doc(siteId).get();
  const site = { id: doc.id, ...doc.data() };

  return {
    site,
  };
};
