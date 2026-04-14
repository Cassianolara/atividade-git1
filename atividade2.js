const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout

})

rl.question('Digite um numero e descubra se ele é par ou impar:   ', (input)=>{
    const numero = input
    const number = numero % 2
    if(number === 0){
        console.log('Este numero é par')
        rl.close()
    }else{
        console.log('Este numero é impar')
        rl.close()
    }
})