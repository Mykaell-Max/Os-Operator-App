import api from './api';


export const loginUser = async (email, password) => {
    try {
        const response = await api.post('user/login', {email, password});
        return response.data;
    } catch (error) {
        console.error("Erro ao fazer login: ", error);   
        throw error
    }
};


export const createUser = async (userData) => {
    try {
        const response = await api.post('/user/registerUser', userData)
        return response.data;
    } catch (error) {
        throw error;
    }
};
