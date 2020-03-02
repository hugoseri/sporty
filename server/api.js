import path from 'path'
import http from 'http'
import jsonServer from 'json-server'
import bodyParser from 'body-parser'

// Create server
const api = jsonServer.create()
const router = jsonServer.router(path.resolve('./db.json'))
const middleware = jsonServer.defaults({ logger: false })

// Parse json
api.use(bodyParser.json())

// Bind required middleware
api.use(middleware)

// Use api router
api.use(router)

// Create server
const server = http.createServer(api)

// Export the server middleware
export { api, server, router }
