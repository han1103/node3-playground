const doCallBack = (callback) => {
    setTimeout(() => {
        callback("this is error", undefined)
    }, 2000)
}

doCallBack((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})

// setTimeout(()=>{
//     console.log('2 seconds is over')
// }, 4000)

// const names = ['Lei', 'Jerry', 'Liwen']
// const shortNames = names.filter((element)=>element.length<4)
// console.log(shortNames)

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longtitude: 0
//         }
//         callback(data)
//     }, 2000)
// }

// geocode('Boston', (data) => {
//     console.log(data)
// })

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// const add = (num1, num2, callback) => {
//     setTimeout(()=>{
//         callback(num1+num2)
//     }, 2000)    
// }

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })