import applyDotenv from "../../lambdas/applyDotenv.js";
import mariaDB from '../../Database/maria.js'
import dotenv from "dotenv";
dotenv.config()

export default function Service(){

    const {}=applyDotenv(dotenv)
    const db = mariaDB()

    return{
        service(req,res){

        }

    }
}