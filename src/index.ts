import express from 'express'
import router from './routes'
import cors from 'cors'

const PORT: number = 3001


const app = express()
app.use(express.json())
app.use(cors({
    origin: '*'
}));


app.use(router)


app.listen(PORT, () => console.log(`App is listening on http://localhost:${PORT}`))