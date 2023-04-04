import axios from "axios";
class StudentService{
    static getStudents(){
        return axios.get("https://642b7e28208dfe2547192369.mockapi.io/students", { method: "GET" });
    }
}