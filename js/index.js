'use strict';
const txtFechaTarea = document.querySelector('#txt-fecha-tarea');
const txtNombreTarea = document.querySelector('#txt-nombre-tarea');
const txtDescripcionTarea = document.querySelector('#txt-descripcion-tarea');
const sltCategoria = document.querySelector('#slt-categoria');
const sltEncargado = document.querySelector('#slt-encargado');
const btnAgregar = document.querySelector('#btn-agregar');

const imprimirDatos = () => {

    let fechaTarea = txtFechaTarea.value;
    let nombreTarea = txtNombreTarea.value;
    let descripcionTarea = txtDescripcionTarea.value;
    let categoria = sltCategoria.value;
    let encargado = sltEncargado.value;

    registrar_usuario(fechaTarea, nombreTarea, descripcionTarea, categoria, encargado);
    Swal.fire({
        'icon': 'success',
        'title': 'Su solicitud se proceso con éxito',
        'text': 'Pronto recibirá un correo electrónico',
        'confirmButtonText': 'Entendido'
    }).then(() => {
        window.location.href = 'index.html';
    });

};








btnAgregar.addEventListener('click', obtener_datos);