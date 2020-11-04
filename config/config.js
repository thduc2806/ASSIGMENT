import {Client} from 'pg';

const Config = new Client({
    user: "skfkphlaszgmel",
    password: "8efd269dfb4861093426700b1d64069ffb01af7c05ae8f0b463d5ff2f6224457",
    database: "ddf3o6img023gr",
    port: 5432,
    host: "ec2-3-210-23-22.compute-1.amazonaws.com",
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