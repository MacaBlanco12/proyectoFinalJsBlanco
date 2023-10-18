const promociones = [
    {
        titulo: "Cavado ",
        descuento: "20% OFF",
        precioAntes: "$4.000",
        precioDespues: "$3.200",
    },
    {
        titulo: "Axilas",
        descuento: "20% OFF",
        precioAntes: "$4.000",
        precioDespues: "$3.200",
    },
    {
        titulo: "Tiro de cola",
        descuento: "20% OFF",
        precioAntes: "$3.600",
        precioDespues: "$2.880",
    }
];
const contenedorPromociones = document.getElementById("contenedorPromociones");

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
    <button id= "agregar" class = "agregar">La quiero</button>
</div>`

    contenedorPromociones.appendChild(divPromocion);
    const agregar = divPromocion.querySelector(".agregar")

    function agregaCarrito() {
        alert("ARMA LA FUNCION DE AGREGAR AL CARRITO, DALE VAGA")
    }
    
    agregar.addEventListener("click", agregaCarrito)
    

});





