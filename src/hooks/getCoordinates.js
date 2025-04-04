import axios from "axios";

export const getData = async (el) => {
    try {
        console.log(el);
        const {data} = await axios.get('http://localhost:4000/coordenadas', { params: { elemento: el } })
        console.log(data);
        return data;
    } catch (error) {
        alert(error)    
    }
}