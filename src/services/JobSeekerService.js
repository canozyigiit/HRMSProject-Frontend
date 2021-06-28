import axios from "axios";

export default class JobSeekerService{
    getJobSeekers() {
        return axios.get("http://localhost:8080/api/jobsekeers/getall");
    }

    getJobSeekerById(jobSeekerId){
        return axios.get("http://localhost:8080/api/jobsekeers/getbyid/" + jobSeekerId);
    }
    
}