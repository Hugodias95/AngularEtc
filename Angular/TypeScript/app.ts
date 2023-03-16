let ola = (nome:String,sobrenome:String) => { //inferência de tipo
    console.log("Olá " + nome + sobrenome)
}

ola("Hugo", "Oliveira Dias")

//no CMD tsc app
// "outDir": "./dist", no tsconfig.JSON   
//tsc -w (CRIA O APP.JS NO DIR DEFINIDO COM WATCH)