
'use strict'

let imageDiv = document.getElementById('images-div');
let leftImageElement = document.getElementById('left-image');
let midImageElement = document.getElementById('mid-image');
let rightImageElement = document.getElementById('right-image');

let maxAttempts = 20;
let userAttemptsCounter = 0;


let leftImageIndex;
let midImageIndex;
let rightImageIndex;

let namesArr=[];
let votesArr=[];
let shownArr=[];


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

    while (leftImageIndex === rightImageIndex || leftImageIndex === midImageIndex || midImageIndex === rightImageIndex) {

        //leftImageIndex = generateRandomIndex();
        midImageIndex = generateRandomIndex();
        rightImageIndex = generateRandomIndex();


    }

    
    
    


    leftImageElement.src = Product.allProduct[leftImageIndex].source;
    Product.allProduct[leftImageIndex].shown++;
    midImageElement.src = Product.allProduct[midImageIndex].source;
    Product.allProduct[midImageIndex].shown++;
    rightImageElement.src = Product.allProduct[rightImageIndex].source;
    Product.allProduct[rightImageIndex].shown++;



}

renderThreeImages();





imageDiv.addEventListener('click', handleUserClick);



console.log(imageDiv);



function handleUserClick(event) {
    //console.log(event.target.id);

   
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
        } else {
            alert("please click in image !");
            userAttemptsCounter--;
        }

        renderThreeImages();


    } else {


        let button = document.getElementById("button")
        button.addEventListener('click', shownig);

        button.hidden = false;

        for(let i = 0 ; i<Product.allProduct.length;i++){
            votesArr.push(Product.allProduct[i].votes);
            shownArr.push(Product.allProduct[i].shown);
        }

            
        


        imageDiv.removeEventListener('click', handleUserClick);
        




    }



}




function shownig() {

    let list = document.getElementById('results-list');
    let productResult;

    for (let i = 0; i < Product.allProduct.length; i++) {
        productResult = document.createElement('li');
        list.appendChild(productResult);

        productResult.textContent = `${Product.allProduct[i].name} has ${Product.allProduct[i].votes} votes and was seen ${Product.allProduct[i].shown} times.`

    }
  
    button.removeEventListener('click' , shownig);

}   
