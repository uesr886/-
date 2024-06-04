// Car.prototype.name = 'su7'
// Car.prototype.lang = 5000
// Car.prototype.height = 1400

// Car.prototype = {
//     name : 'su7'
//     lang : 5000
//     height : 1400
// }

function Car(color, owner) {
    // this.name = 'su7'
    // this.lang = 5000
    // this.height = 1400
    this.color = color
    this.owner = owner
}

let car1 = new Car('green', 'tian')
let car2 = new Car('yello', 'li')

console.log(car1);