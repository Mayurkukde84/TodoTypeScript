import express, { Express } from 'express'
import dotenv from 'dotenv'
import { DataSource } from 'typeorm'
import cors from 'cors'

//Instantiate express app
const app: Express = express()

dotenv.config()

const port = process.env.PORT

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  synchronize: true
})

app.use(express.json())
app.use(cors())

AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running on ${port}`)
    })
  })
  .catch((err) => console.log(err))
