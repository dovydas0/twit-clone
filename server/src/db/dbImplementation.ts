const { Pool } = require('pg');

const sleep = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "admin",
});

// Second connection for connecting to created database
export const poolNew = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "admin",
    database: "twitter_clone"
});

export const connectToDatabase = () => {
    try {        
        poolNew.connect();
        console.log('Connected to database');
    } catch (error) {
        console.log('Connection failed: ' + error.message);
    }
}

export const createDatabase = () => {
    try {
        pool.query(`DROP DATABASE IF EXISTS twitter_clone;`)
        pool.query(`CREATE DATABASE twitter_clone;`)
        console.log("New database created");
    } catch (error) {
        console.log("Database creation failed: " + error.message);
    }
};

export const createTables = async() => {
    try {
        poolNew.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
        
        await sleep(100);

        poolNew.query(`
            CREATE TABLE IF NOT EXISTS user_table (
                id UUID UNIQUE DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
                created_at TIMESTAMP DEFAULT NOW() NOT NULL,
                username VARCHAR(50) NOT NULL,
                password VARCHAR(255) NOT NULL,
                email VARCHAR(150) UNIQUE NOT NULL,
                dob DATE NOT NULL,
                avatar VARCHAR(255),
                cover_image VARCHAR(255),
                bio VARCHAR(160),
                location VARCHAR(30),
                website VARCHAR(100)
            );
        `)

        await sleep(100);

        poolNew.query(`
            CREATE TABLE IF NOT EXISTS post_table (
                id UUID UNIQUE DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL, 
                created_at TIMESTAMP DEFAULT NOW() NOT NULL, 
                user_id UUID NOT NULL, 
                content text NOT NULL, 
                likes integer DEFAULT 0 NOT NULL, 
                CONSTRAINT fk_post_user FOREIGN KEY (user_id) REFERENCES user_table (id)
            );
        `)

        await sleep(100);

        poolNew.query(`
            CREATE TABLE IF NOT EXISTS comment_table (
                id UUID UNIQUE DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL, 
                created_at TIMESTAMP DEFAULT NOW() NOT NULL, 
                user_id UUID NOT NULL, 
                post_id UUID NOT NULL, 
                content text NOT NULL, 
                likes integer DEFAULT 0 NOT NULL,
                CONSTRAINT fk_comment_user FOREIGN KEY (user_id) REFERENCES user_table (id)
            );
        `)

        await sleep(100);

        poolNew.query(`
            CREATE TABLE IF NOT EXISTS comments_table (
                id UUID UNIQUE DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
                created_at TIMESTAMP DEFAULT NOW() NOT NULL,
                comment_id UUID NOT NULL,
                user_id UUID NOT NULL,
                post_id UUID NOT NULL,
                CONSTRAINT fk_comment_comments FOREIGN KEY (comment_id) REFERENCES comment_table (id),
                CONSTRAINT fk_user_comments FOREIGN KEY (user_id) REFERENCES user_table (id),
                CONSTRAINT fk_post_comments FOREIGN KEY (post_id) REFERENCES post_table (id)
            );
        `)
        
        await sleep(100);

        poolNew.query(`
            CREATE TABLE IF NOT EXISTS user_post_table (
                id UUID UNIQUE DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
                created_at TIMESTAMP DEFAULT NOW() NOT NULL,
                user_id UUID NOT NULL,
                post_id UUID NOT NULL,
                isLiked boolean DEFAULT FALSE NOT NULL,
                isRetweeted boolean DEFAULT FALSE NOT NULL,
                CONSTRAINT fk_user_comments FOREIGN KEY (user_id) REFERENCES user_table (id),
                CONSTRAINT fk_post_comments FOREIGN KEY (post_id) REFERENCES post_table (id)
            );
        `)
        
        console.log("New tables created");
    } catch (error) {
        console.log("Table creation failed: " + error.message);
    }
};
