import { useQuery } from "react-query";
import axios from "axios";

const fetchClient = id => {
    return axios.get(`http://localhost:3001/client?id=${id}`)
}

export const useClientData = (id) => {
    return useQuery(['client-id', id], () => fetchClient(id))
}