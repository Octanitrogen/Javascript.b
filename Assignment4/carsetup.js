/* Nathan Stone | SE251.05 | 04/18/2017
 Assignment 4
 Please see the attached zip file. Go through the file carsetup.js and fill in the comments.
 Do not touch any of the other files. Turn in the zip file with the modified carsetup.js
 along with the other (unchanged!) files.
 */


var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var center = c.width / 2;

//Select the following Elements using the querySelector function

var carWidth = document.querySelector("#car-width .range");

var wheelDistance = document.querySelector("#wheel-distance .range");

var roofSlider = document.querySelector("#roof-height .range");

var ftSlider = document.querySelector("#front-tire .range");

var rtSlider = document.querySelector("#rear-tire .range");

var rearSlider = document.querySelector("#rear-pitch .range");

var frontSlider = document.querySelector("#front-pitch .range");

var colorInput = document.querySelector("#color .text");

var sponsored = document.querySelector("#sponsor .text");

var sponsorNameBox = document.querySelector("#sponsor .range");


//Open up the console and look at the properties for the protocar object
console.log(protocar);

/*	
 Create a new object called "car" in object literal notation. Give it all the properties and values of the protocar.
 Please note that the rt (rear tire), ft (front tire) and sponsor properties are child objects.

 */
var car = {
    width: 400,
    front: 100,
    rear: 100,
    roof: 100,
    color: "#ff0000",
    sponsor: {name: "", decal: false},
    ft: {x: 600, y: 550, radius: 100, color: "#000"},
    rt: {x: 300, y: 550, radius: 100, color: "#000"},
    topLimit: "550"
}

var timer = setInterval(animate, 100 / 60);

function animate() {
    ctx.clearRect(0, 0, c.width, c.height);

    //call the drawCar() function and pass it your car object
    drawCar(car);

    //convert the colorInput's value to a number and assign it to the car's color property
    car.color = colorInput.value;

    //convert the roofSlider's value to a number and assign it to the car's roof property
    car.roof = roofSlider.value;

    //convert the frontSlider's value to a number and assign it to the car's front property
    car.front = frontSlider.value;

    //convert the rearSlider's value to a number and assign it to the car's rear property
    car.rear = rearSlider.value;

    //convert the carWidth's value to a number and assign it to the car's width property
    car.width = carWidth.value;

    //set the roof, front and rear sliders' .max attributes to the car's topLimit property
    car.roof.max = car.topLimit;
    car.front.max = car.topLimit;
    car.rear.max = car.topLimit;

    //set the car's front and rear tires' radius properties equal to the ft and rt slider's values
    car.ft.radius = ftSlider.value;
    car.rt.radius = rtSlider.value;

    //create a variable called wd and assign the wheelDistance slider's value to it as a Number.
    var wd = parseInt(wheelDistance.value);

    //set the car's front tire's x property equal to the center plus wd.
    car.ft.x = center + wd;

    //set the car's rear tire's x property equal to the center minus wd.
    car.rt.x = center - wd;

    /*

     Use a conditional statement (if else) to determine whether the sponsored input is checked or not.

     if it is checked do the following:
     1. enable the sponsorNameBox
     2. set the car's sponsor decal to false
     3. set the car's sponsor name to the value of the sponsorNameBox
     else
     1. disable the sponsorNameBox
     2. set the car's sponsor decal to false

     */
    if (sponsored.checked == true) {
        car.sponsor.decal = true;
        car.sponsor.name = sponsorNameBox.value;
    } else {
        car.sponsor.decal = false;
    }

}
