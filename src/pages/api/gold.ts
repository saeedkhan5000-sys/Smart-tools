// src/pages/api/gold.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch("https://www.goldapi.io/api/XAU/PKR", {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_GOLD_API_KEY as string,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}