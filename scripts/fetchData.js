const url = "https://labs.inforcedata.com.br/desafio-frontend";
function fetchBanner() {
  fetch(`${url}/banners.json`)
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      const html = data
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
      document
        .querySelector(".slider-items")
        .insertAdjacentHTML("afterbegin", html);
      document.querySelectorAll(".item")[0].classList.add("active");
    })
    .catch((erro) => {
      console.log(erro);
    });
}
fetchBanner();
function fetchVitrine() {
  fetch(`${url}/vitrines.json`)
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      const html = data
        .map((card) => {
          return `
              <div class="card">
              <img src="${card.capa}" alt="" />
            
              <div class="container-description">
              <div>
              <h3 class="sub-title">${card.tipo}</h3>
              <p class="text"><b>Bairro:</b> ${card.bairro}</p>
              <p class="text"><b>Cidade:</b> ${card.cidade}- <b>Estado:</b> ${card.UF}</p>
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
            </div>
            `;
        })
        .join("");
      //'afterbegin' = Dentro do elemento, antes de seu primeiro filho (childNode)
      document.querySelector("#imoveis").insertAdjacentHTML("afterbegin", html);
    })
    .catch((erro) => {
      console.log(erro);
    });
}
fetchVitrine();

function fetchNoticias() {
  fetch(`${url}/noticias.json`)
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      const html = data
        .map((Noticia) => {
          return `
              <div class="card">
                <img src="${Noticia.capa}" alt="" />
              
                <div class="container-description">
                  <div>
                    <h3 class="sub-title">${Noticia.titulo}</h3>
                    <p class="text">${Noticia.sumario}</p>
                  </div>
                  <a
                    href="${Noticia.link}"
                    class="listing__btn"
                    >Veja mais</a
                  >
                </div>
              </div>
            `;
        })
        .join("");
      //'afterbegin' = Dentro do elemento, antes de seu primeiro filho (childNode)
      document
        .querySelector("#noticias")
        .insertAdjacentHTML("afterbegin", html);
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
