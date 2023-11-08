
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

const agregar = document.getElementById("contenedorSeleccionado")
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
