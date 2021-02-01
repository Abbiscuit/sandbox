import { getAllSites } from '../../lib/db-admin';

export default async function handler(req, res) {
  const { sites, error } = await getAllSites();

  if (error) {
    res.status(500).json({ error });
  }

  return res.status(200).json({ sites });
}
