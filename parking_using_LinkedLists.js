/* This is just to depict a valet parking system 
using the linked list data structure. 
As this is going to be less efficient, since 
traversing the entire list just to find one car, 
doesn't make this a viable solution. Will have another try 
with Hash Tables.
*/
function Cars(number) {
    this.carNumber = number; //car number or car model
    this.next = null;  //Link to next car
}

function valetParking() {
    this.parkHead = null; //first car in the list
    this.parkLength = 0;  //number of cars
}


valetParking.prototype.parkCar = function(carNumber) {
    var car = new Cars(carNumber);
    var currentCar = this.parkHead;
    if (this.parkHead === null) {
        this.parkHead = car;
        this.parkLength++;
        return car;
    } else {

        while (currentCar.next) {
            currentCar = currentCar.next;
        }
        currentCar.next = car;
    }
    this.parkLength++;

    return car;
};

valetParking.prototype.exitCar = function(carNumber) {
    var currentCar = this.parkHead;
    var previousCar;
    if (currentCar.carNumber === carNumber) {
        this.parkHead = currentCar.next;
    } else {
        while (currentCar.carNumber !== carNumber) {
            previousCar = currentCar;
            currentCar = currentCar.next;
        }

        previousCar = currentCar.next;

    }
    currentCar = null;
    this.parkLength--;
};

var parking = new valetParking();
parking.parkCar('audi');
parking.parkCar('bmw');
parking.parkCar('gm');
parking.parkCar('ford');
parking.parkCar('toyota');
parking.exitCar('toyota');
parking.exitCar('ford');

console.log(parking);