
const applyDotenv = dotenv => {
    dotenv.config()
    return{
        port:process.env.PORT,
        origin:process.env.ORIGIN,
        MARIA_DB_USER:process.env.MARIA_DB_USER,
        MARIA_DB_PASSWORD:process.env.MARIA_DB_PASSWORD,
        MARIA_DB_DATABASE:process.env.MARIA_DB_DATABASE
    }
}

export default applyDotenv