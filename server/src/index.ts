import express from 'express';
import cors from 'cors';
import router from './router';

const app = express();
const PORT = 8000;

// middleware
app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//     res.end("home");
// })

// // Implementing a database
// app.get('/db', (req, res) => {
//     createDatabase();
//     setTimeout(() => {
//         connectToDatabase();
//         setTimeout(() => {
//             createTables();
//         }, 1000)
//     }, 1000)
//     res.end('hi');
// })

// app.get('/users', async (req, res) => {    
//     const users = await getUsers()

//     const usernames = users.rows.map((userRow: { username: string; }) => userRow.username)
    
//     console.log(usernames);
    
    
//     return res.json(usernames);
// })

// app.post('/users', async (req, res) => {
//     try {
//         await addUser('usern', 'passw', 'email@email', new Date('2000-10-10'));
//         return res.end("success");
//     } catch (error) {
//         console.log("error adding user", error)
//         return res.status(400).end("error adding user");
//     }
    
// })

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`); 
})

app.use('/', router());