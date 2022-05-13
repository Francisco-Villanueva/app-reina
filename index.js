var nombre = document.getElementById('clientName');
var Dirección = document.getElementById('clientAdress');


const burgers = [
    {name: 'ch simp', precio: 770},
    {name: 'ch', precio: 850},
    {name: 'ch trip', precio: 1000},
    {name: 'bacon simp', precio: 800},
    {name: 'bacon', precio: 900},
    {name: 'bacon trip', precio: 1050},
    {name: 'cuarto simp', precio: 800},
    {name: 'cuarto', precio: 900},
    {name: 'cuarto trip', precio: 1050},
    {name: 'blue simp', precio: 850},
    {name: 'blue', precio: 950},
    {name: 'blue trip', precio: 1100},
    {name: 'life simp', precio: 800},
    {name: 'life', precio: 900},
    {name: 'life trip', precio: 1050},
    {name: 'clasica simp', precio: 800},
    {name: 'clasica', precio: 900},
    {name: 'clasica trip', precio: 1050},
];

var cantBlue=document.getElementById('cantB');
var cantClasic=document.getElementById('cantClas');
var cantCuarto=document.getElementById('cantClib');
var cantBacon=document.getElementById('cantBacon');
var cantCh=document.getElementById('cantCh');
var cantLife=document.getElementById('cantLife');

var precioFinal=0;
var cantidadPedidos=0;

function agregarB(){
    if(cantBlue.value===''){
        swal("Falta la cantidad!!", "Aclará la cantidad de burguers " ,"warning", {
            button: "OK",
        });
}else if(parseInt(cantBlue.value)<0){
    swal("puse menor a cero", "Aclará la cantidad de burguers " ,"warning", {
        button: "OK",
    });
} 

else{
    let tableRef = document.getElementById("tablaprueba");
    let newRow = tableRef.insertRow(-1);
    let newCell = newRow.insertCell(0);
    newCell.textContent = cantBlue.value;
    newCell = newRow.insertCell(1);
    newCell.textContent = 'Blue';
    newCell = newRow.insertCell(2);
    newCell.textContent ='$ '+ 950 * parseInt(cantBlue.value);
    
    //precioDeVenta +=  menu[i].precio * parseInt(cant.value);
    precioFinal += 950 * parseInt(cantBlue.value);
    cantidadPedidos += parseInt(cantBlue.value);
    cantBlue.value='';
}
}
function agregarClib(){
    if(cantCuarto.value===''){
        swal("Falta la cantidad!!", "Aclará la cantidad de burguers " ,"warning", {
            button: "OK",
        });
    } else if(parseInt(cantCuarto.value)<0){
        swal("puse menor a cero", "Aclará la cantidad de burguers " ,"warning", {
            button: "OK",
        });
    }
    
    else{
        let tableRef = document.getElementById("tablaprueba");
        let newRow = tableRef.insertRow(-1);
        let newCell = newRow.insertCell(0);
        newCell.textContent = cantCuarto.value;
        newCell = newRow.insertCell(1);
        newCell.textContent = 'Cuarto de libra';
        newCell = newRow.insertCell(2);
        newCell.textContent ='$ '+ 900 * parseInt(cantCuarto.value);
        
        //precioDeVenta +=  menu[i].precio * parseInt(cant.value);
        precioFinal += 900 * parseInt(cantCuarto.value);
        cantidadPedidos += parseInt(cantCuarto.value);
        cantCuarto.value='';
    }
    
}
function agregarClas(){
    if(cantClasic.value===''){
        swal("Falta la cantidad!!", "Aclará la cantidad de burguers " ,"warning", {
            button: "OK",
        });
    } else if(parseInt(cantClasic.value)<0){
        swal("puse menor a cero", "Aclará la cantidad de burguers " ,"warning", {
            button: "OK",
        });
    }
    
    else{
        let tableRef = document.getElementById("tablaprueba");
        let newRow = tableRef.insertRow(-1);
        let newCell = newRow.insertCell(0);
        newCell.textContent = cantClasic.value;
        newCell = newRow.insertCell(1);
        newCell.textContent = 'Clásica';
        newCell = newRow.insertCell(2);
        newCell.textContent ='$ '+ 900 * parseInt(cantClasic.value);
        
        //precioDeVenta +=  menu[i].precio * parseInt(cant.value);
        precioFinal += 900 * parseInt(cantClasic.value);
        cantidadPedidos += parseInt(cantClasic.value);
        cantClasic.value='';
    }
}
function agregarCh(){
    if(cantCh.value===''){
        swal("Falta la cantidad!!", "Aclará la cantidad de burguers " ,"warning", {
            button: "OK",
        });
    } else if(parseInt(cantCh.value)<0){
        swal("puse menor a cero", "Aclará la cantidad de burguers " ,"warning", {
            button: "OK",
        });
    }
    
    else{
        let tableRef = document.getElementById("tablaprueba");
        let newRow = tableRef.insertRow(-1);
        let newCell = newRow.insertCell(0);
        newCell.textContent = cantCh.value;
        newCell = newRow.insertCell(1);
        newCell.textContent = 'Cheese';
        newCell = newRow.insertCell(2);
        newCell.textContent ='$ '+ 850 * parseInt(cantCh.value);
        
        //precioDeVenta +=  menu[i].precio * parseInt(cant.value);
        precioFinal += 850 * parseInt(cantCh.value);
        cantidadPedidos += parseInt(cantCh.value);
        cantCh.value='';
    }
}
function agregarBacon(){
    if(cantBacon.value===''){
        swal("Falta la cantidad!!", "Aclará la cantidad de burguers " ,"warning", {
            button: "OK",
        });
    } else if(parseInt(cantBacon.value)<0){
        swal("puse menor a cero", "Aclará la cantidad de burguers " ,"warning", {
            button: "OK",
        });
    }
    
    else{
        let tableRef = document.getElementById("tablaprueba");
        let newRow = tableRef.insertRow(-1);
        let newCell = newRow.insertCell(0);
        newCell.textContent = cantBacon.value;
        newCell = newRow.insertCell(1);
        newCell.textContent = 'Bacon';
        newCell = newRow.insertCell(2);
        newCell.textContent ='$ '+ 900 * parseInt(cantBacon.value);
        
        //precioDeVenta +=  menu[i].precio * parseInt(cant.value);
        precioFinal += 900 * parseInt(cantBacon.value);
        cantidadPedidos += parseInt(cantBacon.value);
        cantBacon.value='';
    }
}
function agregarLife(){
    if(cantLife.value===''){
        swal("Falta la cantidad!!", "Aclará la cantidad de burguers " ,"warning", {
            button: "OK",
        });
    } else if(parseInt(cantLife.value)<0){
        swal("puse menor a cero", "Aclará la cantidad de burguers " ,"warning", {
            button: "OK",
        });
    }
    
    else{
        let tableRef = document.getElementById("tablaprueba");
        let newRow = tableRef.insertRow(-1);
        let newCell = newRow.insertCell(0);
        newCell.textContent = cantLife.value;
        newCell = newRow.insertCell(1);
        newCell.textContent = 'Life';
        newCell = newRow.insertCell(2);
        newCell.textContent ='$ '+ 950 * parseInt(cantLife.value);
        
        //precioDeVenta +=  menu[i].precio * parseInt(cant.value);
        precioFinal += 950 * parseInt(cantLife.value);
        cantidadPedidos += parseInt(cantLife.value);
        cantLife.value='';
    }
}

function confirmacion(){

    if(cantidadPedidos === 0){
        swal("Falta la cantidad!!", "Aclará la cantidad de burguers " ,"warning", {
            button: "OK",
        });
    }
    else{
    swal('Pedido confirmado',nombre.value +'\n'+Dirección.value + '\nPrecio total: $'+precioFinal+'\nCantidad de burgers: '+cantidadPedidos, 'success');

    precioFinal=0;
    cantidadPedidos=0;
    nombre.value='';
    Dirección.value='';
    }
}