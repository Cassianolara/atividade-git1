const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
rl.question('Você gosta de café?', (input)=>{
    const cafe = input
    if(cafe === 'sim' || cafe === 'Sim'){
        console.log('Café traz muitos benefícios')
        rl.close()
    }else{
        if(cafe === 'nao' || cafe === 'não' || cafe === 'Nao' || cafe === 'Não'){
        console.log('Muitas pessoas não gostam de café')
        rl.close()
    }
}
})
// alterar esse codigo
