import dataBase from '../../DataBase/index.js'
import applyDotenv from "../../lambdas/applyDotenv.js";
import dotenv from "dotenv";
dotenv.config()

export default function Service(){

    const {}=applyDotenv(dotenv)

    const db = dataBase.DatabaseModel


    return{
        service(req,res){

        }

    }
}