
// slider 
let prevBtn = document.querySelector('.prevSlider');
let nextBtn = document.querySelector('.nextSlider');
let counter = 0;

nextBtn.addEventListener('click', ()=>{
    console.log(counter);

    counter++;

    let boxContentZadania = document.querySelector('.boxZadaniaPubliczneContent');
    boxContentZadania.style.transform = 'translateX('+ counter * -1200 +'px)';
    search(counter);
})
prevBtn.addEventListener('click', ()=>{
    console.log(counter);
    counter--;
    let boxContentZadania = document.querySelector('.boxZadaniaPubliczneContent');
    boxContentZadania.style.transform = 'translateX('+ counter * -1200 +'px)';
    search(counter);
})

function search(e){
    console.log(e)
     if(e<=1){
        nextBtn.disabled = false;
        nextBtn.style.cursor = 'pointer';
    }
    else if(e>=1){
        nextBtn.disabled = true;
        nextBtn.style.cursor = 'context-menu';
    }


    if(e>=1){
        prevBtn.disabled = false;
        prevBtn.style.cursor = 'pointer';
    }
    else if(e<=1){
        prevBtn.disabled = true;
        prevBtn.style.cursor = 'context-menu';
    }

}
// show image

