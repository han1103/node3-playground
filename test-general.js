// var Employee = {
//     firstname: "John",
//     lastname: "Doe",
//     tokens: [
//         {
//             "_id": "5d62de4e2259337184f29859",
//             "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDYyZGU0ZDIyNTkzMzcxODRmMjk4NTgiLCJpYXQiOjE1NjY3NjA1MjZ9.hzGOIu2gQZKMK5Itq7_huVkEzlSMgEKLKbIR5eZurDg"
//         },
//         {
//             "_id": "5d62dee12259337184f2985a",
//             "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDYyZGU0ZDIyNTkzMzcxODRmMjk4NTgiLCJpYXQiOjE1NjY3NjA2NzN9.7XS-Xaqr-_iGdb4WlfFXJDnC7SERWJhrOQGg80Awhw0"
//         },
//         {
//             "_id": "5d6ae26a68c0f450f89eca07",
//             "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDYyZGU0ZDIyNTkzMzcxODRmMjk4NTgiLCJpYXQiOjE1NjcyODU4NjZ9.RrnKTOzaRSxvhrDEwbr0JFe57WikHqsms3Fx_mLRlCI"
//         }
//     ]
//   }

const Employee = 
{
    _id : "5d62de4d2259337184f29858",
    age : 0,
    name : "Shu QI",
    email : "shuqi@hotmail.com",
    password : "$2a$08$7HJ0/ht0BhP6Tnzb2QuIwewaIJbGJxEVw.M2FwSv1epZbRzO39hvC",
    tokens : [ 
        {
            _id : "5d62de4e2259337184f29859",
            token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDYyZGU0ZDIyNTkzMzcxODRmMjk4NTgiLCJpYXQiOjE1NjY3NjA1MjZ9.hzGOIu2gQZKMK5Itq7_huVkEzlSMgEKLKbIR5eZurDg"
        }, 
        {
            _id : "5d62dee12259337184f2985a",
            token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDYyZGU0ZDIyNTkzMzcxODRmMjk4NTgiLCJpYXQiOjE1NjY3NjA2NzN9.7XS-Xaqr-_iGdb4WlfFXJDnC7SERWJhrOQGg80Awhw0"
        }, 
        {
            _id : "5d6ae26a68c0f450f89eca07",
            token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDYyZGU0ZDIyNTkzMzcxODRmMjk4NTgiLCJpYXQiOjE1NjcyODU4NjZ9.RrnKTOzaRSxvhrDEwbr0JFe57WikHqsms3Fx_mLRlCI"
        }
    ],
    __v : 5
}

 var x  = Object.assign({}, Employee)
  console.log(x);
  

  //delete Employee.firstname;
  Employee.tokens=[]
  delete Employee.tokens;
  
  //console.log(Employee);