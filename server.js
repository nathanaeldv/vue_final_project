const fastify = require('fastify')({ logger: true })
const sqlite3 = require('sqlite3').verbose()
const path = require('path')

const dbPath = path.join(__dirname, 'my_database.sqlite')
const db = new sqlite3.Database(dbPath)

const cors = require('@fastify/cors')

// Écoute sur le port 3000
const start = async () => {
  await fastify.register(cors)

  // Route pour récupérer tous les étudiants
  await fastify.get('/students', async (request, reply) => {
    db.all('SELECT * FROM students', (err, rows) => {
      if (err) {
        fastify.log.warn(err)
        return reply.status(500).send({ error: 'Erreur serveur' })
      }
      fastify.log.info(rows)
      return reply.send(rows)
    })
  })

  // Route d'accueil
  fastify.get('/', async (request, reply) => {
    return reply.send({ message: 'Bienvenue sur le serveur Fastify !' })
  })

  // Ajouter un étudiant
  fastify.post('/students', async (request, reply) => {
    const { name, grade } = request.body
    db.run(
      'INSERT INTO students (name, grade) VALUES (?, ?)',
      [name, grade],
      function (err) {
        if (err) {
          return reply.status(500).send({ error: 'Erreur serveur' })
        }
        return reply.send({ id: this.lastID, name, grade })
      }
    )
  })

  try {
    await fastify.listen({ port: 3000 })
    console.log(`Serveur lancé sur http://localhost:3000`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
