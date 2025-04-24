export const BoardData =  [
     {title:'Academic Affairs',level:3,pending:0},
     {title:'Hostel Affairs',level:3,pending:0},
    {title:'Student Affairs',level:3,pending:0},
     {title:'Library',level:3,pending:0},
     {title:'Placement',level:3,pending:0},
]
export const BoardMap = {
    'Academic Affairs':0,
    'Hostel Affairs':1,
    'Student Affairs':2,
    'Library':3,
    'Placement':4
} // these are sections data

export const AcademicData = [
    { title: 'Chemical Engineering', level: 2, pending: 0 },
    { title: 'Chemistry', level: 2, pending: 0 },
    { title: 'Civil Engineering', level: 2, pending: 0 },
    { title: 'Computer Science and Engineering', level: 2, pending: 0 },
    { title: 'Design', level: 2, pending: 0 },
    { title: 'Electrical Engineering', level: 2, pending: 0 },
    { title: 'Electronics and Communication Engineering', level: 2, pending: 0 },
    { title: 'Humanities and Social Sciences', level: 2, pending: 0 },
    { title: 'Management', level: 2, pending: 0 },
    { title: 'Mathematics', level: 2, pending: 0 },
    { title: 'Mechanical Engineering', level: 2, pending: 0 },
    { title: 'Mehta Family School of Data Science and Artificial Intelligence', level: 2, pending: 0 },
    { title: 'Physics', level: 2, pending: 0 }
];
export const AcademicMap = {
    'Chemical Engineering': 0,
    'Chemistry': 1,
    'Civil Engineering': 2,
    'Computer Science and Engineering': 3,
    'Design': 4,
    'Electrical Engineering': 5,
    'Electronics and Communication Engineering': 6,
    'Humanities and Social Sciences': 7,
    'Management': 8,
    'Mathematics': 9,
    'Mechanical Engineering': 10,
    'Mehta Family School of Data Science and Artificial Intelligence': 11,
    'Physics': 12
}; // these lead to subsections data


export const HostelData = [
    { title: 'Barak', level: 2, pending: 0 },
    { title: 'Brahmaputra', level: 2, pending: 0 },
    { title: 'Dihing', level: 2, pending: 0 },
    { title: 'Dikhow', level: 2, pending: 0 },
    { title: 'Disang', level: 2, pending: 0 },
    { title: 'Dhansiri', level: 2, pending: 0 },
    { title: 'Gaurang', level: 2, pending: 0 },
    { title: 'Kameng', level: 2, pending: 0 },
    { title: 'Kapili', level: 2, pending: 0 },
    { title: 'Lohit', level: 2, pending: 0 },
    { title: 'Manas', level: 2, pending: 0 },
    { title: 'Siang', level: 2, pending: 0 },
    { title: 'Subansiri', level: 2, pending: 0 },
    { title: 'Umiam', level: 2, pending: 0 }
];
export const HostelMap = {
    'Barak': 0,
    'Brahmaputra': 1,
    'Dihing': 2,
    'Dikhow': 3,
    'Disang': 4,
    'Dhansiri': 5,
    'Gaurang': 6,
    'Kameng': 7,
    'Kapili': 8,
    'Lohit': 9,
    'Manas': 10,
    'Siang': 11,
    'Subansiri': 12,
    'Umiam': 13
};


export const LibraryData = [
    { title: 'Central Library', level: 2, pending: 0 },
    { title: 'Departmental Library', level: 2, pending: 0 }
];
export const LibraryMap = {
    'Central Library': 0,
    'Departmental Library': 1
};


export const PlacementData = [
    { title: 'CCD', level: 2, pending: 0 }
];
export const PlacementMap = {
    'CCD': 0
};


export const StudentData = [
    { title: 'Student Affair', level: 2, pending: 0 },
    { title: 'Miscelleneous', level: 2, pending: 0 },
];
export const StudentMap = {
    'Student Affair': 0,
    'Miscelleneous':1
};

export const sectionToSubSection = {
    'Academic Affairs':[AcademicMap,AcademicData],
    'Hostel Affairs':[HostelMap,HostelData],
    'Student Affairs':[StudentMap,StudentData],
    'Library':[LibraryMap,LibraryData],
    'Placement':[PlacementMap,PlacementData],
    'No Dues':[null,BoardData]
}  // these lead to subsections map


export const subsectionTpSection = {
    ...Object.fromEntries(Object.keys(AcademicMap).map(key => [key, 'Academic Affairs'])),
    ...Object.fromEntries(Object.keys(HostelMap).map(key => [key, 'Hostel Affairs'])),
    ...Object.fromEntries(Object.keys(StudentMap).map(key => [key, 'Student Affairs'])),
    ...Object.fromEntries(Object.keys(PlacementMap).map(key => [key, 'Placement'])),
    ...Object.fromEntries(Object.keys(LibraryMap).map(key => [key, 'Library'])),
};
