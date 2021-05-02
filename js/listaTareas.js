'use strict';
const tabla = document.querySelector('#tbl-tareas tbody');
const inputFiltro = document.querySelector('#txt-filtro');


let listaTareas = [];

const llenarListaTareas = async() => {
    listaTareas = await listarRutinas();
    mostrarTabla();
};

const mostrarTabla = () => {
    tabla.innerHTML = "";
    let filtro = inputFiltro.value.toLowerCase();



    listaMascotasCliente = await listar_mascotas_cliente();




    listaTareas.forEach(tarea => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = tarea.fecha;
        fila.insertCell().innerHTML = tarea.nombre;
        fila.insertCell().innerHTML = tarea.descripcion;
        fila.insertCell().innerHTML = tarea.prioridad;
        fila.insertCell().innerHTML = tarea.encargado;


        let celdaAcciones = fila.insertCell();

        let botonModificar = document.createElement("button");

        botonModificar.innerText = "Editar";
        botonModificar.addEventListener("click", () => {

            sessionStorage.setItem("usuarioSeleccionado", JSON.stringify(tarea));
            window.location.href = "index.html";
        })

        let listaEjercicios = document.createElement('ul');
        tarea.ejercicios.forEach(ejercicio => {
            let li = document.createElement('li');
            li.innerText = ejercicio.nombre;
            listaEjercicios.appendChild(li);
        });

        fila.insertCell().appendChild(listaEjercicios);

        let boton = document.createElement('button');
        boton.type = 'button';
        boton.innerText = 'Agregar ejercicios';

        boton.addEventListener('click', () => {
            localStorage.setItem('rutinaSeleccionada', rutina._id);
            window.location = 'agregar-ejercicios-rutina.html';
        });

        fila.insertCell().appendChild(boton);
    });
};

llenarListaTareas();