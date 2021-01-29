import admin from '../../lib/firebase-admin';

export default async function handler(req, res) {
  const snapshot = await admin.firestore().collection('sites').get();

  let sites = [];

  const data = snapshot.docs.map(doc => {
    if (!doc.exists) {
      console.log('no data');
    }

    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  sites.push(data);

  return res.status(200).json(sites);
}
