import express from 'express'
import { AppDataSource } from './data-source'

AppDataSource.initialize().then(() => {
  const app = express()

  app.use(express.json())

  app.get('/', (req, res) => {
    return res.json('tudo certo')
  })

  console.log("I am here")
  return app.listen(process.env.PORT)
}).catch((error) => {
  console.log(error)
})