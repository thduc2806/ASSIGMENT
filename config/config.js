import {Client} from 'pg';

const Config = new Client({
    user: "bmaneyjpmdhptz",
    password: "e5ff1ed47b7fad7b628a66dbc66e87576eb53355c3424d42b105211c531ca839",
    database: "d7poijja96ohc1",
    port: 5432,
    host: "ec2-34-237-236-32.compute-1.amazonaws.com",
    ssl: true,
    requestCert: true,
    agent: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
});

Config.connect()

export default Config;