import { connect } from "mongoose";

export const connection = async () => {
    try {
        const db_mongo = await connect('mongodb://localhost/db-todo-list');
        console.log(db_mongo.connection.name);
    } catch (error) {
        console.error(error);
    }
}