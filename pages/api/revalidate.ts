import { isValidRequest } from "@sanity/webhook";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

const secret = process.env.SANITY_SECRET_TOKEN;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    console.error("Must be a POST request");
    return res.status(401).json({ message: "Must be a POST request" });
  }

  /*if (!isValidRequest(req, secret)) {
    res.status(401).json({ message: "Invalid signature" });
    return;
  }*/

  try {
    const type = "battle";
    const battleId = "aaed8b4e-7b9f-4d4d-8a38-c57ca57d3204";
    switch (type) {
      case "battle":
        await res.revalidate(`/battle/${battleId}`);
        return res.json({
          message: `Revalidated "${type}" with slug "${battleId}"`,
        });
    }
  } catch (err) {
    return res.status(500).send({ message: "Error revalidating" });
  }
}
