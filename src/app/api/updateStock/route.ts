// pages/api/updateStock.js
import { client } from '../../../sanity/lib/client';

import { NextApiRequest, NextApiResponse } from 'next';




export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'POST') {
    const { productId, quantity } = req.body;

    try {
      // Fetch the current stock quantity
      const product = await client.getDocument(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      const currentStock = product.stockQuantity;

      if (currentStock < quantity) {
        return res.status(400).json({ error: `Only ${currentStock} items available in stock.` });
      }

      // Update the stock quantity
      await client
        .patch(productId)
        .set({ stockQuantity: currentStock - quantity })
        .commit();

      res.status(200).json({ message: 'Stock updated successfully!' });
    } catch (error) {
      console.error('Error in updateStock API:', error);
      res.status(500).json({ error: 'Update failed', details: (error as Error).message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}