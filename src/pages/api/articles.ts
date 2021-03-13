import { NextApiResponse } from "next";
import getConfig from "next/config";
import axios from "axios";

const {
  serverRuntimeConfig: { apiUrl },
} = getConfig();

export default async ({}, res: NextApiResponse) => {
  return await axios
    .get(apiUrl)
    .then((response) => {
      res.status(200).json(JSON.stringify(response.data));
    })
    .catch((err) => {
      console.log({ ERROR: err });
      res.send({ status: "NOT OK" });
    });
};
