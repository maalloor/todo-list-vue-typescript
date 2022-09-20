import app from "./app";
import { connection } from "./database/database";

connection();
app.listen(4000);
console.log('Server is running on port 4000 🥳');

