const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'studentFeedbackApp';
let db;

const connectToDatabase = async () => {
    if (!db) {
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        db = client.db(dbName);
    }
    return db;
};

const getDatabase = () => {
    if (!db) {
        throw new Error('Database not initialized. Call connectToDatabase first.');
    }
    return db;
};

module.exports = {
    connectToDatabase,
    getDatabase,
};