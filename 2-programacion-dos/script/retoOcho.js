const firstDogImage = document.querySelector(".primero");
const firstDogName = 'Dina';

const secondDogImage = document.querySelector(".segundo");
const secondDogName = 'Luna';

const thirdDogImage = document.querySelector(".tercero");
const thirdDogName = 'Lana';


firstDogImage.innerHTML = `<h2>${firstDogName}</h2><img src="https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg" alt="">`
secondDogImage.innerHTML = `
    
        <h2>${secondDogName}</h2><img src="https://images.dog.ceo/breeds/malamute/n02110063_642.jpg" alt="">`
thirdDogImage.innerHTML = `
    
        <h2>${ thirdDogName}</h2><img src="https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg" alt="">`