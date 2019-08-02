// const square = function(x) {
//     return Math.pow(x,2)
// }

// const square = (x) => {
//     return Math.pow(x,2)
// }

const square = (x) => Math.pow(x, 2)

console.log(square(3))

const event = {
    name: 'Birthday Party',
    guestList: ['Lei', 'Liwen', 'Jerry', 'Kevin'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => console.log(guest + ' is attending ' + this.name))
    },
    printGuestList1 : function(){
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => console.log(guest + ' is attending ' + this.name))
    }
}

event.printGuestList1()