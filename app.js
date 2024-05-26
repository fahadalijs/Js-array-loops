// console.log(Array loops);

// const arr = ["Apple" , "Mango" , "Bannana" , "Orange" , "Graps"];
const div = document.querySelector("div");

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     div.innerHTML += `
//      <h1>${arr[i]}</h1>
//     `
// }

//arrow function

// const hello = username =>{
//     return `hello ${username}`
// }
// console.log(hello("Fahadali"));



// Array loops

// const arr = ["Apple" , "Mango" , "Bannana" , "Orange" , "Graps"];
// const div = document.querySelector("div");

// for (const iterator of arr) {
//     console.log(iterator);
//     div.innerHTML += `<h1>${iterator}</h1>`
// }


// const obj = {
//     username: "Fahad ali" , 
//     email: "Fahadali@gmail.com" ,
//     Age: "18" ,
//     hobbies: ["Swiming" , "Cricket" , "Football" , "Eating"]

// }

// for (const key in obj) {
//     // console.log(obj[key]);
//     console.log(`${key} ==> ${obj[key]}`);
// }


// foreach 
// map
// filter
// reduce

// callback
// heigher order function 


//callback function wo function hota ha jo ma kisi bhi function ka as an argument bhejdeta krdeta ho

// arr.forEach(function (item) {
//     console.log(item);
// })

// 
//callback function wo function hota ha jo ma kisi bhi function ka as an argument bhejdeta krdeta ho

// arr.forEach((item , index) =>{
//     console.log(item);
//    div.innerHTML += `<h1>${item}</h1>` 
// })

// const num = [1 , 2 , 3 , 4 , 5 , 6 , 7];

// const itereatedItem = num.map((item , index) =>{
//     // console.log(item);
// //    div.innerHTML += `<h1>${item}</h1>` 
// return item + 5
// })
// console.log(itereatedItem);



// const sumOfNum = num.map(item => item + 10 );

// console.log(sumOfNum);

// const sumOfNum = num.map(item => item > 10 );

// console.log("map" , sumOfNum);

// const filtered = num.filter((item) => {
//     return item > 5
// })
// console.log("filter" , filtered);



// let filteredArr = []

// for (let i = 0; i < num.length; i++) {
//     // console.log(num[i]);
//     if(num[i] > 5){
//         // console.log(num[i]);
//         filteredArr.push(num[i])

//     }
// }
// console.log(filteredArr);










const products = [
    // Electronics
    {
        name: "Wireless Mouse",
        price: 25.99,
        category: "Electronics",
        brand: "Logitech"
    },
    {
        name: "Smartphone",
        price: 699.99,
        category: "Electronics",
        brand: "Samsung"
    },
    {
        name: "LED Monitor",
        price: 129.99,
        category: "Electronics",
        brand: "Dell"
    },
    {
        name: "Bluetooth Speaker",
        price: 45.99,
        category: "Electronics",
        brand: "JBL"
    },
    {
        name: "Laptop",
        price: 999.99,
        category: "Electronics",
        brand: "Apple"
    },

    // Footwear
    {
        name: "Running Shoes",
        price: 59.99,
        category: "Footwear",
        brand: "Nike"
    },
    {
        name: "Sneakers",
        price: 75.99,
        category: "Footwear",
        brand: "Adidas"
    },
    {
        name: "Sandals",
        price: 25.99,
        category: "Footwear",
        brand: "Teva"
    },
    {
        name: "Formal Shoes",
        price: 120.00,
        category: "Footwear",
        brand: "Clarks"
    },
    {
        name: "Boots",
        price: 150.00,
        category: "Footwear",
        brand: "Timberland"
    },

    // Home Appliances
    {
        name: "Blender",
        price: 34.99,
        category: "Home Appliances",
        brand: "Oster"
    },
    {
        name: "Microwave Oven",
        price: 99.99,
        category: "Home Appliances",
        brand: "Panasonic"
    },
    {
        name: "Air Conditioner",
        price: 299.99,
        category: "Home Appliances",
        brand: "LG"
    },
    {
        name: "Vacuum Cleaner",
        price: 149.99,
        category: "Home Appliances",
        brand: "Dyson"
    },
    {
        name: "Toaster",
        price: 29.99,
        category: "Home Appliances",
        brand: "Breville"
    },

    // Stationery
    {
        name: "Notebook",
        price: 3.99,
        category: "Stationery",
        brand: "Moleskine"
    },
    {
        name: "Pen Set",
        price: 12.99,
        category: "Stationery",
        brand: "Parker"
    },
    {
        name: "Highlighters",
        price: 5.99,
        category: "Stationery",
        brand: "Sharpie"
    },
    {
        name: "Stapler",
        price: 7.99,
        category: "Stationery",
        brand: "Swingline"
    },
    {
        name: "Planner",
        price: 14.99,
        category: "Stationery",
        brand: "Erin Condren"
    },

    // Furniture
    {
        name: "Desk Chair",
        price: 89.99,
        category: "Furniture",
        brand: "Ikea"
    },
    {
        name: "Coffee Table",
        price: 129.99,
        category: "Furniture",
        brand: "West Elm"
    },
    {
        name: "Sofa",
        price: 499.99,
        category: "Furniture",
        brand: "Ashley Furniture"
    },
    {
        name: "Bookshelf",
        price: 79.99,
        category: "Furniture",
        brand: "Sauder"
    },
    {
        name: "Dining Table",
        price: 399.99,
        category: "Furniture",
        brand: "Pottery Barn"
    },

    // Fitness
    {
        name: "Yoga Mat",
        price: 19.99,
        category: "Fitness",
        brand: "Gaiam"
    },
    {
        name: "Dumbbells",
        price: 49.99,
        category: "Fitness",
        brand: "Bowflex"
    },
    {
        name: "Treadmill",
        price: 699.99,
        category: "Fitness",
        brand: "NordicTrack"
    },
    {
        name: "Resistance Bands",
        price: 14.99,
        category: "Fitness",
        brand: "Fit Simplify"
    },
    {
        name: "Exercise Bike",
        price: 299.99,
        category: "Fitness",
        brand: "Peloton"
    },

    // Kitchen Appliances
    {
        name: "Coffee Maker",
        price: 49.99,
        category: "Kitchen Appliances",
        brand: "Keurig"
    },
    {
        name: "Air Fryer",
        price: 89.99,
        category: "Kitchen Appliances",
        brand: "Ninja"
    },
    {
        name: "Stand Mixer",
        price: 199.99,
        category: "Kitchen Appliances",
        brand: "KitchenAid"
    },
    {
        name: "Refrigerator",
        price: 799.99,
        category: "Kitchen Appliances",
        brand: "Whirlpool"
    },
    {
        name: "Dishwasher",
        price: 399.99,
        category: "Kitchen Appliances",
        brand: "Bosch"
    }
];
// console.log(products);


// products.map((item)=>{
//     console.log(item);
// })





// const electronics = products.filter( item => {
//        return item.category === "Electronics" && item.price > 100
// }).filter((item) =>{
//     item.price < 200
// })


// const electronics = products.filter(item => item.category === 
// "Electronics").filter(item => item.price > 100).filter(item => item.price < 200)

// console.log(electronics);





products.map((item) =>{

    div.innerHTML += `
    <h1>Product name: ${item.brand} ${item.name}</h1>
    <h1>Category:  ${item.category}</h1>
    <h1>Price: ${item.price}</h1>
    <hr/>

    `

})



const filteredItem = (btn) => {
    div.innerHTML = " "
    console.log(btn.innerHTML);
    const filtered = products.filter(item =>
         item.category === btn.innerHTML).map(item =>{
            div.innerHTML += `
    <h1>Product name: ${item.brand} ${item.name}</h1>
    <h1>Category:  ${item.category}</h1>
    <h1>Price: ${item.price}</h1>
    <hr/>

    `
         })
    console.log(filtered);
    
}

