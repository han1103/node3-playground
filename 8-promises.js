// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         //resolve([7, 4, 1])
//         reject('Things go wrong')
//     }, 2000)
// })

// doPromise.then((result)=>{
//     console.log('Success!', result)
// }).catch((error) => {
//     console.log('Error!', error)
// })

const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b)
        }, 2000)
    })
}

// add(1,2).then((result) => {
//     console.log(result)

//     add(result, 3).then((result1) => {
//         console.log(result1)
//     }).catch((error) => {
//         console.log(error)
//     })
// }).catch((error) => {
//     console.log('Error!', error)
// })

add(1,2).then((result) => {
    console.log(result)
    return add(result, 3)
}).then((newResult) => {
    console.log(newResult)
    return add(newResult, 4)
}).then((result2) => {
    console.log(result2)
}).catch((error) => {
    console.log(error)
})