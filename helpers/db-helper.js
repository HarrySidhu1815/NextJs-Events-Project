import { MongoClient } from "mongodb";

export async function connectDatabase(){
    return await MongoClient.connect('mongodb+srv://harjobanpreet15:AmXBAfegAghNfnsg@events.ta9v3.mongodb.net/?retryWrites=true&w=majority&appName=Events')
}

export async function getDocument(client, collection, sort, filter={}){
    const db = client.db()

    return await db.collection(collection).find(filter).sort(sort).toArray()
}

export async function insertDocument(client, collection, document){
    const db = client.db()

    return await db.collection(collection).insertOne(document)
}