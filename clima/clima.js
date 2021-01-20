const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=35c19914b0681e4c722f3d0aafa7109f&units=metric`);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}