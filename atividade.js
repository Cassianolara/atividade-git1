const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
rl.question('Voce gosta de cafe?', (input)=>{
    const cafe = input
    if(cafe === 'sim'){
        console.log('Café traz muitos beneficios')
        rl.close()
    }else{
        if(cafe === 'nao' || cafe === 'não'){
        console.log('Muitas pessoas nao gostam de cafe')
        rl.close()
    }
}
})