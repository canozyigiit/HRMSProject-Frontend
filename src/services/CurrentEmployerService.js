import axios from "axios";

export default class CurrentEmployerService {
    getByEmployerId(id) {
        return axios.get("http://localhost:8080/currentEmployer/getByEmployerId?id="+id)
    }

  
}