const fastify = require('fastify')({ logger: true });
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'my_database.sqlite');
const db = new sqlite3.Database(dbPath);

// Route d'accueil
fastify.get('/', async (request, reply) => {
    reply.send({ message: 'Bienvenue sur le serveur Fastify !' });
});

// Route pour récupérer tous les étudiants
fastify.get('/students', async (request, reply) => {
    db.all('SELECT * FROM students', (err, rows) => {
        if (err) {
            return reply.status(500).send({ error: 'Erreur serveur' });
        }
        return reply.send(rows);
    });
});


// Ajouter un étudiant
fastify.post('/students', async (request, reply) => {
    const { prenom, note } = request.body;
    db.run('INSERT INTO students (name, grade) VALUES (?, ?)', [prenom, note], function(err) {
        if (err) {
            return reply.status(500).send({ error: 'Erreur serveur' });
        }
        reply.send({ id: this.lastID, prenom, note });
    });
});


// Écoute sur le port 3000
const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
        console.log(`Serveur lancé sur http://localhost:3000`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
