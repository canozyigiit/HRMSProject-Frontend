import axios from "axios";

export default class ResumeService {
    getResumes() {
        return axios.get("http://localhost:8080/api/resumes/getall");
    }
    getAllByJobSeekerId(jobSeekerId){
        return axios.get("http://localhost:8080/api/resumes/findAllByJobSeekerId?id="+jobSeekerId);
    }

    getByJobSeekerId(id){
        return axios.get("http://localhost:8080/api/resumes/getByJobSeeker_Id?id="+id);
    }
    updateResume(values){
        return axios.post("http://localhost:8080/api/resumes/updateResume", values);
    }
    addImageResume(id){
        return axios.post("http://localhost:8080/api/resumes/addImageResume?resumeId="+ id);
    }
}