import maria from 'mysql'
import dotenv from "dotenv";
import applyDotenv from '../lambdas/applyDotenv.js'


const mariaDB = ()=>{
    dotenv.config()
    const{MARIA_DB_USER,MARIA_DB_PASSWORD,MARIA_DB_DATABASE}=applyDotenv(dotenv)

    const connection = maria.createConnection({
        host:'localhost',
        port:3306,
        user:MARIA_DB_USER,
        password:MARIA_DB_PASSWORD,
        database:MARIA_DB_DATABASE
    })

    return connection
}

export default mariaDB