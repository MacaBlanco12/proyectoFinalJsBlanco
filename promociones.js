const contenedorPromociones = document.getElementById("contenedorPromociones");
fetch("../promos.json")
    .then(Response => Response.json())
    .then(data => {
        const promociones = data.promos
        promociones.forEach(promo => {
            const divPromocion = document.createElement("div");
            divPromocion.classList.add("card");
            divPromocion.innerHTML = `
        <div class="contieneTitulo">
            <h5 class="titulo">${promo.titulo}</h5>
        </div>
        <ul class="listadoPrecios">
            <li class="tachado">${promo.descuento}</li>
            <li class="precioFinal"><del>${promo.precioAntes}</del> ${promo.precioDespues}</li>
        </ul>
        <div class="card-body">
        <button id="agregar" class="agregar">La quiero</button>
    </div>`

            contenedorPromociones.appendChild(divPromocion);
        })
    })
