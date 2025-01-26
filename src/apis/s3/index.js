

import axiosConfig from '@/config/axiosConfig';
import axios from 'axios';

// Uploads an image to AWS S3 using a presigned URL.
export const uploadImageToAWSpresignedUrl = async ({ url, file }) => {
    try {
        // console.log('url', url, 'file', file);
        

        // if (!file || !file.type) {
        //     console.error('Error: File ya file.type missing hai!');
        //     throw new Error('Invalid file or missing file type');
        // }

        // // Debug: Upload shuru hone wala hai
        // console.log('Debug: Upload shuru kar rahe hain. File type:', file.type);

        // // Axios request se pehle URL aur headers check karein
        // console.log('Debug: Axios request details - URL:', url, 'Headers:', {
        //     'Content-Type': file.type,
        // });

        const response = await axios.put(url, file, {
            headers: {
                'Content-Type': file.type
            }
        });
        console.log('Response in uploading image to s3', response);
        return response;
    } catch(error) {
        console.log('Error in uploading image to s3', error);
    }
};        


// Get a presigned url to upload an image
export const getPreginedUrl = async ({ token }) => {
     try {
         const response = await axiosConfig.get('/messages/pre-signed-url', {
             headers: {
                 'x-access-token': token
             }
         });
         return response?.data?.data;
     } catch (error) {
         console.log('Error in getting presigned url', error);
     }
 }
