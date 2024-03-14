var totalCarrito = 0;

function agregarAlCarrito(evento) {

    const producto = evento.currentTarget.parentNode;

    const nombre = producto.querySelector('.nombre').textContent;
    const precioT = producto.querySelector('.precio').textContent;
    const cantidad = parseInt(producto.querySelector('.cantidad').textContent);


    const precio = parseInt(precioT);


    totalCarrito += precio * cantidad;

    const newProduct = document.createElement("li");
    newProduct.innerHTML = '<strong>Producto:</strong> ' + '<span class="product">' + nombre + '</span> , ' + '<strong>Precio:</strong>'
        + '<span class="precio"> ' + precioT + ' </span>' + ', <strong>Cantidad:</strong> ' + '<span class="cantidad">' + cantidad + '</span>' + '<button class="del-button">Eliminar</button>';

    newProduct.querySelector('.del-button').classList.add('del-button-style');

    const carrito = document.getElementById("listaCarrito1");
    carrito.appendChild(newProduct);


    const deleteButton = document.getElementsByClassName('del-button')


    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener('click', deleteProduct)
    }

    actualizarTotalCarrito();
}


function deleteProduct(event) {

    const product = event.currentTarget.parentNode;

    const precioT = product.querySelector('.precio').textContent;
    const cantidad = parseInt(product.querySelector('.cantidad').textContent);
    const precio = parseInt(precioT);

    totalCarrito -= precio * cantidad;

    product.remove();

    actualizarTotalCarrito();
}

function actualizarTotalCarrito() {
    const totalElement = document.getElementById("total");
    totalElement.textContent = `TOTAL: €${totalCarrito}`;
}



window.onload = function () {
    const btnComprar = document.getElementsByClassName("btn-comprar");
    for (let i = 0; i < btnComprar.length; i++) {
        btnComprar[i].addEventListener("click", agregarAlCarrito)
    }


};