import mongoose from "mongoose";

let url = process.env.URI_MONGO;

console.log(url);


// mongoose.connect(url)
// .then(() => console.log("Base de Datos Conectada"))
// .catch(error => console.log(error))

async function coneccionBaseDeDatos() {
    try {
      await  mongoose.connect(url);
        console.log("Base de datos 2 conectada");
        
    } catch (error) {
        console.log(error);
        
        
    }
}

coneccionBaseDeDatos()