const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodeURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${ encodeURL }`,
        headers: {
            'x-rapidapi-key': '77562e41aamsh5a8a533e072e611p12c79djsn74fe3a59a9d1',
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
            'useQueryString': true
        }
    });

    const resp = await instance.get();

    if (resp.data.data.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.data[0];
    const direccion = data.name;
    const lat = data.latitude;
    const lng = data.longitude;


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}