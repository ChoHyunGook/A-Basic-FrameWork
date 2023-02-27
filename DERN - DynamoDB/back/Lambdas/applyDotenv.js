

const applyDotenv = dotenv => {
    dotenv.config()
    return{
        port:process.env.PORT,
        origin:process.env.ORIGIN,
        AWS_TABLE_USER: process.env.AWS_TABLE_USER,
        AWS_TABLE_DEVICE: process.env.AWS_TABLE_DEVICE,
        aws_region: process.env.AWS_REGION,
        accessKeyId: process.env.AWS_ACCESSKEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESSKEY,
    }
}

export default applyDotenv