import axios from "axios";

export default class LanguageService{
  

    getByResumeId(id){
        return axios.get("http://localhost:8080/api/languages/getByResumeId?id="+id);
    }
    addLanguage(values){
        return axios.post("http://localhost:8080/api/languages/add",values)
    }
    
}