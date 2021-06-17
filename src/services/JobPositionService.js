import axios from "axios";

export default class JobPositionService{
    getJobPositions() {
        return axios.get("http://localhost:8080/api/jobpositions/getall");
    }
 
    getJobPosition(id){
        return axios.get("http://localhost:8080/api/jobpositions/getbyid?id=" + id);
    }
    
}