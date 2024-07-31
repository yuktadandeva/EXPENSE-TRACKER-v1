import axios from "axios";

export const getUser = async (URL)=>{
    const response = await axios.get(URL);
    return response.data;
}