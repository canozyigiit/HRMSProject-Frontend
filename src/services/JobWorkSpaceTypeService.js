import axios from "axios";

export default class JobWorkSpaceTypeService{
    getJobTypes() {
        return axios.get("http://localhost:8080/api/jobworkspacetype/getall");
    }

 
}