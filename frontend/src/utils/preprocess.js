export function processStudentDataLvl1(data) {
    let StudData = {};

    data.forEach(student => {
        student.dues.forEach((due)=>{
            if(!StudData[due.due_subsection] || StudData[due.due_subsection].length==0) {
                StudData[due.due_subsection]=[];
            }
            
            StudData[due.due_subsection].push({
                name:student.name,
                rollNo:student.rollNo,
                email:student.email,
                due:student.due,
                level:1
            })
            

            if(StudData[due.due_section]===undefined || !StudData[due.due_section]) {
                StudData[due.due_section]=new Map();
            }
            if(StudData[due.due_section][due.due_subsection]===undefined || !StudData[due.due_section][due.due_subsection]) {    
                StudData[due.due_section][due.due_subsection] = {
                    title:due_subsection,
                    level:2,
                    pending:0
                }
            }
            StudData[due.due_section][due_subsection].pending++;
        })
    });
    return StudData;
}
