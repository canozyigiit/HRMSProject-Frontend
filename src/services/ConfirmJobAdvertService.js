import axios from "axios";

export default class ConfirmJobAdvertService {
    confirmJobAdvert(jobAdvertId, systemPersonnelId) {
        return axios.put("http://localhost:8080/confirmJobAdvert/" + jobAdvertId + "?systemPersonnelId=" + systemPersonnelId)
    }

}