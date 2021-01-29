const btnHamburger = document.querySelector(`#btnHamburger`);
const body = document.querySelector(`body`);
const header = document.querySelector(`.header`); 
const overlay = document.querySelector(`.overlay`);

btnHamburger.addEventListener(`click`, function() {
    console.log("Click Hamburger");

    if(btnHamburger.classList.contains(`open`)){
       btnHamburger.classList.remove(`open`);
    }else {
        btnHamburger.classList.add(`open`);
    }
})