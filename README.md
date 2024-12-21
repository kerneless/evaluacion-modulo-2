# Evaluación módulo 2

Alumno: Jose Banegas

Fecha de entrega elegida: 20/12

## Consigna:

Realizar un formulario de contacto con los siguientes campos:

    Nombre *
    Apellido *
    Telefono
    Email *
    Tipo de contacto *
        Soporte
        Ventas
    Asunto * 
    Descripcion *

(*) campos obligatorios

    Validar que los campos obligatorios esten completos
    Utilizar sintaxis ES6
    Utilizar ajax para mostrar un mensaje de agradecimiento, el contenido del mensaje debe estar en un mensaje.txt


## Resolución de consigna

<ol>
    <li>Se creó un formulario en HTML y se guardó en la constante <b>formulario</b></li>
    <li>Se creó la función <b>validarFormulario()</b>, la cual llama para todos los campos (menos el teléfono) a la función <b>validarCampoVacio()</b></li>
    <li>Si <b>validarFormulario()</b> devuelve true, se muestra el mensaje obtenido vía AJAX del archivo <b>mensaje.txt</b></li>
    <li>Si <b>validarFormulario()</b> devuelve false, se muestra cada uno dee los posibles errores y un mensaje que pided por favor corregirlos.</li>
    <li>Se utilizó la sintaxis ES6 en la declaración de constantes, en las funciones flecha y en la utilización de template strings (utilizando `{$variable}`)</li>


</ol>

## Formato de entrega

URL de servidor online.

Enviar un archivo .rar o .zip con el siguiente formato: apellido_unidad4.rar o url de repositorio github o similar.

Fechas de entrega:

Se podrá entregar esta unidad:

    Primera entrega: 13/12
    Segunda entrega: 20/12

* El tamaño máximo del archivo permitido es de 10 MB. No se permite mas de un archivo.

