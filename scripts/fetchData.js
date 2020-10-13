import { initCarousel } from "./carousel.js";

const url = "https://labs.inforcedata.com.br/desafio-frontend";

function renderBanners(banners) {
  return banners
    .map((banner) => {
      return `
      <div class="item">
        <img src="${banner.imagem}" alt="Banner" />
        <div class="sub-container">
            <p class="title-banner">${banner.titulo}</p>
            <div class="buttons">
                <div class="container-button-banner">
                  <a class="btn effect01" href="${banner.call_to_action}">
                  <span>Veja Mais</span>
                    </a>
                </div>
            </div>
        </div>
     </div>`;
    })
    .join("");
}
function fetchBanner() {
  fetch(`${url}/banners.json`)
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      const html = renderBanners(data);
      document
        .querySelector(".slider-items")
        .insertAdjacentHTML("afterbegin", html);
      document.querySelectorAll(".item")[0].classList.add("active");
      const containerSlides = document.querySelector("#banner-slides");
      const slides = containerSlides.querySelector(".slider-items").children;

      initCarousel(containerSlides, slides);
    })
    .catch((erro) => {
      console.log(erro);
    });
}

fetchBanner();

function renderCards(cards) {
  return cards
    .map(
      (card) => `
  <div class="card">
    <img src="${card.capa}" alt="" />
    <div class="container-description">
      <div>
        <h3 class="sub-title">${card.tipo}</h3>
        <p class="text"><b>Bairro:</b> ${card.bairro}</p>
        <p class="text">
          <b>Cidade:</b> ${card.cidade}- <b>Estado:</b> ${card.UF}
        </p>
      </div>
      <div class="container-icons">
        <div class="item">
          <img src="../assets/img/cama.svg" />
          <p class="text">${card.quartos}</p>
        </div>
        <div class="item">
          <img src="../assets/img/carro.svg" />
          <p class="text">${card.vagas}</p>
        </div>
        <div class="item">
          <img src="../assets/img/metragem.svg" />
          <p class="text">${card.metragem}m</p>
        </div>
      </div>
      <a href="${card.link}" class="listing__btn">Veja mais</a>
    </div>
  </div>`
    )
    .join("");
}

function renderCardGroups(groups) {
  return groups
    .map((cardGroup) => {
      return `
      <div class="slider-cards">
      ${renderCards(cardGroup)}
      </div>
      `;
    })
    .join("");
}

function fetchVitrine() {
  fetch(`${url}/vitrines.json`)
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      const groupsItem = 3;
      const groupsQuantity = Math.ceil(data.length / groupsItem);
      console.log("groups", groupsQuantity);
      const groups = Array(groupsQuantity)
        .fill(null)
        .map(() => new Array());
      data.forEach((element, index) => {
        const groupPosition = Math.floor(index / groupsItem);
        groups[groupPosition].push(element);
      });
      const html = renderCardGroups(groups);

      const containerSlides = document.querySelector("#container-showcase");
      containerSlides.querySelector(".slider-items-cards").innerHTML = html;
      containerSlides
        .querySelectorAll(".slider-cards")[0]
        .classList.add("active");
      const slides = containerSlides.querySelector(".slider-items-cards")
        .children;

      initCarousel(containerSlides, slides);
    })
    .catch((erro) => {
      console.log(erro);
    });
}
fetchVitrine();

function renderLastNewsCards(cards) {
  return cards
    .map(
      (card) => `
    <div class="card">
    <img src="${card.capa}" alt="" />
  
    <div class="container-description">
      <div>
        <h3 class="sub-title">${card.titulo}</h3>
        <p class="text">${card.sumario}</p>
      </div>
      <a
        href="${card.link}"
        class="listing__btn"
        >Veja mais</a
      >
    </div>
  </div>`
    )
    .join("");
}

function renderLastNewsGroup(groups) {
  return groups
    .map((cardGroup) => {
      return `
    <div class="slider-cards">
    ${renderLastNewsCards(cardGroup)}
    </div>
    `;
    })
    .join("");
}

function fetchNoticias() {
  fetch(`${url}/noticias.json`)
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      const groupsItem = 3;
      const groupsQuantity = Math.ceil(data.length / groupsItem);
      console.log("groups", groupsQuantity);
      const groups = Array(groupsQuantity)
        .fill(null)
        .map(() => new Array());
      data.forEach((element, index) => {
        const groupPosition = Math.floor(index / groupsItem);
        groups[groupPosition].push(element);
      });
      const html = renderLastNewsGroup(groups);

      const containerSlides = document.querySelector("#container-last-news");
      containerSlides.querySelector(".slider-items-cards").innerHTML = html;
      containerSlides
        .querySelectorAll(".slider-cards")[0]
        .classList.add("active");
      const slides = containerSlides.querySelector(".slider-items-cards")
        .children;

      initCarousel(containerSlides, slides);
    })
    .catch((erro) => {
      console.log(erro);
    });
}
fetchNoticias();

function fetchMostAccesseds() {
  fetch(`${url}/cloudtags.json`)
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      const html = data
        .map((accesseds) => {
          return `
              <a href="${accesseds.link}" class="most-accessed-btn">
              ${accesseds.tag}
              </a>

            
            `;
        })
        .join("");
      //'afterbegin' = Dentro do elemento, antes de seu primeiro filho (childNode)
      document
        .querySelector("#most-accessed")
        .insertAdjacentHTML("afterbegin", html);
    })
    .catch((erro) => {
      console.log(erro);
    });
}
fetchMostAccesseds();
