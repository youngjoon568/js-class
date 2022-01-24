const mainImage = [
    "01.jpeg",
    "02.jpeg",
    "03.jpeg"
];


const myImage =  mainImage[Math.floor(Math.random() *  mainImage.length)];

const my_img = document.createElement("img");  
my_img.src = `imags/${myImage}`;

console.log(myImage);

document.body.appendChild(my_img);