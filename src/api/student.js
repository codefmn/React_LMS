import axios from 'axios';

export function fetchStudents(){
    return axios.get('/student');
}

export function fetchStudentById(id){
    return axios.get(`/student/${id}`);
}

export function saveStudent(data){
    return axios.post('/student',data);
}

export function updateStudent(id, data){
    return axios.put(`/student/${id}`, data);
}

export function deleteStudentById(id){
    return axios.delete(`/student/${id}`);
}