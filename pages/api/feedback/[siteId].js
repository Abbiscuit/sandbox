// import { getFeedback } from '../../../lib/db-admin';

// export default async function handler(req, res) {
//   const siteId = req.query.siteId;
//   const { feedback } = await getFeedback(siteId);

//   const filtered = feedback.filter(fb => fb.siteId === siteId);

//   return res.status(200).json('filtered');

//   // if (filtered.length > 0) {
//   //   return res.status(200).json(filtered[0]);
//   // } else {
//   //   console.log(filtered);
//   //   return res.status(200).json({ msg: 'Feedback is not found' });
//   // }
// }
