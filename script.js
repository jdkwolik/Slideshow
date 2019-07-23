const nextButton = document.querySelector('#nextButton');
const prevButton = document.querySelector('#prevButton');
const image = document.querySelector('.container');

let counter = 0;

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

function nextImage(){
  if (counter === 4){
    counter = -1;
  }
  counter++;
  image.style.backgroundImage = `url(img/puppy-${counter}.jpg)`
}
function prevImage(){
  if (counter === 0){
    counter = 5;
  }
  counter--;
  image.style.backgroundImage = `url(img/puppy-${counter}.jpg)`
}
