const PORT = process.env.PORT || 4000
const host = 'localhost'

const pgConfig = {
	user: 'postgres',
	host: 'localhost',
	port: 5432,
	password: '2303',
	database: 'budget'
}

module.exports = {
	pgConfig,
	PORT,
	host,
}