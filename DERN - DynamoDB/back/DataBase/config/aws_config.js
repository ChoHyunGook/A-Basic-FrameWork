import dotenv from "dotenv"
import applyDotenv from "../../Lambdas/applyDotenv.js";

const {AWS_TABLE_USER, aws_region, accessKeyId, secretAccessKey } = applyDotenv(dotenv)


const awsConfig = {
    aws_table_name: AWS_TABLE_USER,
    aws_local_config:{
        region: 'local',
        endpoint: 'http://localhost:5000'
    },
    aws_remote_config:{
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
        region: aws_region
    }
}

export default awsConfig


