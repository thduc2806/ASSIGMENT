import Config from "../../../config/config";
import {NextApiRequest, NextApiResponse} from "next";

export default function (request: NextApiRequest, response: NextApiResponse) {
    // process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
    Config.query('select * from category;', (err, res) => {
        if (err) {
            console.log(err)
        } else {
            response.status(200)
            response.send(res.rows)
        }
    })
}