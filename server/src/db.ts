const { Client } = require('pg');


export const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "admin",
    
});

client.connect();
client.query("SELECT * FROM user")
.then((data: any) => {
    console.log(data);
})
.finally(() => {
    client.end();
})