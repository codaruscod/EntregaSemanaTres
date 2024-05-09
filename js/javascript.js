function getinfo() {
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let html = "";
        data.drinks.forEach(drink => {
          html += `<div class="card mb-4" style="max-width: 540px;">
                      <div class="row">
                          <div class="col-md-8">
                              <div>
                                  <img src="${drink.strDrinkThumb}" class="img-fluid rounded-start text-center" alt="...">
                                  <p class="card-text">${drink.strCategory}</p>
                                  <p class="card-text"><small class="text-body-secondary">${drink.strGlass}</small></p>
                                  <p class="card-text"><small class="text-body-secondary">${drink.strInstructionsES}</small></p>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item">${drink.strIngredient1}</li>
                                    <li class="list-group-item">${drink.strIngredient2}</li>
                                    <li class="list-group-item">${drink.strIngredient3}</li>
                                </ul>
                                <a href="${drink.strDrinkThumb}" target="_blank"><p class="card-text"><small class="text-body-secondary">Enlace de la imagen</small></p></a>
                              </div>
                          </div>
                      </div>
                   </div>`;
        });
        document.getElementById("contenedor1").innerHTML = html;
      });
}

getinfo();