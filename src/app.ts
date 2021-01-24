import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import * as pinejs from '@balena/pinejs'
import config from './config'

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})

const main = async () => {
  await pinejs.init(app, config)
  const port = process.env.PORT || 5000
  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })
}

main()