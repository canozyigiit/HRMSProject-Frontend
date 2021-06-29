import axios from "axios";

export default class JobAdvertService {
    getJobAdverts() {
        return axios.get("http://localhost:8080/api/jobadverts/getall");
    }
    getAllisOpenTrueAndCityId(id) {
        return axios.get("http://localhost:8080/api/jobadverts/getAllisOpenTrueAndCity_Id?id=" + id);
    }
    getAllisOpenTrueAndEmployerId(id) {
        return axios.get("http://localhost:8080/api/jobadverts/getAllOpenTrueJobAdvertByEmployer?id=" + id);
    }
    getAllOpenTrueJobAdvertList(){
        return axios.get("http://localhost:8080/api/jobadverts/getAllOpenTrueJobAdvertList");
    }
    getByisOpenTrueOrderByCreatedDateDesc(){
        return axios.get("http://localhost:8080/api/jobadverts/getByisOpenTrueOrderByCreatedDateDesc");
    }
    changeOpenToClose(id){
        return axios.post("http://localhost:8080/api/jobadverts/changeOpenToClose?id="+id);
    }
    getJobAdvertById(jobAdvertId){
        return axios.get("http://localhost:8080/api/jobadverts/getbyid/"+jobAdvertId);
    }
    addJobAdvert(values){
        return axios.post("http://localhost:8080/api/jobadverts/add" , values)
    }
    getJobAdvertByisConfirmedFlase(){
        return axios.get("http://localhost:8080/api/jobadverts/getByisConfirmedFalse")
    }
    getAllByPage(pageNo){
        return axios.get("http://localhost:8080/api/jobadverts/getAllByPage?pageNo=" + pageNo)
    }
   
}