const promise = new Promise(function(resolve, reject) {
    //doing some logic it gonna be executed synchronously
  
    resolve("fullfiled")
  })
  promise.then(v => {
    console.log(v)
  })
  console.log("global log")