window.onload = function() {
    // Función para guardar un nuevo pedido en el localStorage
    function guardarPedido(nuevoPedido) {
        try {
            var pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
            pedidos.push(nuevoPedido);
            localStorage.setItem('pedidos', JSON.stringify(pedidos));
        } catch (error) {
            console.error('Error al guardar el pedido:', error);
        }
    }

    // Función para obtener todos los pedidos almacenados del localStorage
    function obtenerPedidos() {
        try {
            return JSON.parse(localStorage.getItem('pedidos')) || [];
        } catch (error) {
            console.error('Error al obtener los pedidos:', error);
            return [];
        }
    }



    // Función para manejar la confirmación del pago
    function confirmPayment() {
        window.location.href = "https://transacciones.nequi.com/bdigital/login.jsp";
    }

    // Función para manejar la finalización del pago
    function finalizarPayment() {
        window.location.href = "index.html";
    }

    // Asignar eventos a los botones
    var confirmButton = document.getElementById("confirm-button");
    if (confirmButton) {
        confirmButton.addEventListener("click", confirmPayment);
    } else {
        console.error('Botón de confirmación no encontrado.');
    }

    var finalizarButton = document.getElementById("finalizar-button");
    if (finalizarButton) {
        finalizarButton.addEventListener("click", finalizarPayment);
    } else {
        console.error('Botón de finalización no encontrado.');
    }
};

