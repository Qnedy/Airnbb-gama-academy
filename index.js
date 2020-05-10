const container = document.getElementsByClassName('container-cards');

async function getAPI(){
  return await fetch("https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72")
  .then(response => response.json());
}

function createCardElement(card){
  let cardContainer = document.createElement('div');
  cardContainer.className = 'container-card';

  cardContainer.innerHTML = `<div class="card-quarto">
  <img src="${card.photo}" >
  <div class="infos-quarto">
    <span>${card.property_type}</span>
    <h2>${card.name}</h2>
    <p>7 hóspedes - 1 quarto - 3 camas - 1 banheiro</p>
  </div>
  <div class="price">
    <p><span>R$ ${card.price}</span>/noite</p>
  </div>
</div>
  `;

  return cardContainer;
}

function innerCards(){
  console.log(container);
  getAPI().then(response => response.forEach((card) => {
      let newCard = createCardElement(card);
      container[0].appendChild(newCard);
  }));
}

innerCards();

// content.map(item => {
//   containerCards.innerHTML = `<div class="card-quarto">
//   <img src="${item.photo}" >
//   <div class="infos-quarto">
//     <span>${item.property_type}</span>
//     <h2>${item.name}</h2>
//     <p>7 hóspedes - 1 quarto - 3 camas - 1 banheiro</p>
//   </div>
//   <div class="price">
//     <p><span>R$ ${item.price}</span>/noite</p>
//   </div>
// </div>`
// });