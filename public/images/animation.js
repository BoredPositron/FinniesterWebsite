const array = [
    {"price": 20, "manufacturer": "A"},
    {"price": 80, "manufacturer": "J"},
    {"price": 40, "manufacturer": "M"}
]

//based on price
const arrayBasedOnPrice = [...array]
//based on manufacturer 
const arrayBasedOnManufacter = [...array]

arrayBasedOnPrice.sort((a, b) => a.price - b.price)
arrayBasedOnManufacter.sort((a,b) => a.manufacturer - b.manufacturer)

console.log(arrayBasedOnPrice)
console.log(arrayBasedOnManufacter)