import express from 'express'
import morgan from 'morgan'
import dotenv from "dotenv";
import ResponseService from "./lambdas/response.js";
import applyDotenv from './lambdas/applyDotenv.js'
import mariaDB from './Database/maria.js'





async function startServer(){
    dotenv.config()
    const app =express()
    const {port}=applyDotenv(dotenv)
    const db = mariaDB()

    //post 방식 일경우 begin
    //post 의 방식은 url 에 추가하는 방식이 아니고 body 라는 곳에 추가하여 전송하는 방식
    app.use(express.static('public'));
    app.use(express.urlencoded({extended: true})); // post 방식 세팅
    app.use(express.json()); // json 사용 하는 경우의 세팅



    app.use(morgan('dev'))


    //MariaDB 연결 확인
    db.connect(function (err){
        if(err){
            console.log('### MariaDB Connect Fail! ###',err)
        }else{
            console.log('### MariaDB Connect Success! ###')
            db.end();
        }
    })






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