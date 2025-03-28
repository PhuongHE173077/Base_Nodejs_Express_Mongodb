const { MongoClient } = require("mongodb")
const { env } = require("./environment")

let bookingInstance = null

const mongoClient = new MongoClient(env.MONGODB_URI)

export const CONNECT_DB = async () => {
  await mongoClient.connect()
  bookingInstance = mongoClient.db(env.MONGODB_DB)
}

export const GET_DB = () => {
  if (!bookingInstance) {
    throw new Error('You must connect to DB first')
  }
  return bookingInstance
}