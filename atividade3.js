const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.question('Voce tem titulo de eleitor?  ', (input)=>{
    if(input === 'sim'){
        console.log('Voce pode votar! ')
        rl.close()
    }else if(input === 'nao' || input === 'Não' || input === 'não'){
        console.log('Voce nao pode votar! Faça o titulo de eleitor!!')
        rl.close()
    }
})