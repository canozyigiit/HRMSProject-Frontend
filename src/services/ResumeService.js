import axios from "axios";

export default class ResumeService {
    getResumes() {
        return axios.get("http://localhost:8080/api/resumes/getall");
    }
    getAllByJobSeekerId(jobSeekerId){
        return axios.get("http://localhost:8080/api/resumes/findAllByJobSeekerId?id="+jobSeekerId);
    }

    getByJobSeekerId(jobSeekerId){
        return axios.get("http://localhost:8080/api/resumes/getByJobSeeker_Id?id="+jobSeekerId);
    }
}