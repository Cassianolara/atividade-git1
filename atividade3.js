const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.question('Voce tem titulo de eleitor?  ', (input)=>{
    const resposta = input
    if(resposta === 'sim'){
        console.log('Voce pode votar! ')
        rl.close()
    }else if(resposta === 'nao' || resposta === 'Não' || resposta === 'não'){
        console.log('Voce nao pode votar! Faça o titulo de eleitor!!')
        rl.close()
    }
})