import axios from "axios";

export default class JobWorkSpaceTypeService{
    getJobWorkSpaceTypes() {
        return axios.get("http://localhost:8080/api/jobworkspacetype/getall");
    }

 
}