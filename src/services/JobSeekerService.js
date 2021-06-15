import axios from "axios";

export default class JobSeekerService{
    getJobSeekers() {
        return axios.get("http://localhost:8080/api/jobsekeers/getall");
    }
    addJobSeeker(){
        return axios.post()
    }
    getJobSeekerById(id){
        return axios.get("http://localhost:8080/api/jobsekeers/getbyid?id=" + id);
    }
    
}