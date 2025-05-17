import axios from 'axios';

export default async function getHello() {
    try {
        const response = await axios.get('http://back-end:4000/hello');
        return response.data;
    } catch (error) {
        console.error('Error fetching hello:', error);
        throw error;
    }
}
