import { DummyDataResponse } from "@/lib/types";
import type { NextApiRequest, NextApiResponse } from "next";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DummyDataResponse | { error: string }>
) {
  const { method } = req.query;

  if (req.method === "GET") {
    if (method === "esewa") {
      const dummyData: DummyDataResponse = {
        amount: 1000,
        productName: "eSewa Recharge",
        transactionId: "TXN123456",
      };

      return res.status(200).json(dummyData);
    } else {
      return res.status(400).json({ error: "Unsupported method value" });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
