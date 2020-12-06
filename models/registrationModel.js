const { Pool } = require("pg");
const db_url = process.env.DATABASE_URL;

function addUser(user, callback) {
	console.log(`Adding user: ${user.username}`);

	const statement = {
		text: "INSERT INTO public.user (username, password, email_address, first_name, last_name, creation_date, last_update_date) VALUES ($1::text, $2::text, $3::text, :$4::text, $5::text, NOW(), NOW());",
		values: [user.username, user.password, user.email, user.firstname, user.lastname]
	}

	pool.query(statement, (err, response) => {
		if (err) {
			console.log(err.stack);
		} else {
			console.log(response);
			//callback
		}
	})
}