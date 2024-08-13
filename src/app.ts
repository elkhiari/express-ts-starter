import express from "express";
import { getIpAddresses } from "./utils/ipadress"
import logger from './utils/logger';
import dotenv from "dotenv"
dotenv.config()
import { connectToDatabase } from "./config/database";
const ipAddresses = getIpAddresses()
const PORT = parseInt(process.env.PORT as string, 10) || 8000;
const app = express();
app.use(express.json())
app.get('*',(req,res)=> {
    res.json({
        env : process.env
    })
})


const server = async() => {
    logger.info(`Starting ${process.env.npm_package_name} (v${process.env.npm_package_version}) in ${process.env.NODE_ENV} mode`);
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