// Dummy data for demonstration
const dummyData = [
    { nim: '120140162',name: 'Alvian Manshurin', department: 'Teknik Informatika', semester: 7, gender: 'Laki-laki', status: 'Aktif' },
    { nim: '220240262', name: 'Alexandra Daddario', department: 'Model & Acting', semester: 9, gender: 'Perempuan', status: 'Non-aktif' },
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
    if (name === '' || nim === '' || department === '' || semester === '' || status === '') {
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
    const headers = ['No', 'Nim', 'Nama', 'Jurusan', 'Semester', 'Jenis Kelamin', 'Status', 'Aksi'];
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

        // Add action buttons (edit and delete)
        const cellActions = row.insertCell();
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editStudent(index);
        cellActions.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.onclick = () => deleteStudent(index);
        cellActions.appendChild(deleteButton);
    });
}

// Fungsi untuk mengedit data mahasiswa
function editStudent(index) {
    // Mendapatkan data mahasiswa berdasarkan indeks
    const studentToEdit = dummyData[index];

    // Mengisi formulir dengan data mahasiswa yang akan diedit
    document.getElementById('nim').value = studentToEdit.nim;
    document.getElementById('name').value = studentToEdit.name;
    document.getElementById('department').value = studentToEdit.department;
    document.getElementById('semester').value = studentToEdit.semester;
    document.getElementById('gender').value = studentToEdit.gender;
    document.querySelector(`input[name="status"][value="${studentToEdit.status}"]`).checked = true;

    // Menyimpan indeks mahasiswa yang akan diedit
    document.getElementById('editIndex').value = index;
}

// Fungsi untuk menghapus data mahasiswa
function deleteStudent(index) {
    // Konfirmasi pengguna sebelum menghapus
    if (confirm('Apakah Anda yakin ingin menghapus mahasiswa ini?')) {
        // Hapus mahasiswa dari array dummyData berdasarkan indeks
        dummyData.splice(index, 1);

        // Menampilkan data yang diperbarui di tabel
        displayData(dummyData);
    }
}

// Fungsi untuk menyimpan perubahan setelah pengeditan
function saveEditedStudent() {
    const index = document.getElementById('editIndex').value;

    // Mendapatkan data yang diperbarui dari formulir
    const nim = document.getElementById('nim').value;
    const name = document.getElementById('name').value;
    const department = document.getElementById('department').value;
    const semester = document.getElementById('semester').value;
    const gender = document.getElementById('gender').value;
    const status = document.querySelector('input[name="status"]:checked').value;

    // Memperbarui data mahasiswa di array dummyData
    dummyData[index] = { nim, name, department, semester, gender, status };

    // Menampilkan data yang diperbarui di tabel
    displayData(dummyData);

    // Mereset formulir setelah pengeditan
    document.getElementById('studentForm').reset();
    document.getElementById('editIndex').value = ''; // Mereset indeks pengeditan
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

