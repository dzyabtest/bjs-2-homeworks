function Student(name, gender, age) {
    // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

// ваш код для остальных методов
Student.prototype.addMarks = function (...marksToAdd) {
  if (this.excluded != undefined) {
    return 0;
  }
  if (this.marks === undefined) {
    this.marks = [];
  }
  this.marks.push(...marksToAdd);
}

Student.prototype.getAverage = function () {
  if ((this.marks === undefined)||(this.marks.length === 0)) {
    return 0;
  }
  else {
    return this.marks.reduce((acc, item) => acc + item, 0)/this.marks.length;
  }

}

Student.prototype.exclude = function(reason) {
  if (this.marks === undefined) {
    return 0;
  }

  if (this.excluded != undefined) {
    return 0;
  }

  else {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
    return 1;
  }
}