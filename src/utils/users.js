import api from "../utils/axios.js"


export const signUp = (data)=> api.post('/signup', data);

export const signIn = (data) => api.post("/signIn", data);