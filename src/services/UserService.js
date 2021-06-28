import axios from "axios";

export default class UserService {
    changePassword(id,newPassword,password){
        return axios.post("http://localhost:8080/api/user/changePassword?id="+id+"&newPassword="+newPassword+"&password="+password);
    }
}