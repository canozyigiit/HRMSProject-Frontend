import axios from "axios";

export default class CityService{
    getCities() {
        return axios.get("http://localhost:8080/api/city/getall");
    }

    addCtiy(values){
        return axios.post("http://localhost:8080/api/city/add", values)
    }
}