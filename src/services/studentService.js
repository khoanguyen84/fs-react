import axios from "axios";
import { STUDENT_API } from "./commonService";
class StudentService{
    static getStudents(){
        return axios.get(STUDENT_API, { method: "GET" });
    }

    static getStudent(studentId){
        return axios.get(`${STUDENT_API}/${studentId}`)
    }

    static removeStudent(studentId){
        return axios.delete(`${STUDENT_API}/${studentId}`)
    }

    static updateStudent(newStudent){
        return axios.put(`${STUDENT_API}/${newStudent.id}`, newStudent);
    }

    static createStudent(newStudent){
        return axios.post(STUDENT_API, newStudent)
    }
}

export default StudentService;