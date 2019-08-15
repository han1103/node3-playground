const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b)
            //reject('I am bad')
        }, 2000)
    })
}

const dowWork = async () => {
    //throw new Error('Error')
    //return 'Lei'
    const sum = await add(2, 3)
    const sum1 = await add(sum, 20)
    const sum2 = await add(sum1, 50)
    return sum2
}

dowWork().then((result) => {
    console.log('result:', result)
}).catch((e) => {
    console.log('Error!', e)
})