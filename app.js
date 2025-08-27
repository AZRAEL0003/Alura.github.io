// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    listaAmigos.push(nombre);

    // Crear un elemento li y agregarlo a la lista visible
    const ul = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nombre;
    ul.appendChild(li);

    // Limpiar el campo de texto y devolver el foco
    input.value = "";
    input.focus();
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay nombres para sortear.");
        return;
    }

    // Selección aleatoria
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];

    // Mostrar el resultado en la lista de resultados
    const resultadoUl = document.getElementById('resultado');
    resultadoUl.innerHTML = ""; // Limpiar sorteos anteriores
    const li = document.createElement('li');
    li.textContent = `¡El amigo secreto es: ${amigoSecreto}!`;
    resultadoUl.appendChild(li);
}
