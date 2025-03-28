import axios from "axios";

const CountPage = async () => {
    const countLocations = await axios.get('http://127.0.0.1:4000/locations')
    return 'Hay ' + countLocations?.data?.length + ' locaciones';
}

export default CountPage;