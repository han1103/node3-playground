const doPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        //resolve([7, 4, 1])
        reject('Things go wrong')
    }, 2000)
})

doPromise.then((result)=>{
    console.log('Success!', result)
}).catch((error) => {
    console.log('Error!', error)
})