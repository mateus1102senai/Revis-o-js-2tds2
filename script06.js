let armas = ["ump" , "mp40" , "scar" , "m10" , "awm"];

let ataques = [];

let nome = ['Raulking7']

ataques.push("Raulking7");
ataques.push(armas[2]);
ataques.push(armas[0]);
ataques.push(armas[3]);
ataques.push(armas[1]);



for(let i = 0; i < ataques.length; i++){
    if ([i] == 0) {
        console.log(`Nome do Robô: ${ataques[i]}`);
    } else {
        console.log(`Ataque ${i}: ${ataques[i]}`);
    
        

    }
}
