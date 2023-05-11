



let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;

// when you click the next button, it will execute the function "move to next slide"
document.
getElementById('carousel_button--next')
.addEventListener("click", function(){
    moveToNextSlide();
});
// when you click the previous button, it will execute the function "move to PREVIOUS slide"
document.
getElementById('carousel_button--prev')
.addEventListener("click", function(){
    moveToPrevSlide();
});

function updateSlidePosition(){
    for (let slide of slides){
        slide.classList.remove('carousel_item--visible');
        slide.classList.add('carousel_item--hidden');
    }
    slides[slidePosition].classList.add('carousel_item--visible');
}



// slide positon is  0 and total slides is 3 

function moveToNextSlide(){ 
  
    if(slidePosition === totalSlides -1 ){   // checks if you are at the end of the slides  
        slidePosition = 0;
    } else{
        slidePosition++;
    }
    updateSlidePosition();
}


function moveToPrevSlide(){
  
    if(slidePosition === 0){   // checks if you are at the end of the slides  
        slidePosition = totalSlides -1;
    } else{
        slidePosition--;
    }
    updateSlidePosition();
}
