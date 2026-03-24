const API_BASE = "https://courseregistrationsystem-7kon.onrender.com";

function showCourses() {
    fetch(`${API_BASE}/courses`)
        .then((response) => response.json())
        .then((courses) => {
            let dataTable = document.getElementById("coursetable");
            dataTable.innerHTML = "";
            courses.forEach(course => {
                dataTable.innerHTML += `<tr>
                    <td>${course.courseId}</td>
                    <td>${course.courseName}</td>
                    <td>${course.trainer}</td>
                    <td>${course.durationInWeeks}</td>
                </tr>`;
            });
        })
        .catch(() => {
            document.getElementById("coursetable").innerHTML = `<tr><td colspan="4">Failed to load courses.</td></tr>`;
        });
}

function enrolledStudents() {
    fetch(`${API_BASE}/courses/enrolled`)
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
            });
            enrolledTable.innerHTML = rows;
        })
        .catch(() => {
            document.getElementById("enrolledtable").innerHTML = `<tr><td colspan="4">Failed to load students.</td></tr>`;
        });
}

function registerCourse(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const emailId = document.querySelector('input[name="emailId"]').value;
    const courseName = document.querySelector('select[name="courseName"]').value;
    const msg = document.getElementById("msg");

    fetch(`${API_BASE}/courses/register?name=${encodeURIComponent(name)}&emailId=${encodeURIComponent(emailId)}&courseName=${encodeURIComponent(courseName)}`, {
        method: "POST"
    })
    .then(response => response.text())
    .then(message => {
        msg.className = "success";
        msg.textContent = "🎉 " + message;
        event.target.reset();
    })
    .catch(() => {
        msg.className = "error";
        msg.textContent = "❌ Something went wrong. Please try again.";
    });
}