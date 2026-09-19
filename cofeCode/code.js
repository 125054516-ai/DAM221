const readline = require('readline');

let pedidos = [];

let totalAcumulado = 0;

function agregarPedido(nombre, precio) {

    let pedido = {nombre: nombre, precio: precio};
    pedidos.push(pedido);
    totalAcumulado += precio;
    console.log(`Pedido agregado correctamente: ${nombre} - $${precio}`);
}

function mostrarPedidos() {
    console.log("Pedidos realizados:");
    pedidos.forEach((pedido, index) => {
        console.log(`${index + 1}. ${pedido.nombre} - $${pedido.precio}`);
    });
}

function mostrarTotal() {
    console.log(`Total acumulado: $${totalAcumulado}`);
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
