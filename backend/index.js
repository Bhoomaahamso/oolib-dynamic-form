import express from 'express';
import cors from 'cors'
import formRoute from './routes/route.js';

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', formRoute)

app.listen(4000, () => console.log('Listening on port 4000'))