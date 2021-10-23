const button = document.querySelector("button");
const repairList = document.querySelector(".need-repair");

const createVehicle = function (type, numWheels, color) {
  const vehicle = {
    type: type,
    numWheels: numWheels,
    color: color
  };
  return vehicle;
};
const car = createVehicle("car", 4, "gray");
const bike = createVehicle("bike", 2, "red");
const skateboard = createVehicle("skate board", 4, "yellow");
const myVehicles = [car, bike, skateboard];
// console.log(myVehicles);

// Print each vehicle's property and value
for (let vehicle of myVehicles) {
  for (let key in vehicle) {
    console.log(key, vehicle[key]);
  }
}

bike.needsRepair = true;
skateboard.needsRepair = true;
car.needsRepair = false;
console.log(myVehicles);

// Filter vehicles need repair and print out
button.addEventListener("click", function () {
  repairList.innerHTML = "";
  const vehicleRepairList = [];
  for (let vehicle of myVehicles) {
    if (vehicle.needsRepair === true) {
      vehicleRepairList.push(vehicle);
    }
  }
  /* Or we can use this filter to create VehicleRepairList\

  const vehicleRepairList = myVehicles.filter(function(vehicle){
    return vehicle.needsRepair === true;
  }); */

  for (let item of vehicleRepairList) {
    const li = document.createElement("li");
    li.innerHTML = `My <span>${item.type}</span> needs some 💜`;
    repairList.append(li);
  }
});
