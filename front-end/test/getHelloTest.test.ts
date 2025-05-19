import axios from 'axios';
import getHello from '../component/getHello';

// Mock the axios module
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getHello', () => {
    it('should return "Hello from the backend!" when no name is provided', async () => {
        // Mock the axios.get method to return a resolved promise
        mockedAxios.get.mockResolvedValueOnce({ data: 'Hello from the backend!' });

        // Call the function and await the result
        const result = await getHello();

        // Assert the result
        expect(result).toBe('Hello from the backend!');
    });
});