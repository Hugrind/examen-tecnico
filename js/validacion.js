'use strict';
const txtFechaTarea = document.querySelector('#txt-fecha-tarea');
const txtNombreTarea = document.querySelector('#txt-nombre-tarea');
const txtDescripcionTarea = document.querySelector('#txt-descripcion-tarea');
const sltCategoria = document.querySelector('#slt-categoria');
const sltEncargado = document.querySelector('#slt-encargado');
const btnAgregar = document.querySelector('#btn-agregar');

// const validar = () => {
//     let inputs_requeridos = document.querySelectorAll('#frm-contacto [required]');

//     let error = false;

//     if (txtFechaTarea.value == '') {
//         error = true;
//         txtFechaTarea.classList.add('error');
//     } else {
//         txtFechaTarea.classList.remove('error');
//     }

//     if (txtNombreTarea.value == '') {
//         error = true;
//         txtNombreTarea.classList.add('error');
//     } else {
//         txtNombreTarea.classList.remove('error');
//     }

//     if (txtDescripcionTarea.value == '') {
//         error = true;
//         txtDescripcionTarea.classList.add('error');
//     } else {
//         txtDescripcionTarea.classList.remove('error');
//     }

//     if (sltCategoria.value == '') {
//         error = true;
//         sltCategoria.classList.add('error');
//     } else {
//         sltCategoria.classList.remove('error');
//     }
//     if (sltEncargado.value == '') {
//         error = true;
//         sltEncargado.classList.add('error');
//     } else {
//         sltEncargado.classList.remove('error');
//     }

//     if (error == false) {
//         imprimir();
//     } else {
//         Swal.fire({
//             'icon': 'warning',
//             'title': 'No se pudo registrar la cuenta',
//             'text': 'Por favor revise los campos resaltados',
//             'confirmButtonText': 'Entendido'
//         });
//     }

//     return error;


// };


let validar = () => {
    let inputs_requeridos = document.querySelectorAll('#frm-contacto [required]');
    let error = false;

    for (let i = 0; i < inputs_requeridos.length; i++) {
        if (inputs_requeridos[i].value == '') {
            inputs_requeridos[i].classList.add('input-error');
            error = true;
        } else {
            inputs_requeridos[i].classList.remove('input-error');
            datosValidados();

        }
    }
    return error;
};

let datosValidados = async() => {

    let fechaTarea = txtFechaTarea.value;
    let nombreTarea = txtNombreTarea.value;
    let descripcionTarea = txtDescripcionTarea.value;
    let categoriaTarea = sltCategoria.value;
    let encargadoTarea = sltEncargado.value;




    enviarDatos(fechaTarea, nombreTarea, descripcionTarea, categoriaTarea, encargadoTarea);

};




// let limpiar = () => {
//     txtFechaTarea = "";
//     txtNombreTarea = "";
//     txtDescripcionTarea = "";
//     sltCategoria = "";
//     sltEncargado = "";

// };

let obtener_datos = () => {
    let error = validar();

    if (error) {
        Swal.fire({
            'title': 'El formulario no se pudo enviar',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    } else {
        console.log(txtFechaTarea.value);
        console.log(txtNombreTarea.value);
        console.log(txtDescripcionTarea.value);
        console.log(sltCategoria.value);
        console.log(sltEncargado.value);

        Swal.fire({
            'title': 'Proceso realizado con ??xito',
            'text': 'Sus datos se enviaron adecuadamente',
            'icon': 'success'
        }).then(() => {
            // limpiar();
            window.location.href = 'listarTareas.html';
        });
    }
};

btnAgregar.addEventListener('click', obtener_datos);