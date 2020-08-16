//Variables
const navButton = $('#nav-button');
const navContent = $('#nav-content');
// const navContent = $('.nav-content');

//Functions
function dropdown() {
    navContent.toggle("show");
}

//Event Listeners
navButton.click(dropdown());