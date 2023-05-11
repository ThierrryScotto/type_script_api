import 'dotenv/config'
import 'reflect-metadata'

import { DataSource } from 'typeorm'

const PORT = process.env.DB_PORT as number | unefined

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})