document.addEventListener("DOMContentLoaded", function () {
    const startDateInput = document.getElementById("start-date");
    const endDateInput = document.getElementById("end-date");
    const addItineraryButton = document.getElementById("add-item");
    const itineraryList = document.getElementById("itinerary-list");
    const addTimeInput = document.getElementById("add-time");
    const addActivityInput = document.getElementById("add-activity");

    // Get destination elements
    const destinationInput = document.getElementById("destination");
    const setDestinationButton = document.getElementById("set-destination");
    const destinationText = document.getElementById("destination-text");

    // Event listener to set the destination
    setDestinationButton.addEventListener("click", function () {
        const destination = destinationInput.value;
        if (destination) {
            destinationText.textContent = destination;
            destinationInput.value = "";
        } else {
            alert("Please enter a destination.");
        }
    });
});

let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
});

const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');

// Show navbar
navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

// Hide side bar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if (e.target.id !== "navbar-collapse" && e.target.id !== "navbar-show-btn" && e.target.parentElement.id !== "navbar-show-btn") {
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
});

//Itinerary 

document.addEventListener('DOMContentLoaded', function () {
    let cardWrap = document.querySelector('.cards');
    let newCardButton = document.querySelector('.new-card');

    cardWrap.addEventListener('click', function (e) {
        if (e.target.classList.contains('card__title')) {
            let parentCard = e.target.parentElement;
            let isActive = parentCard.classList.contains('is-active');
            let activedItem = cardWrap.querySelector('.card.is-active');

            if (!isActive && activedItem) {
                activedItem.classList.remove('is-active');
            }
            parentCard.classList.toggle('is-active');
            cardWrap.classList.toggle('is-active', !isActive);
        }
    });

    newCardButton.addEventListener('click', function () {
        let lastCard = cardWrap.querySelector('.card:last-child');
        let lastNumber = +lastCard.className.match(/\d+/);
        let newCard = lastCard.cloneNode(true);
        newCard.className = newCard.className.replace(/\d+/, lastNumber + 1);
        newCard.classList.remove('is-active');

        lastCard.parentElement.insertBefore(newCard, lastCard.nextSibling);

        reCalcPos();
    });

    let reCalcPos = () => {
        let cards = Array.from(cardWrap.querySelectorAll('.card'));
        let count = cards.length;

        cards.forEach((card, i) => {
            card.style.transform = `translateY(calc(${i / count} * (100% - 1.5rem)))`;
        });
    };
});

// Get the text box element
const userTextBox = document.querySelector('.user-text-box');

// Add an event listener to make it editable
userTextBox.addEventListener('click', () => {
    userTextBox.contentEditable = true;
});
