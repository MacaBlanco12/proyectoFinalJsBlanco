

const contenedorCodigo = document.getElementById("contenedorCodigo");
const contenedorPromociones = document.getElementById("contenedorPromociones");
const contenedorItems = document.getElementById("itemsCarrito")
function muestraCarrito() {
    const carritoJSON = localStorage.getItem('carrito');
    return carritoJSON ? JSON.parse(carritoJSON) : [];
}

function agregarPromoAlCarrito(promo) {
    const carrito = muestraCarrito();
    carrito.push(promo);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    const divCodigoPromo = document.createElement("div");
    divCodigoPromo.classList.add("card");
    divCodigoPromo.innerHTML = `
    <div class="contieneTitulo">
            <h5 class="titulo">${promo.titulo}</h5>
        </div>
    `
    contenedorCodigo.appendChild(divCodigoPromo);
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
                Swal.fire({
                    title: 'Agregaste a tu carrito con éxito',
                    text: '¿Quieres seguir agregando?',
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonText: 'Sí',
                    cancelButtonText: 'No'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = 'promociones.html';

                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                        window.location.href = 'carrito.html';


                    }
                });

            });

        })

    })
