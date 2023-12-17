// Dummy data for demonstration
const dummyData = [
    { nim: '120140162',name: 'Alvian Manshurin', department: 'Teknik Informatika', semester: 7, gender: 'Laki-laki', status: 'Aktif' },
    { nim: '220240262', name: 'Jane Doe', department: 'Social Engineering', semester: 9, gender: 'Perempuan', status: 'Non-aktif' },
];

document.addEventListener('DOMContentLoaded', function () {
    // Populate table with dummy data on page load
    displayData(dummyData);
});

function submitForm() {
    // Get form data
    
    const nim = document.getElementById('nim').value;
    const name = document.getElementById('name').value;
    const department = document.getElementById('department').value;
    const semester = document.getElementById('semester').value;
    const gender = document.getElementById('gender').value;
    const status = document.querySelector('input[name="status"]:checked').value;

    // Validate form data
    if (name === '' || nim === '' || department === '' || semester === '' || status === undefined) {
        alert('Mohon lengkapi semua data!');
        return;
    }

    // Create a new student object
    const newStudent = { nim, name, department, semester, gender, status };

    // Add the new student to the dummy data array
    dummyData.push(newStudent);

    // Display updated data in the table
    displayData(dummyData);

    // Reset the form
    document.getElementById('studentForm').reset();
}

function displayData(data) {
    const table = document.getElementById('studentTable');

    // Clear existing table content
    table.innerHTML = '';

    // Create table headers
    const headers = ['No', 'Nim', 'Nama', 'Jurusan', 'Semester', 'Jenis Kelamin', 'Status'];
    const headerRow = table.insertRow();
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    // Populate table rows with data and row numbers
    data.forEach((student, index) => {
        const row = table.insertRow();
        
        // Add row number to the first cell
        const cellNumber = row.insertCell();
        cellNumber.textContent = index + 1;
        cellNumber.classList.add('row-number');

        Object.values(student).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    });
}

// Fungsi untuk menetapkan cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Fungsi untuk mendapatkan nilai cookie
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName.trim() === name) {
            return cookieValue;
        }
    }
    return null;
}

// Fungsi untuk menghapus cookie
function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}

// Menetapkan dan mendapatkan nilai cookie
setCookie('user_preference', 'dark_mode', 7);
const userPreference = getCookie('user_preference');
console.log('User Preference:', userPreference);

// Menggunakan browser storage (localStorage)
localStorage.setItem('language', 'english');
const storedLanguage = localStorage.getItem('language');
console.log('Stored Language:', storedLanguage);

// Menghapus cookie
deleteCookie('user_preference');

