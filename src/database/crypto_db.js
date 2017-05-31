import Dexie from 'dexie';

const db = new Dexie('crypto_db');
db.version(1).stores({
    value_history: '++id,date,currency,value'
});

export default db;
