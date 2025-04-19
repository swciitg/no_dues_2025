import axios from 'axios'
import { processStudentDataLvl1, processSubSectionDataLvl2 } from '../utils/preprocess';

export async function getAllStudents() {
    try {
        const res = await axios.get(``);
        if(res.status!=200) throw new Error();
        const data = res.data;
        
        const StudData = processStudentDataLvl1(data);
    } catch (error) {
        console.log(error);
        return false;
    }
}

export async function getStudentsDues(section) {
    
}