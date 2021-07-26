require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/auth.route')
const errorMiddleware = require('./middlewares/error.middleware')
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials: true, origin: process.env.CLIENT_URL}))
app.use('/api/auth', authRouter)
app.use(errorMiddleware)

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (error) {
        console.error("Server error: ", error.message)
        process.exit(1)
    }
}

start()
