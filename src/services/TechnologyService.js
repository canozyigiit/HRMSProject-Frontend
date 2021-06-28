import axios from "axios";

export default class TechnologyService{
  

    addTechnology(values){
        return axios.post("http://localhost:8080/api/technologies/add",values)
    }
    
}