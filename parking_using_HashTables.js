/* This is just to depict a valet parking system 
using the Hash Tables. 
With this data structure, I think accessing car using 
its car number is much efficient as compared to Linked Lists.
*/

// Simple Hash function to get indexes (parking spots)
var hashFunction = (string, max) => {
  var hashFunction = 0;
  for (var i = 0; i<string.length; i++) {
    hashFunction += string.charCodeAt(i);
  }
  return hashFunction % max ;
};


//Defining parking space functioon along with its space capacity i.e. how many cars can be parked
var parking = function() {
  var parkSpace = [];  
  const parkLimit = 20; //maximum 20 cars can be parked
  
  //This function is to print the entire parking space with parked cars and "undefined" if empty or no cars.
  this.print = function() {
    console.log(parkSpace);
  };
  
  //Defining a function to park the cars with its carNumber as Key and carModel as Value
  this.parkCar = function(carNumber,carModel)  {
    var parkSpot = hashFunction(carNumber, parkLimit);  //Define parkSpot for a car or an index in array
    if(parkSpace[parkSpot] === undefined) {             //If undefined i.e. empty then add carNumber and carModel directly.
      parkSpace[parkSpot] = [[carNumber,carModel]];
    }
    else {                                              //else find the parkspot or the index in the array and add the value.
      var inserted = false; 
      for (var i=0; i<parkSpace.length; i++) {
        if (parkSpace[parkSpot][i][0] === key) {
          parkSpace[parkSpot][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        parkSpace[parkSpot].push([carNumber,carModel]);
      }
    }
  };
  
  //Defining a function to unpark the cars from the parking space
  this.unparkCar = function(carNumber) {
    var parkSpot = hashFunction(carNumber, parkLimit);
    if(parkSpace[parkSpot].length === 1 && parkSpace[parkSpot][0][0] === carNumber) {
      delete parkSpace[parkSpot];
    }
    else {
      for (var i = 0; i<parkSpace.length; i++) {
        if(parkSpace[parkSpot][i][0] === carNumber) {
          delete parkSpace[parkSpot][i];
        }        
      }
    }
  };

  //Defing a function to search a car using carNumber
  this.searchCar = function(carNumber) {
    var parkSpot = hashFunction(carNumber, parkLimit);
      if(parkSpace[parkSpot] === undefined) {
        return undefined;
      } else {
        for (var i = 0; i<parkSpace.length; i++) {
          if(parkSpace[parkSpot][i][0] === carNumber) {
            return parkSpace[parkSpot][i][1];
         }
       }
     }
   };
};

var park = new parking();
park.parkCar('car1','Audi');
park.parkCar('car2','Fiat');
park.parkCar('car3','Ford');
park.parkCar('car4','Toyota');
park.parkCar('car5','Hyundai');
park.unparkCar('car5');
console.log(park.searchCar('car1'));
park.print();