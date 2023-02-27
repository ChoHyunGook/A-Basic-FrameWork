

const applyDotenv = dotenv => {
    dotenv.config()
    return{
        port:process.env.PORT,
        origin:process.env.ORIGIN,
        mongoUri:process.env.MONGO_URI,
        DB_NAME:process.env.DB_NAME,
    }
}

export default applyDotenv