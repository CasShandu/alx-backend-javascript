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
