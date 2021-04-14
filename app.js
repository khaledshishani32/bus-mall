
'use strict'

let imageDiv = document.getElementById('images-div');
let leftImageElement = document.getElementById('left-image');
let midImageElement = document.getElementById('mid-image');
let rightImageElement = document.getElementById('right-image');

let maxAttempts = 10;
let userAttemptsCounter = 0;


let leftImageIndex;
let midImageIndex;
let rightImageIndex;

let namesArr = [];
let votesArr = [];
let shownArr = [];
let prevData= [];

function Product(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0 ;
    this.shown =0;

    Product.allProduct.push(this)
    namesArr.push(this.name);


    

}



Product.allProduct = [];





function updateStorage() {
    // console.log(JSON);
    let arrayString=JSON.stringify(Product.allProduct);
  
    console.log(Product.allProduct);
    console.log(arrayString);
    localStorage.setItem('product',arrayString);
  
  }



  function getProductOrders() {
     

    // get the data from the local storage
    let data =localStorage.getItem('product');
    console.log(data);
  
    // convert data back into a normal array of objects
    let productData=JSON.parse(data);
  
    console.log(productData);
  
    // if the first time we visit the page, there will not be an array of objects inside the local storage so we should handle it here:
    if (productData !==null) {
      Product.allProduct=productData;
    }
  
    
  }
  




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

let picName = [];








function renderThreeImages() {

    leftImageIndex = generateRandomIndex();
    midImageIndex = generateRandomIndex();
    rightImageIndex = generateRandomIndex();



    while (leftImageIndex === rightImageIndex || leftImageIndex === midImageIndex || midImageIndex === rightImageIndex || picName.includes(leftImageIndex) || picName.includes(midImageIndex) || picName.includes(rightImageIndex)) {



        leftImageIndex = generateRandomIndex();
        midImageIndex = generateRandomIndex();
        rightImageIndex = generateRandomIndex();



    }
    console.log(picName);

    leftImageElement.src = Product.allProduct[leftImageIndex].source;
    Product.allProduct[leftImageIndex].shown++;
    midImageElement.src = Product.allProduct[midImageIndex].source;
    Product.allProduct[midImageIndex].shown++;
    rightImageElement.src = Product.allProduct[rightImageIndex].source;
    Product.allProduct[rightImageIndex].shown++;


    picName = [];
    picName.push(leftImageIndex);
    picName.push(midImageIndex);
    picName.push(rightImageIndex);
     
    // Array.prototype.push.apply(Product.allProduct,prevData);
    //  updateStorage();
    //   prevData= getProductOrders();
    //    prevData =  getProductOrders();
    //    prevData += Product.allProduct;
      

      
    


    
 

    

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


        // let button = document.getElementById("button")
        // button.addEventListener('click', shownig);

        // button.hidden = false;

        for (let i = 0; i < Product.allProduct.length; i++) {
            votesArr.push(Product.allProduct[i].votes);
            shownArr.push(Product.allProduct[i].shown);
        }


    
        

        imageDiv.removeEventListener('click', handleUserClick);

        chart();
       
        updateStorage();


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

    button.removeEventListener('click', shownig);

}


//console.log(votesArr);
//console.log(shownArr);


// chart.js
function chart() {
    let ctx = document.getElementById('myChart').getContext('2d');

    let chart = new Chart(ctx, {
        // what type is the chart
        type: 'bar',

        //  the data for showing
        data: {
            //  for the names
            labels: namesArr,

            datasets: [
                {
                    label: 'Product\s votes',
                    data: votesArr,
                    backgroundColor: [
                        "coral",
                    ],

                    borderWidth: 1
                },

                {
                    label: 'Product\s shown',
                    data: shownArr,
                    backgroundColor: [
                        'brown',
                    ],

                    borderWidth: 1
                }

            ]
        },
        options: {}
    });

}



getProductOrders();