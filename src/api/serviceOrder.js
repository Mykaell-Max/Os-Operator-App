import api from './config';


export const fetchOs = async (query = '') => {
    try {
        const response = await api.get(`/os/${query ? `?${query}` : ''}`);
        return response.data;
    } catch (error) {   
        throw error
    }
};


export const createOs = async (osData) => {
    try {
        const response = await api.post('/os/registerOs', osData);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const resubmitOs = async (osId, osData) => {
    try {
        const response = await api.patch(`os/${osId}`, osData);
        return response;
    } catch (error) {
        throw error;
    }
};


export const deleteOs = async (osId) => {
    try {
        const response = await api.delete(`os/${osId}`);
        return response;
    } catch (error) {
        throw error;
    }
};

