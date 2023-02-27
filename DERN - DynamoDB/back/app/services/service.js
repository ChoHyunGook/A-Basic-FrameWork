import dynamoDB from '../../DataBase/database.js'
import applyDotenv from "../../lambdas/applyDotenv.js";
import dotenv from "dotenv";
dotenv.config()

export default function Service(){

    const {}=applyDotenv(dotenv)

    const db = dynamoDB()


    return{
        service(req,res){

        }

    }
}