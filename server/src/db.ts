const { Pool, Client } = require('pg');

// const client = new Client();

// client.connect();

export const client = new Client({
    user: "postgres",
    host: "localhost",
    password: "admin",
    port: 5432,
});
