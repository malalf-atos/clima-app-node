const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
// console.log(argv);


// lugar.getLugarLatLng(argv.direccion)
//     .then((response) => {
//         console.log(clima.getClima(response.lat, response.lng));
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// clima.getClima(40.67, -73.94)
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

getInfoClima = async(direccion) => {
    let infoLugar = await lugar.getLugarLatLng(direccion);
    let infoClima;

    if (!infoLugar.lat || !infoLugar.lng) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }

    infoClima = await clima.getClima(infoLugar.lat, infoLugar.lng);

    if (!infoClima) {
        throw new Error(`No se pude determinar el clima de ${ direccion }`);
    }

    return `El clima de ${ direccion } es de ${ infoClima }`;
}

getInfoClima(argv.direccion)
    .then((resp) => {
        console.log(resp);
    })
    .catch((err) => {
        console.log(err);
    });