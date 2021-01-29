import admin from '../../lib/firebase-admin';

export default async function handler(req, res) {
  const snapshot = await admin.firestore().collection('sites').get();
  const sites = [];

  snapshot.forEach(doc => {
    if (!doc.exists) {
      console.log('No such data');
    }

    sites.push({ id: doc.id, ...doc.data() });
  });

  return res.status(200).json({ sites });
}
