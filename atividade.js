const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
rl.question('Você gosta de café?', (input)=>{
    const cafe = input
    if(cafe === 'sim'){
        console.log('Café traz muitos benefícios')
        rl.close()
    }else{
        if(cafe === 'nao' || cafe === 'não' || cafe === 'Não' || cafe === 'Nao'){
        console.log('Muitas pessoas não gostam de café')
        rl.close()
    }
}
})
// ajuste de gramatica
