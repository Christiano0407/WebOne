const btnHamburger = document.querySelector(`#btnHamburger`);
const body = document.querySelector(`body`);
const header = document.querySelector(`.header`); 
const overlay = document.querySelector(`.overlay`);
const fadeElems = document.querySelector(`.has-fade`);


btnHamburger.addEventListener(`click`, function() {
    console.log("Click Hamburger");

    if(header.classList.contains(`open`)){
       body.classList.remove(`noscroll`);
       header.classList.remove(`open`);

    }else {
        body.classList.add(`noscroll`);
        header.classList.add(`open`);
    }
})