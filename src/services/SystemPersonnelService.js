import axios from "axios";

export default class SystemPersonnelService {
    update(values) {
        return axios.post("http://localhost:8080/api/systempersonnels/update", values);
    }

}