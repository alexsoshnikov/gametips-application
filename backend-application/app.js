const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/auth.route')

const app = express()

const PORT = config.get('port') || 5000
const DB_URI = config.get('mongoURI')

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api/auth', authRouter)

const start = async () => {
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (error) {
        console.error("Server error: ", error.message)
        process.exit(1)
    }
}

start()
