
const formulario = document.getElementById("registroForm");
const mensajeResultado = document.getElementById("mensajeResultado");

formulario.addEventListener("submit", e => {
    e.preventDefault();
    let elFormularioEsValido = validarFormulario();
    if (elFormularioEsValido) {
        mensajeResultado.innerText = "Enviando formulario...";
        getMensaje();
    } else {
        mensajeResultado.innerText = "Hay campos vacíos. Por favor revisalos.";
    }
})


// Valido todos los campos menos teléfono porque no es obligatorio
const  validarFormulario = () => {
     const nombreEstaVacio = validarCampoVacio("nombre", "errorNombre");
     const apellidoEstaVacio = validarCampoVacio("apellido", "errorApellido");
     const emailEstaVacio = validarCampoVacio("email", "errorEmail");
     const tipoDeContactoEstaVacio = validarCampoVacio("tipo_contacto", "errorTipoContacto", "tipo de contacto");
     const asuntoEstaVacio = validarCampoVacio("asunto", "errorAsunto");
     const descripcionEstaVacio = validarCampoVacio("descripcion", "errorDescripcion");

    return (
      nombreEstaVacio &
      apellidoEstaVacio &
      emailEstaVacio &
      tipoDeContactoEstaVacio &
      asuntoEstaVacio &
      descripcionEstaVacio 
    );
}

// Hago validacion de campo vacío
const validarCampoVacio = (idCampo, idErrorDiv, stringAMostrar = null) => {
    let value = document.getElementById(idCampo).value;
    if (stringAMostrar == null) stringAMostrar = idCampo;
    
    let errorTag = document.getElementById(idErrorDiv);
    errorTag.innerText = "";

    const mensaje = `El campo ${stringAMostrar} se encuentra vacío`;
    if (value === "") {
        errorTag.innerText = mensaje;
        return false;
    }
    return true;
}

// Solicitud AJAX

const getMensaje = () => {
    const http = new XMLHttpRequest();
    console.log("onreadystatechange");

    http.onreadystatechange = () => {
        console.log(http.readyState);
        console.log("status");
        console.log(http.status);


        if (http.readyState == 4 && http.status == 200) {
            mensajeResultado.innerText = http.responseText;
     
        } 


    }

    http.open('GET', 'http://localhost/evaluacion_modulo_2/mensaje.txt', true)
    http.send();

}