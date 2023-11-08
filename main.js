
const contenedorPromociones = document.getElementById("contenedorPromociones");
const contenedorItems = document.getElementById("itemsCarrito")
function muestraCarrito() {
    const carritoJSON = localStorage.getItem('carrito');
    return carritoJSON ? JSON.parse(carritoJSON) : [];
}

function agregarPromoAlCarrito(producto) {
    const carrito = muestraCarrito();
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
}

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
            const agregar = divPromocion.querySelector(".agregar")
            agregar.addEventListener("click", () => {
                agregarPromoAlCarrito(promo);
                alert(`Producto agregado al carrito: ${promo.titulo} valor: ${promo.precioDespues}`);
            });
            
        })

    })
