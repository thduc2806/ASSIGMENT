import Config from '../../../config/config'
import {NextApiRequest, NextApiResponse} from "next";
import Cors from 'cors'

const cors = Cors({
    methods: ['GET', 'HEAD'],
})

export default async function (request: NextApiRequest, response: NextApiResponse) {
    // process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
    await runMiddleware(request, response, cors)
    Config.query('select * from product;', (err, res) => {
        if (err) {
            console.log(err)
        } else {
            response.status(200)
            response.send(res.rows)
        }
    })
}

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }
            return resolve(result)
        })
    })
}