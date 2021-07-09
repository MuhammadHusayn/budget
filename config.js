const PORT = process.env.PORT || 4000
const host = 'localhost'

const pgConfig = {
	connectionString: "postgres://uzrkjicn:kNXq7CXt3zirNBRl_HgeKPjta2AT2NY4@batyr.db.elephantsql.com/uzrkjicn"
}

module.exports = {
	pgConfig,
	PORT,
	host,
}