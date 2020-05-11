const container = document.getElementsByClassName('container-cards');

let pointers = [];

async function getAPI(){
  return await fetch("https://my-json-server.typicode.com/Qnedy/fake-API-test/locations").then(response => response.json());
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
  getAPI().then(response => response.forEach((card) => {
      let newCard = createCardElement(card);
      container[0].appendChild(newCard);
      pointers.push({lat: card.Latitude, lng: card.Longitude});
  }));

  carregarPontos();
}

innerCards();

function carregarPontos() {
  pointers.map(ponto => {
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(ponto.lat, ponto.lng),
        title: "Meu ponto personalizado! :-D",
        map: map
    });
  });

}

let iconMarker = './img/sinais.svg';

let time = setTimeout(function initMap() {
  // The location of Uluru

  var uluru = {lat: -19.212355602107472, lng: -44.20234468749999};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});

  pointers.map(ponto => {
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(ponto.lat, ponto.lng),
        title: "Meu ponto personalizado! :-D",
        map: map,
        icon: iconMarker
    });
  });

  console.log(pointers);
  clearTimeout(time);
}, 2000)

