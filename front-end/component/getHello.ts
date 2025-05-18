import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default async function getHello() {
    const url = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://mp5661582e3d607c6f2e.free.beeceptor.com/hello';
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching hello:', error);
        throw error;
    }
}
