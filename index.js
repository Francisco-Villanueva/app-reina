var nombre = document.getElementById("clientName");
var Dirección = document.getElementById("clientAdress");

function Clients(name, price) {
  this.name = name;
  this.price = price;
}

const burgers = [
  { name: "Cheese", size: [1, 2, 3], precio: [770, 850, 1000] },
  { name: "Bacon", size: [1, 2, 3], precio: [800, 900, 1050] },
  { name: "Cuato de Libra", size: [1, 2, 3], precio: [800, 900, 1050] },
  { name: "Life", size: [1, 2, 3], precio: [800, 900, 1050] },
  { name: "Clasica", size: [1, 2, 3], precio: [800, 900, 1050] },
  { name: "Blue", size: [1, 2, 3], precio: [850, 950, 1100] },
];

const clientes = [];

var cantBlue = document.getElementById("cantB");
var sizeBlue = document.getElementById("sizeB");
var sizeBacon = document.getElementById("sizeBacon");
var cantClasic = document.getElementById("cantClas");
var cantCuarto = document.getElementById("cantClib");
var cantBacon = document.getElementById("cantBacon");
var cantCh = document.getElementById("cantCh");
var cantLife = document.getElementById("cantLife");

var precioFinal = 0;
var cantidadPedidos = 0;
var contadorPersonal = 0;
var numeroDePedido = 0;
var indexPedidos = 1;

function precio(n) {
  let precio = 0;
  for (var i = 0; i < 3; i++) {
    if (burgers[n].size[i] == sizeBacon.value) {
      precio = burgers[n].precio[i];
    }
  }

  return precio;
}

function agregarB() {
  if (cantBlue.value === "") {
    swal("Falta la cantidad!!", "Aclará la cantidad de burguers ", "warning", {
      button: "OK",
    });
  } else if (parseInt(cantBlue.value) < 0) {
    swal("puse menor a cero", "Aclará la cantidad de burguers ", "warning", {
      button: "OK",
    });
  } else {
    let tableRef = document.getElementById("tablaprueba");
    let newRow = tableRef.insertRow(-1);
    let newCell = newRow.insertCell(0);
    newCell.textContent = nombre.value;
    newCell = newRow.insertCell(1);
    newCell.textContent = cantBlue.value;
    newCell = newRow.insertCell(2);
    newCell.textContent = "Blue" + sizeBlue.value;
    newCell = newRow.insertCell(3);
    newCell.textContent = "$ " + precio(5) * parseInt(cantBlue.value);

    //precioDeVenta +=  menu[i].precio * parseInt(cant.value);
    precioFinal += 950 * parseInt(cantBlue.value);
    cantidadPedidos += parseInt(cantBlue.value);
    cantBlue.value = "";
    contadorPersonal++;
  }
}
function agregarClib() {
  if (cantCuarto.value === "") {
    swal("Falta la cantidad!!", "Aclará la cantidad de burguers ", "warning", {
      button: "OK",
    });
  } else if (parseInt(cantCuarto.value) < 0) {
    swal("puse menor a cero", "Aclará la cantidad de burguers ", "warning", {
      button: "OK",
    });
  } else {
    let tableRef = document.getElementById("tablaprueba");
    let newRow = tableRef.insertRow(-1);
    let newCell = newRow.insertCell(0);
    newCell.textContent = nombre.value;
    newCell = newRow.insertCell(1);
    newCell.textContent = cantCuarto.value;
    newCell = newRow.insertCell(2);
    newCell.textContent = "Cuarto de libra";
    newCell = newRow.insertCell(3);
    newCell.textContent = "$ " + 900 * parseInt(cantCuarto.value);

    //precioDeVenta +=  menu[i].precio * parseInt(cant.value);
    precioFinal += 900 * parseInt(cantCuarto.value);
    cantidadPedidos += parseInt(cantCuarto.value);
    cantCuarto.value = "";
    contadorPersonal++;
  }
}
function agregarClas() {
  if (cantClasic.value === "") {
    swal("Falta la cantidad!!", "Aclará la cantidad de burguers ", "warning", {
      button: "OK",
    });
  } else if (parseInt(cantClasic.value) < 0) {
    swal("puse menor a cero", "Aclará la cantidad de burguers ", "warning", {
      button: "OK",
    });
  } else {
    let tableRef = document.getElementById("tablaprueba");
    let newRow = tableRef.insertRow(-1);
    let newCell = newRow.insertCell(0);
    newCell.textContent = nombre.value;
    newCell = newRow.insertCell(1);
    newCell.textContent = cantClasic.value;
    newCell = newRow.insertCell(2);
    newCell.textContent = "Clásica";
    newCell = newRow.insertCell(3);
    newCell.textContent = "$ " + 900 * parseInt(cantClasic.value);

    //precioDeVenta +=  menu[i].precio * parseInt(cant.value);
    precioFinal += 900 * parseInt(cantClasic.value);
    cantidadPedidos += parseInt(cantClasic.value);
    cantClasic.value = "";
    contadorPersonal++;
  }
}
function agregarCh() {
  if (cantCh.value === "") {
    swal("Falta la cantidad!!", "Aclará la cantidad de burguers ", "warning", {
      button: "OK",
    });
  } else if (parseInt(cantCh.value) < 0) {
    swal("puse menor a cero", "Aclará la cantidad de burguers ", "warning", {
      button: "OK",
    });
  } else {
    let tableRef = document.getElementById("tablaprueba");
    let newRow = tableRef.insertRow(-1);
    let newCell = newRow.insertCell(0);
    newCell.textContent = nombre.value;
    newCell = newRow.insertCell(1);
    newCell.textContent = cantCh.value;
    newCell = newRow.insertCell(2);
    newCell.textContent = "Cheese";
    newCell = newRow.insertCell(3);
    newCell.textContent = "$ " + 850 * parseInt(cantCh.value);

    //precioDeVenta +=  menu[i].precio * parseInt(cant.value);
    precioFinal += 850 * parseInt(cantCh.value);
    cantidadPedidos += parseInt(cantCh.value);
    cantCh.value = "";
    contadorPersonal++;
  }
}
function agregarBacon() {
  if (cantBacon.value === "") {
    swal("Falta la cantidad!!", "Aclará la cantidad de burguers ", "warning", {
      button: "OK",
    });
  } else if (parseInt(cantBacon.value) < 0) {
    swal("puse menor a cero", "Aclará la cantidad de burguers ", "warning", {
      button: "OK",
    });
  } else {
    let tableRef = document.getElementById("tablaprueba");
    let newRow = tableRef.insertRow(-1);
    let newCell = newRow.insertCell(0);
    newCell.textContent = nombre.value;
    newCell = newRow.insertCell(1);
    newCell.textContent = cantBacon.value;
    newCell = newRow.insertCell(2);
    newCell.textContent = "Bacon" + sizeBacon.value;
    newCell = newRow.insertCell(3);
    newCell.textContent = "$ " + precio(1) * parseInt(cantBacon.value);

    //precioDeVenta +=  menu[i].precio * parseInt(cant.value);
    precioFinal += precio(1) * parseInt(cantBacon.value);
    cantidadPedidos += parseInt(cantBacon.value);
    cantBacon.value = "";
    contadorPersonal++;
  }
}
function agregarLife() {
  if (cantLife.value === "") {
    swal("Falta la cantidad!!", "Aclará la cantidad de burguers ", "warning", {
      button: "OK",
    });
  } else if (parseInt(cantLife.value) < 0) {
    swal("puse menor a cero", "Aclará la cantidad de burguers ", "warning", {
      button: "OK",
    });
  } else {
    let tableRef = document.getElementById("tablaprueba");
    let newRow = tableRef.insertRow(-1);
    let newCell = newRow.insertCell(0);
    newCell.textContent = nombre.value;
    newCell = newRow.insertCell(1);
    newCell.textContent = cantLife.value;
    newCell = newRow.insertCell(2);
    newCell.textContent = "Life";
    newCell = newRow.insertCell(3);
    newCell.textContent = "$ " + 950 * parseInt(cantLife.value);

    //precioDeVenta +=  menu[i].precio * parseInt(cant.value);
    precioFinal += 950 * parseInt(cantLife.value);
    cantidadPedidos += parseInt(cantLife.value);
    cantLife.value = "";
    contadorPersonal++;
  }
}

function confirmacion() {
  if (cantidadPedidos === 0) {
    swal("Falta la cantidad!!", "Aclará la cantidad de burguers ", "warning", {
      button: "OK",
    });
  } else {
    swal(
      "Pedido confirmado",
      nombre.value +
        "\n" +
        Dirección.value +
        "\nPrecio total: $" +
        precioFinal +
        "\nCantidad de burgers: " +
        cantidadPedidos,
      "success"
    );

    let aux = {
      name: nombre.value,
      adress: Dirección.value,
      price: precioFinal,
    };
    // let tableRef = document.getElementById("tablaClientes");
    // let newRow = tableRef.insertRow(-1);
    // let newCell = newRow.insertCell(0);
    // newCell.textContent = numeroDePedido;
    // newCell = newRow.insertCell(1);
    // newCell.textContent = aux.name;
    // newCell = newRow.insertCell(2);
    // newCell.textContent = aux.adress;
    // newCell = newRow.insertCell(3);
    // newCell.textContent = "$ " + precioFinal;

    clientes.push(aux);
    numeroDePedido++;
    if (numeroDePedido % 2 === 0) {
      for (let i = indexPedidos; i <= indexPedidos + contadorPersonal; i++) {
        for (let j = 0; j < 4; j++) {
          document.querySelectorAll("tr")[i].children[j].style.backgroundColor =
            "#cecece";
        }
      }
    }
    indexPedidos += contadorPersonal;
    contadorPersonal = 0;
    precioFinal = 0;
    cantidadPedidos = 0;
    nombre.value = "";
    Dirección.value = "";
  }
}
