const projects = [
    { name: "My Portfolio", file: "lab_portfolio.html" },
    { name: "Time Table", file: "lab_timetable.html" },
    { name: "Student Registration Portal", file: "Student_registration.html" },
    { name: "LINKING webpages", file: "link.html" },
    { name: "Divisions and Classes", file: "DIVandID.html" },
    { name: "Question Paper", file: "Question_paper_updated.html" },
    { name: "Arthmetic Operations", file: "arthimetic.html" },
];



window.onload = function() {
    const projectList = document.getElementById("project-list");
    
    projects.forEach(project => {
        const listItem = document.createElement("li");
        const link = document.createElement("a"); 
        link.href = project.file;  
        link.textContent = project.name;
        link.style.color = 'black';  
        link.style.fontWeight = 'bold';
        listItem.appendChild(link);
        projectList.appendChild(listItem);
    });
};
