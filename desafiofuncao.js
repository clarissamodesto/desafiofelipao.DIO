let vitorias = 50;
let derrotas = 10;
let { saldoVitorias, nivel} = calcularNivel (vitorias, derrotas);


function calcularNivel (vitoria, derrotas){
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias <10){
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20){
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50){
        nivel = "Prata";
    } else if (vitorias >=51 && vitorias <= 80){
        nivel = "Ouro";
    } else if (vitorias >=81 && vitorias <= 90){
        nivel = "Diamante";
    } else if (vitorias >= 1 && vitorias <= 100){
        nivel = "Lendario";
    } else {
        nivel = "Imortal"
    }

    return { saldoVitorias, nivel}
}

console.log ("O Herói tem saldo de " + [saldoVitorias] + " está no nível de " + [nivel] )