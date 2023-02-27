import AWS from "aws-sdk";
import config from './config/aws_config.js'
export default function Database(){

    AWS.config.update(config.aws_remote_config);//config 세팅
    const connection = new AWS.DynamoDB.DocumentClient();//몽고디비 connection개념

    return connection
}