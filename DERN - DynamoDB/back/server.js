import express from 'express'
import morgan from 'morgan'
import dotenv from "dotenv";
import applyDotenv from "./Lambdas/applyDotenv";
import ResponseService from "./Lambdas/response";
import db from  './DataBase/database.js'
import basic from './app/routes/router.js'

async function startServer(){
    dotenv.config()
    const app =express()
    const {port,AWS_TABLE_USER } = applyDotenv(dotenv)

    //post 방식 일경우 begin
    //post 의 방식은 url 에 추가하는 방식이 아니고 body 라는 곳에 추가하여 전송하는 방식
    app.use(express.static('public'));
    app.use(express.urlencoded({extended: true})); // post 방식 세팅
    app.use(express.json()); // json 사용 하는 경우의 세팅



    //DynamoDB 연결확인
    db.scan({TableName:AWS_TABLE_USER},(err,data)=>{
        if(err){
            console.log('### AWS DynamoDB Connect Fail... ###')
        }else {
            console.log('### AWS DynamoDB Connect Success ###',data)
        }
    })


    app.use('/basic',basic)

    app.use(morgan('dev'))

    const responseService = new ResponseService()
    app.use((err, _req, res) => {
        if(err.name == "UnauthorizedError"){
            return responseService.unauthorizedResponse(res, err.message);
        }
    });

    app.listen(port, () => {
        console.log('***************** ***************** *****************')
        console.log('***************** ***************** *****************')
        console.log('********** 서버가 정상적으로 실행되고 있습니다 **********')
        console.log('***************** ***************** *****************')
        console.log('***************** ***************** *****************')
    })



}
startServer()