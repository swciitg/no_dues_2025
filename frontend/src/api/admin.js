import axios from 'axios'
import { processStudentData } from '../utils/preprocess';
import { fakeStudents } from '../pages/centralAdmin/dashboard/fakeData2';
import { BASE_URL } from './constants';

// for /dues , /:section and /:section/:subsection
export async function getStudents() {
    try {
        const res = await axios.get(`${BASE_URL}/dues/`);
        if(res.status!=200) throw new Error();
        const data = res.data;
        // const data = fakeStudents;
        processStudentData(data)
        return {studData:data};
    } catch (error) {
        // console.log(error);
        return false;
    }
}


export async function getStudentsBySection(url) {
    try {
        const res = await axios.get(`${BASE_URL}/dues/${url}`);
        if(res.status!=200) throw new Error();
        const data = res.data;
        // const data = fakeStudents;
        processStudentData(data)
        return {studData:data};
    } catch (error) {
        // console.log(error);
        return false;
    }
}


export async function getStudentsBySubSection(url) {
    try {
        const res = await axios.get(`${BASE_URL}/dues/${url}`);
        if(res.status!=200) throw new Error();
        const data = res.data;
        // const data = fakeStudents;
        processStudentData(data)
        return {studData:data};
    } catch (error) {
        // console.log(error);
        return false;
    }
}



export async function changeDue({url='', payload , action}) {
    try {
        let res;
        if (action === 'ADD') res = await axios.post(`${BASE_URL}/dues/${url}`, {payload});
        else res = await axios.delete(`${BASE_URL}/${url}`, {payload});

        if (res.status !== 200) throw new Error();
        const data = res.data;
        return { updatedStudent: data };
    } catch (error) {
        // console.log(error);
        return false;
    }
}
