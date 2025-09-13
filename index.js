require('dotenv').config()
const path = require('path')
const fastify = require('fastify')({logger: true})
const fastifyEnv = require("@fastify/env")

fastify.register(require("@fastify/cors"))
fastify.register(require("@fastify/sensible"))
fastify.register(require("@fastify/env"), {
    dotenv: true,
    schema: {
        type: "object",
        required: ["PORT", "MONGODB_URI", "JWT_TOKEN"],
        properties: {
            PORT: {type:"string"},
            MONGO_URI: {type:"string"},
            JWT_TOKEN: {type:"string"}
        }
    }
})




fastify.get('/', function (req, res){
    reply.send({hello: 'world'})
})

const schema = {
  type: 'object',
  required: [ 'PORT' ],
  properties: {
    PORT: {
      type: 'string',
      default: 3000
    }
  }
}

const options = {
  confKey: 'config',
  schema: schema,
  data: data 
}

fastify
  .register(fastifyEnv, options)
  .ready((err) => {
    if (err) console.error(err)

    console.log(fastify.config) 
    console.log(fastify.getEnvs())
  })

const start = async () => {
    try {
        await fastify.listen({port: process.env.PORT})
        fastify.log.info(
            `Server is listening at port http://localhost:${process.env.PORT}`
        )
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()