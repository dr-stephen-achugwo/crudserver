import dotenv from 'dotenv';

// Load environment variables
dotenv.config();


// app/config/db.config.js
export default {
    HOST: "localhost",
    PORT: 8080,
    DB: process.env.MONGODB_URI
}	
	