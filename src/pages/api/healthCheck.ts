import { NextApiResponse } from "next";

export default (res: NextApiResponse) => {
  res.status(200).json({ status: "OK", uptime: process.uptime });
};
