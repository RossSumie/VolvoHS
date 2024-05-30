import axios from 'axios';

const API_BASE_URL = 'https://macgyver-express-backend.onrender.com/api/';

interface ApiResponse<T> {
  data: T;
}

// General purpose POST function to handle various data types including FormData
export const postData = async <T>(endpoint: string, data: T, headers = {}): Promise<T> => {
  try {
    const response: ApiResponse<T> = await axios.post(`${API_BASE_URL}${endpoint}`, data, { headers });
    return response.data;
  } catch (error) {
    console.error(`Error posting to ${endpoint}:`, error);
    throw error;
  }
};

// General purpose GET function
export const getData = async <T>(endpoint: string): Promise<T> => {
  try {
    const response: ApiResponse<T> = await axios.get(`${API_BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`Error getting data from ${endpoint}:`, error);
    throw error;
  }
};

// Specialized function for file uploads
export const uploadFile = async (endpoint: string, fileUri: string, fileName: string): Promise<string> => {
  const formData = new FormData();
  formData.append('file', {
    uri: fileUri,
    type: 'image/jpeg', // or dynamically set the type based on the file
    name: fileName,
  });

  try {
    const response: ApiResponse<string> = await axios.post(`${API_BASE_URL}${endpoint}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error uploading file to ${endpoint}:`, error);
    throw error;
  }
};
