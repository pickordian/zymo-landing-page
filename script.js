import cardJSON from "./cards.js";
import CardJSON from "./cards.js";

// event handler function

function handleHeroInqClick() {
  document.getElementById("Contact").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function insertCards() {

  const cardsSection = document.getElementById('Cards');
  // extract object key: eg: 'card_1, card_2' then
  // use them to access CardJSON data 
  Object.keys(CardJSON).forEach(function (key, index) {

    const cardContainer = document.createElement("div");
    cardContainer.classList.add('card-container')
    // inside card container
    const cardLink = document.createElement("a");
    cardLink.classList.add('card');
    cardLink.href = CardJSON[key].url;
    cardLink.target = '_blank';
    cardLink.title = `Go to ${cardJSON[key].title} page`;
      // inside card
        // inside img-container
    const imgContainer = document.createElement("div");
    imgContainer.classList.add('img-container');
    
    const cardImg = document.createElement("img");
    cardImg.src = CardJSON[key].image_url;
    cardImg.alt = `Zymo's ${CardJSON[key].title} illustration`;
    cardImg.loading ='lazy';
       // end img-container
    const card = document.createElement('div');
        // inside div
    const cardTitle = document.createElement("h3");
    cardTitle.textContent = CardJSON[key].title;

    const cardPara = document.createElement("p");
    cardPara.textContent = CardJSON[key].description;
        // end div
      // end card-link
    const cardCta = document.createElement("a");
    cardCta.classList.add('card-cta');
    cardCta.classList.add('btn-eff');
    cardCta.href = CardJSON[key].url;
    cardCta.target = '_blank';
    cardCta.textContent = 'Learn more';
    cardCta.title = `Go to ${cardJSON[key].title} page`;
    // end card-container

    // add all tags to create final card
    card.appendChild(cardTitle);
    card.appendChild(cardPara);
    imgContainer.appendChild(cardImg);
    cardLink.appendChild(imgContainer);
    cardLink.appendChild(card);
    cardContainer.appendChild(cardLink);
    cardContainer.appendChild(cardCta);

    // append final card to the DOM
    cardsSection.appendChild(cardContainer);

  });
}

function handleUserScroll(){
  
}
function handleContactFormSubmit(event){
  event.preventDefault();
  const formInputs = event.target.querySelectorAll('input');
  formInputs.forEach((input)=>{
    if(input.value === ''){
      return;
    }
  }
  )
  // remove any old success message before adding new one
  const OldSucMes = document.getElementById('Contact-suc-mes');
  if(OldSucMes){
    OldSucMes.remove();
  }
  // adding new success message
  const formSubmittedMes = document.createElement('span');
  formSubmittedMes.textContent = 'Your form has been successfully submitted!';
  formSubmittedMes.classList.add('success-message');
  formSubmittedMes.id = 'Contact-suc-mes';

  const contactForm = document.getElementById('Contact-form');
  contactForm.insertBefore(formSubmittedMes, contactForm.firstChild);
  const contactSection = document.getElementById('Contact');
  contactSection.scrollIntoView({
    block: "start"
  })

}
// listeners 
const heroInqBtn = document.getElementById("Hero-inq-btn");
heroInqBtn.addEventListener("click", handleHeroInqClick);
window.onload = insertCards;
const contactForm = document.getElementById("Contact-form");
contactForm.addEventListener('submit', handleContactFormSubmit);

document.addEventListener('DOMContentLoaded', handleUserScroll);