//importar a dependencai do sqlite
//import sqlite3 from "sqlite3";
const sqlite3 = require("sqlite3").verbose()

//criar objeto que ira fazeroperaçoes no bd
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//utilizar o obejeto de banco de dados, para nossas operações

db.serialize(()=>{
    //com comandos SQL eu vou:

    // 1 criar uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

// //     // 2 insserir dados na tabela

//     const query = `
//     INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
    
//         ) VALUES(?,?,?,?,?,?,?);
// `
    
//     const values = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60","Papersider", "Guilherme Gamballa, Jardin américa","Número 260", "Santa Catarina", "Rio do Sul", "Resíduos Eletrônicos, Lâmpada"
//     ]

//     function afterInsertData(err){
//         if(err){
//             return console.log(err)
//         }
//         console.log("cadastrado com sucesso")
//         console.log(this)

//     }

//      db.run(query, values, afterInsertData)
   
//     // 3 consultar os dados da tabela
//     db.all(`SELECT name FROM places`, function(err, rows){
//         if(err){
//             return console.log(err)
//         }
//         console.log("aqui estao os seus resistros")
//         console.log(rows)
//     })


    // // 4 deletar dados da tabela

    // db.run(`DELETE FROM places WHERE ID = ?`,[3], function(err){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("resistro deletado com sucesso!")
    // })
} )