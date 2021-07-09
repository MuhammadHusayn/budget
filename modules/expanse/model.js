const { fetch, fetchAll } =require('../../lib/postgres.js')

const EXPANSES = `
	SELECT
		expanse_id,
		expanse_name,
		expanse_cost,
		TO_CHAR(expanse_date, 'yyyy-MM-dd HH24:MI:SS') as expanse_date
	FROM expanse
`

const INSERT_EXPANSE = `
	INSERT INTO expanse (
		expanse_name,
		expanse_cost
	) VALUES ($1, $2)
	RETURNING *
`

const DELETE_EXPANSE = `
	DELETE FROM expanse
	WHERE expanse_id = $1
`

const getExpanses = () => fetchAll(EXPANSES)
const insertExpanse = ({ purpose, cost }) => fetch(INSERT_EXPANSE, purpose, +cost)
const deleteExpanse = ({ expanseId }) => fetch(DELETE_EXPANSE, expanseId)


module.exports = {
	deleteExpanse,
	insertExpanse,
	getExpanses
}