import express from 'express';
import http from 'http';
import router from './route.js';
import ConnectDB from './db.js';
import cors from 'cors'

const PORT = process.env.PORT || 4560

ConnectDB();


const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})

export default server
