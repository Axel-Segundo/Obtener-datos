const cargarJsonBtn = document.querySelector('#cargarJSON');
cargarJsonBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleado.json';
    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( resultado => mostraHTML(resultado) )
}

function mostraHTML({ empresa, id, nombre, trabajo}) {
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p>Empleado: ${nombre}</p>
    `;
}