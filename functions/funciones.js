const guardarContacto = (dataBase, contacto) => {
    dataBase.setItem(contacto.id, JSON.stringify(contacto));
    window.location.href = './';
}

const cargarContactos = (dataBase, parentNode) => {
    let claves = Object.keys(dataBase)
    for(i of claves) {
        let contacto = JSON.parse(dataBase.getItem(i))
        crearContacto(parentNode, contacto, dataBase)
    }
}

const crearContacto = (parentNode, contacto, dataBase) => {
    let divContacto = document.createElement('div');
    let nombreContacto = document.createElement('h3');
    let numeroContacto = document.createElement('p');
    let direccionContacto = document.createElement('p');
    let iconoBorrar = document.createElement('span');

    iconoBorrar.onclick = () => {
        dataBase.removeItem(contacto.id);
        window.location.href = './';
    }

    nombreContacto.innerHTML = contacto.nombre;
    numeroContacto.innerHTML = contacto.numero;
    direccionContacto.innerHTML = contacto.direccion;
    iconoBorrar.innerHTML = 'delete_forever';

    divContacto.classList.add ('tarea');
    iconoBorrar.classList.add ('material-symbols-outlined', 'icono');

    divContacto.appendChild(nombreContacto);
    divContacto.appendChild(numeroContacto);
    divContacto.appendChild(direccionContacto);
    divContacto.appendChild(iconoBorrar);

    parentNode.appendChild(divContacto);
}
