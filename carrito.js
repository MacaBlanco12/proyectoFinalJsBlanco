const contenedorCarrito = document.getElementById("carrito");

function vaciarCarrito() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
        sessionStorage.clear()
    }

}
function muestraCarrito() {
    const carritoJSON = sessionStorage.getItem('carrito');
    return carritoJSON ? JSON.parse(carritoJSON) : [];
}

function mostrarPromocionesEnCarrito() {
    const carrito = muestraCarrito();

    carrito.forEach(promo => {
        const divPromocionCarrito = document.createElement("div");
        divPromocionCarrito.classList.add("item-carrito");
        divPromocionCarrito.innerHTML = `
        <div class="item">
            <h5>${promo.titulo}</h5>
            <p>${promo.descuento}</p>
            <p><del>${promo.precioAntes}</del> ${promo.precioDespues}</p>
            </div>
            <button id="botonEliminar" class="botonEliminar">Eliminar</button>    
            
            `;
        contenedorCarrito.appendChild(divPromocionCarrito);
    });
}
mostrarPromocionesEnCarrito()


const botonVaciar = document.getElementById("vaciarCarrito");
botonVaciar.addEventListener("click", () => {
    vaciarCarrito()
    Swal.fire({
        title: 'Se vacio tu carrito'
    })
})

const botonSigueComprando = document.getElementById("agregaMasItems");
botonSigueComprando.addEventListener("click", () => {
    window.location.href = 'promociones.html';

})
const botonFinalizarCompra = document.getElementById("finalizarCompra");
botonFinalizarCompra.addEventListener("click", () => {
    vaciarCarrito();
    Swal.fire({
        title: 'Gracias por tu compra!!'
    })
})

