'use strict';
const tabla = document.querySelector('#tbl-tareas tbody');

let listaRutinas = [];

const llenarListaTareas = async() => {
    listaRutinas = await listarRutinas();
    mostrarTabla();
};

const mostrarTabla = () => {
    listaRutinas.forEach(tarea => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = `Creación: ${tarea.creacion}`;
        fila.insertCell().innerHTML = tarea.vencimiento;

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