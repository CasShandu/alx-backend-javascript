interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Cas',
  lastName: 'Shandu',
  age: 24,
  location: 'Arizona',
};

const student2: Student = {
  firstName: 'Alice',
  lastName: 'Smith',
  age: 22,
  location: 'Zimbabwe',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);

