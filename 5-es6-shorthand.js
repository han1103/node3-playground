const name = 'Lei'

const age = 48

const user = {
    name,
    age,
    location: 'Boston'
}

console.log('user:', user)

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {price, label:productLabel="Lei", rating = 5} = product

console.log(price)
console.log(productLabel)
console.log(rating)

const transaction = (type, {label:productLabel="Lei", rating = 5} = {}) => {
    console.log(productLabel)
    console.log(rating)
}

transaction('order', product)
transaction('order')