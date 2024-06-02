import axios, { AxiosError } from 'axios';

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

import { Buffer } from 'buffer';

/**
 * Converts a base64 string to a Uint8Array.
 * @param base64 - The base64 string to convert.
 * @returns A Uint8Array representing the byte array.
 */
const base64ToByteArray = async (base64: string) => {
  // console.log("Base64 Received")
  // const buffer = Buffer.from(base64, 'base64');

  // console.log("AAA")
  // return new Uint8Array(buffer);

  const base64Response = await fetch(base64);
  return base64Response.blob();
}

// base64  -> File

// base64 -> (ArrayBuffer) -> Blob -> File

// base64 
export const uploadFileV2 = async (endpoint: string, file: string): Promise<string> => {
  console.log("File")

  const res = await axios(`data:image/jpg;base64,${file}`)
  const blob = res.data;
  console.log("Axios Response", res.data)

  const f = new File([blob], "radiator");
  console.log("File Converted", f)

  const formData = new FormData();
  // Send on the formData the File 

  // The radiator+image+before should be a File object
  formData.append('radiator_image_before', f);

  try {
    const { data } =  await axios.post<ApiResponse<string>>(`${API_BASE_URL}${endpoint}`, formData);
    return data.data
  } catch (error) {
    console.error(`Error uploading file to ${endpoint}:`, (error as AxiosError).response);
    console.error(`Error uploading file to ${endpoint}:`, (error as AxiosError).status);
    throw error;
  }
};