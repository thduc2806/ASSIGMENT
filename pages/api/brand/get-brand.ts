import { NextApiRequest, NextApiResponse } from "next";
import Config from "../../../config/config";

export default function (request: NextApiRequest, response: NextApiResponse) {
    // process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
    Config.query('select * from brand;', (err, res) => {
        if (err) {
            console.log(err)
        }else {
            response.status(200)
            response.send(res.rows)
        }
    })
}