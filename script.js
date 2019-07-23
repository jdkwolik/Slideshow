const nextButton = document.querySelector('#nextButton');
const prevButton = document.querySelector('#prevButton');
const image = document.querySelector('.container');

let counter = 0;

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

function nextImage(){
  image.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
  if (counter === 4){
    counter = -1;
  }
  counter++;
  image.style.backgroundImage = `url(img/puppy-${counter}.jpg)`
}
function prevImage(){
  image.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
  if (counter === 0){
    counter = 5;
  }
  counter--;
  image.style.backgroundImage = `url(img/puppy-${counter}.jpg)`
}
