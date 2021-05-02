'use strict';




const enviarDatos = async(pfechaTarea, pnombreTarea, descripcionTarea, pcategoriaTarea, pencargadoTarea) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-servicio',
            responseType: 'json',
            data: {
                fechaTarea: pfechaTarea,
                nombreTarea: pnombreTarea,
                descripcionTarea: descripcionTarea,
                categoriaTarea: pcategoriaTarea,
                encargadoTarea: pencargadoTarea,
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'La tarea se registró con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'index.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar la tarea',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
};