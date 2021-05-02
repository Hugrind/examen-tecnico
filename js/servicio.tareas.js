'use strict';

const listarPadecimientos = async() => {
    let listaTareas;
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-tareas',
            responseType: 'json'
        })
        .then((response) => {
            listaTareas = response.data.ListaDeTareas;
        })
        .catch((error) => {
            console.log(error)
        });

    return listaTareas;
};