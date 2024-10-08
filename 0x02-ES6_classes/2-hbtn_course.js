export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Lenght must be a number');
    }
    this._length = length;
  }

  get length() {
    return this._length;
  }

  set students(students) {
    if (!(students instanceof Array)) {
      throw new TypeError('Students must be an array of string');
    }
    if (!students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of string');
    }
    this._students = students;
  }

  get students() {
    return this._students;
  }
}
