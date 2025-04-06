export const getAllProductos = (req, res) => {
    const nombre = req.Nombre; // Recupera el nombre del cliente del token
    if (nombre) {
        res.send(`Bienvenido ${nombre}, aquí se muestra la lista de todos los productos existentes.`);
    } else {
        res.status(400).send('No se pudo obtener el nombre del cliente.');
    }
};