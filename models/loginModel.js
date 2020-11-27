const { Pool } = require("pg");
const db_url = process.env.DATABASE_URL;

const pool = new Pool({
	connectionString: db_url,
	ssl: {rejectUnauthorized: false}
});
console.log(`Connected to ${db_url}`);


function validateUsername(username, callback) {
	console.log(`Validating username: ${username}`);
	//const sql = "SELECT * FROM public.user WHERE username = $1::text";
	//const values = [username];
	const query = {
		text:  'SELECT * FROM public.user WHERE username = $1::text',
		values: [username]
	};
	pool.query(query, (err, db_results) => {
		if (err) {
			console.log(err.stack);
		} else {
			if (!db_results.rows) {
				callback(null, false);
			} else {
				callback(null, true);
			}
		}
	});
}

function fetchPasswordByUsername(username, callback) {
	console.log(`Fetching password with username: ${username}`);
	const sql = "SELECT password FROM public.user WHERE id = $1::text";
	const params = [username];
	pool.query(sql, params, (err, db_results) => {
		if (err) {
			throw err;
		} else {
			const results = {
				success: true,
				list: db_results.rows
			}
			callback(null, results);
		}
	});
} 

module.exports = {
	validateUsername: validateUsername,
	fetchPasswordByUsername: fetchPasswordByUsername
}