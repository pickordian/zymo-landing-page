import CardJSON from "./cards.js";

function handleHeroInqClick() {
  document.getElementById("Contact").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function insertCards() {
  let newCards ='';
  // extract object key: eg: 'card_1, card_2' then
  // use them to access CardJSON data 
  Object.keys(CardJSON).forEach(function (key, index) {
    newCards +=
    `<div class="card-container">
        <a href=${CardJSON[key].url} class="card">
          <img
            src="${CardJSON[key].image_url}"
            alt="Zymo ${CardJSON[key].title} illustration"
          />
          <div>
            <h3>${CardJSON[key].title}</h3>
            <p>
              ${CardJSON[key].description}
            </p>
          </div>
        </a>
        <a href=${CardJSON[key].url} class="card-link">Learn more</a>
      </div>
        `;
  });
  document.getElementById("Cards").innerHTML = newCards;
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
  const formSubmittedMes = document.createElement('span');
  formSubmittedMes.textContent = 'Your form has been successfully submitted!';
  formSubmittedMes.classList.add('success-message');
  const contactForm = document.getElementById('Contact-form');

  contactForm.insertBefore(formSubmittedMes, contactForm.firstChild);
  formSubmittedMes.scrollIntoView({
    behavior: "smooth",
    block: "start"
  })

}
const heroInqBtn = document.getElementById("Hero-inq-btn");
heroInqBtn.addEventListener("click", handleHeroInqClick);
window.onload = insertCards;
const contactForm = document.getElementById("Contact-form");
contactForm.addEventListener('submit', handleContactFormSubmit);
