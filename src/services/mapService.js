import axios from "axios"

const getLocation = async () => axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/valdivia.json?proximity=-73.990593%2C40.740121&types=place%2Cpostcode%2Caddress&access_token=YOUR_MAPBOX_ACCESS_TOKEN`);

module.exports = {
    getLocation
}