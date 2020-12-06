const { Pool } = require("pg");
const db_url = process.env.DATABASE_URL;

const pool = new Pool({connectionString: db_url});

function addUser(user, callback) {
	console.log(`Adding user: ${user.username}`);

	const statement = {
		text: 'INSERT INTO public.user (username, password, email_address, first_name, last_name, creation_date, last_update_date) VALUES ($1::text, $2::text, $3::text, $4::text, $5::text, NOW(), NOW());',
		values: [user.username, user.password, user.email, user.firstname, user.lastname]
	}

	pool.query(statement, (err, response) => {
		if (err) {
			console.log(err.stack);
		} else {
			if (response.rowCount === 1) {
				const success = {success: true};
				callback(null, success);
			}
		}
	})
}

module.exports = {
	addUser: addUser
}