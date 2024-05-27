import axios from 'axios';

const API_BASE_URL = 'https://macgyver-express-backend.onrender.com/api/inspection/create-inspection-report'; // Replace with your API base URL

interface ApiResponse<T> {
  data: T;
}

export const pushString = async (stringData: string): Promise<string> => {
  try {
    const response: ApiResponse<string> = await axios.post(`${API_BASE_URL}/endpoint`, {
      data: stringData,
    });
    return response.data;
  } catch (error) {
    console.error('Error pushing string:', error);
    throw error;
  }
};

export const pullStrings = async (): Promise<string[]> => {
  try {
    const response: ApiResponse<string[]> = await axios.get(`${API_BASE_URL}/endpoint`);
    return response.data;
  } catch (error) {
    console.error('Error pulling strings:', error);
    throw error;
  }
};

export const pushImageUrl = async (imageUrl: string): Promise<string> => {
  try {
    const response: ApiResponse<string> = await axios.post(`${API_BASE_URL}/image-endpoint`, {
      url: imageUrl,
    });
    return response.data;
  } catch (error) {
    console.error('Error pushing image URL:', error);
    throw error;
  }
};

export const pullImageUrls = async (): Promise<string[]> => {
  try {
    const response: ApiResponse<string[]> = await axios.get(`${API_BASE_URL}/image-endpoint`);
    return response.data;
  } catch (error) {
    console.error('Error pulling image URLs:', error);
    throw error;
  }
};
