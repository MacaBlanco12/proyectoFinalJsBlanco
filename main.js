let carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];
const promosAgregadasAlCarrito = [];

const contenedorPromociones = document.getElementById("contenedorPromociones");
function muestraCarrito() {
    const carritoJSON = sessionStorage.getItem('carrito');
    return carritoJSON ? JSON.parse(carritoJSON) : [];
}

function agregarPromoAlCarrito(promo) {
    const carrito = muestraCarrito();

    carrito.push(promo);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
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
                const productoExistente = carrito.find(item => item.id === promo.id);
                if (!productoExistente) {
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
                }
                else {
                    Swal.fire({
                        title: 'Producto duplicado',
                        text: 'Este producto ya está en tu carrito',
                        icon: 'error',
                        showCancelButton: true,
                        confirmButtonText:'Ir al carrito',
                        cancelButtonText:'Seguir comprando'

                    })
                    .then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = 'carrito.html';

                        } else if (result.dismiss === Swal.DismissReason.cancel) {
                            


                        }
                    });
                }
            });

        })

    })
