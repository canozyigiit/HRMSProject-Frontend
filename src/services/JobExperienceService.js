import axios from "axios";

export default class JobExperienceService{
    getJobExperiences() {
        return axios.get("http://localhost:8080/api/jobexperience/getall");
    }
    addJobExperience(values){
        return axios.post("http://localhost:8080/api/jobexperience/add",values)
    }

 
}