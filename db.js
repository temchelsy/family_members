import pg from 'pg';
const { Pool } = pg;


const pool = new Pool({
    user: 'postgres',
    password: 'chelsy237',
    host: 'localhost',
    database: 'chelsy',
    port: 5432,
});

pool.query('SELECT * FROM family_members', (err, result) => {
    if (err) {
        console.error('Error executing query:', err);
    } else {
        console.log('Query result:', result.rows);
    }
});

export default pool;
