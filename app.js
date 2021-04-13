
'use strict'


let leftImageElement = document.getElementById('left-image');
let midImageElement = document.getElementById('mid-image');
let rightImageElement = document.getElementById('right-image');

let maxAttempts = 10;
let userAttemptsCounter = 0;


let leftImageIndex;
let midImageIndex;
let rightImageIndex;


function Product(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.shown = 0;

    Product.allProduct.push(this)

}



Product.allProduct = [];




new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');



console.log(Product.allProduct);


function generateRandomIndex() {

    return Math.floor(Math.random() * Product.allProduct.length);
}

// console.log(generateRandomIndex());

function renderThreeImages() {

    
    leftImageIndex = generateRandomIndex();
    midImageIndex = generateRandomIndex();
    rightImageIndex = generateRandomIndex();

    while (leftImageElement === rightImageElement || leftImageElement === midImageIndex || midImageIndex ===rightImageElement) {
       
        renderThreeImages();
        

    }


    

    leftImageElement.src = Product.allProduct[leftImageIndex].source;
    midImageElement.src = Product.allProduct[midImageIndex].source;
    rightImageElement.src = Product.allProduct[rightImageIndex].source;



}

renderThreeImages();



let imageDiv = document.getElementById('images-div');

imageDiv.addEventListener('click', handleUserClick);

console.log(imageDiv);


function handleUserClick(event) {
    console.log(event.target.id);

    // add to attempts

    userAttemptsCounter++;
    console.log(userAttemptsCounter);
    //userAttemptsCounter++;


    if (userAttemptsCounter <= maxAttempts) {

        if (event.target.id === 'left-image') {
            Product.allProduct[leftImageIndex].votes++;
        } else if (event.target.id === 'right-image') {
            Product.allProduct[rightImageIndex].votes++;
        } else if (event.target.id === 'mid-image') {
            Product.allProduct[midImageIndex].votes++;
        } else if (event.target.id === 'images-div') {
            console.log("hi");
        }
        
        renderThreeImages();


    }else{

       /* let button = document.getElementById("btn")
        button = document.createElement('button');*/

        let list = document.getElementById('results-list');//addlistner 

        let productResult;

        for (let i = 0; i < Product.allProduct.length; i++) {
            productResult = document.createElement('li');
            list.appendChild(productResult);

            productResult.textContent = `${Product.allProduct[i].name} has ${Product.allProduct[i].votes} votes and was seen ${Product.allProduct[i].shown} times.`

        }

        imageDiv.removeEventListener('click', handleUserClick);
    




    }



        
        

        

}