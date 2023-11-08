const contenedorCarrito = document.getElementById("carrito");


function muestraCarrito() {
    const carritoJSON = localStorage.getItem('carrito');
    return carritoJSON ? JSON.parse(carritoJSON) : [];
}

function mostrarPromocionesEnCarrito() {
    const carrito = muestraCarrito();

    carrito.forEach(promo => {
        const divPromocionCarrito = document.createElement("div");
        divPromocionCarrito.classList.add("item-carrito");
        divPromocionCarrito.innerHTML = `
            <h5>${promo.titulo}</h5>
            <p>${promo.descuento}</p>
            <p><del>${promo.precioAntes}</del> ${promo.precioDespues}</p>
            
            `;
        contenedorCarrito.appendChild(divPromocionCarrito);
    });
}

mostrarPromocionesEnCarrito();
