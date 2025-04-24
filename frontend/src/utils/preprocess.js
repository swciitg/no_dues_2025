import { AcademicData, BoardData, BoardMap, HostelData, LibraryData, PlacementData, sectionToSubSection, StudentData } from "./hcData.js";
import { fakeStudents } from "../pages/centralAdmin/dashboard/fakeData2.js";

export function processStudentData(data) {    

    data.forEach(student => {
        student.dues.forEach((due)=>{

            const section = due.due_section;
            const subsection = due.due_subsection;
            BoardData[BoardMap[section]].pending++;

            const subSectionMap = sectionToSubSection[section][0];
            const subSectionData = sectionToSubSection[section][1];
            subSectionData[subSectionMap[subsection]].pending++;

        })
    });
}


// processStudentData(fakeStudents)
// console.log(BoardData)
// console.log(AcademicData)
// console.log(HostelData)
// console.log(StudentData)
// console.log(PlacementData)
// console.log(LibraryData)
