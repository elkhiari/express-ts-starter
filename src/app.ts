import express from "express";
import { getIpAddresses } from "./utils/ipadress"
import logger from './utils/logger';
import dotenv from "dotenv"
dotenv.config()
import { connectToDatabase } from "./config/database";
const ipAddresses = getIpAddresses()
const PORT = parseInt(process.env.PORT as string, 10) || 4000;
const app = express();
app.use(express.json())
app.get('*',(req,res)=> {
    res.json({
        message : "Hello world"
    })
})

console.log(process.env.NODE_ENV)

const server = async() => {
    await connectToDatabase()
    app.listen(PORT, '0.0.0.0', () => {
        logger.info(`Server is running on http://localhost:${PORT}`)
        for (const [name, addresses] of Object.entries(ipAddresses)) {
          addresses.forEach(address => {
            logger.info(`Server is accessible in Network at http://${address}:${PORT}`)
          });
        }
      });
}

export default server