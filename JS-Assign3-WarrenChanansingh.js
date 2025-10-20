// pART 1 - JS file created


//Part 2 and 3: Creating the object. I chose a car object
let car = //1 object
{ 
  brand: "Kia",
  model: "Rio",
  year: 2014,
  color: "White", //4 properties created - brand, model, year and color

  // Method: to call and change/repaint the colour of the car. Part 4
  repaint: function(newColor) 
  {
    this.color = newColor;
    alert("The car has been repainted to: " + this.color);
  }
};

console.log("Original Car Object:", car); //Part 6

// Part 7
let newBrand = prompt("Enter a new brand:", car.brand);
car.brand = newBrand;

//Part 8
let newModel = prompt("Enter a new model:", car.model);
car.model = newModel;

// Part 9
let newColor = prompt("Enter a new color:", car.color);
car.repaint(newColor);

// Part 10
console.log("Updated Car Object:", car);
