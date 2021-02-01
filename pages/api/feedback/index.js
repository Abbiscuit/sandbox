import { getAllFeedback } from '../../../lib/db-admin';

export default async function handler(req, res) {
  const { feedback } = await getAllFeedback();

  return res.status(200).json(feedback);
}
