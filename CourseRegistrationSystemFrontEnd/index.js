function showCourses(){
    fetch("https://courseregistrationsystem-7kon.onrender.com/courses")
    .then((response) => response.json())
    .then((courses) => {
        let dataTable = document.getElementById("coursetable");

        courses.forEach(course => {
            var row = `<tr>
            <td>${course.courseId}</td>
            <td>${course.courseName}</td>
            <td>${course.trainer}</td>
            <td>${course.durationInWeeks}</td>
            </tr>`

            dataTable.innerHTML += row;
        })
    })
}

function enrolledStudents(){
    fetch("https://courseregistrationsystem-7kon.onrender.com/enrolled")
    .then((response) => response.json())
    .then((students) => {
        let enrolledTable = document.getElementById("enrolledtable");
        let rows = "";
        students.forEach(student => {
            rows += `<tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.emailId}</td>
            <td>${student.courseName}</td>
            </tr>`;

            enrolledTable.innerHTML = rows;
        });
    });
}

function registerCourse(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const emailId = document.querySelector('input[name="emailId"]').value;
    const courseName = document.querySelector('select[name="courseName"]').value;

    fetch(`https://courseregistrationsystem-8wau.onrender.com/courses/register?name=${encodeURIComponent(name)}&emailId=${encodeURIComponent(emailId)}&courseName=${encodeURIComponent(courseName)}`, {
        method: "POST"
    })
    .then(response => response.text())
    .then(message => {
        alert(message);
    })
    .catch(error => {
        alert("Something went wrong. Please try again.");
    });
}