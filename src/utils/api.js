import axios from 'axios'
const baseUrl = 'http://localhost:1337/api/'

export const fetchData = async (pathUrl) => {
    const { data } = await axios.get(baseUrl + pathUrl);
    console.log(data)
    return data;
}
