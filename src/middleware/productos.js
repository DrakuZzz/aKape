const token = localStorage.getItem('token'); // Recupera el token almacenado

fetch('/productos/all', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'token': token // Envía el token en los encabezados
    }
})
    .then(response => response.text())
    .then(data => {
        console.log(data); // Muestra la respuesta del servidor
    })
    .catch(error => {
        console.error('Error:', error);
    });