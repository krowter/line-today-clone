import { NextApiResponse } from "next";
import axios from "axios";

export default async ({}, res: NextApiResponse) => {
  return await axios
    .get("https://today.line.me/id/portaljson")
    .then((response) => {
      res.status(200).json(JSON.stringify(response.data));
    })
    .catch((err) => {
      console.log({ ERROR: err });
      res.send({ status: "NOT OK" });
    });
};
