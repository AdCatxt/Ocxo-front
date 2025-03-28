import axios from "axios";

const CountPage = async () => {
    const countLocations = await axios.get('http://localhost:3000/locations')
    return 'Hay ' + countLocations?.data?.length + 'locations';
}

export default CountPage;