import { app } from "./app.js";
import connectDB from "./db/index.js";

connectDB()
    .then( () => {
        const server = app.listen( process.env.PORT || 8000, () => console.log(`Server is listening on Port ${process.env.PORT}`));
        server.on( "error", ( error ) => {
            console.error( "Error starting the server: ", error);
            process.exit(1);
        });
    })
    .catch( (error) => {
    console.error("Mongodb Connection Failed:  ", error);
});