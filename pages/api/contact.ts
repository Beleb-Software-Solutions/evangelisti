import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false });
  }

  try {
    const response = await fetch('https://api.wholix.ai/api/v1/public-hook/execute', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'X-Hook-Token': 'ph_pzENosyzilKZ3oC907dct1XUqu93ZDjtpWMpWTjUcllbbZzKxFaUWARxEu5i',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'insert',
        data: {
          name,
          email,
          message,
        },
      }),
    });

    const data = await response.json();

    if (data.success) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(200).json({ success: false });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(200).json({ success: false });
  }
}
